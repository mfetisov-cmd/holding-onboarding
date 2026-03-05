import * as Sentry from '@sentry/nextjs';

import {
  ScaConfirmationFlowResult,
  useScaConfirmationFlow,
} from '@/modules/Confirmation/useScaConfirmation';
import {
  ScaAnswer,
  ScaRequired,
} from '@/shared/api/main/generated/vivid/shared/v1/sca_pb';
import { deserializeError } from '@/shared/lib/hooks/useErrorDeserializer';
import { Logger } from '@/shared/lib/logger';
import {
  getPublicKey,
  getSignedMessage,
} from '@/shared/lib/utils/confirmationKeys';
import { getClientFingerprint } from '@/shared/lib/utils/getClientFingerprint';
import { GenericRequest } from '@/shared/services/grpc/asAsync';

const getScaAnswer = async (
  scaId: string,
  message: string,
): Promise<ScaAnswer> => {
  const signature = await getSignedMessage(message);

  const scaAnswer = new ScaAnswer();
  scaAnswer.setId(scaId);
  scaAnswer.setSignature(signature);

  return scaAnswer;
};

const getScaRequired = (error: unknown) =>
  deserializeError({
    deserializer: ScaRequired.deserializeBinary,
    error,
    typeUrl: 'type.googleapis.com/vivid.shared.v1.ScaRequired',
  });

type RequestSupportedSCA = GenericRequest & {
  setSca: (value: ScaAnswer) => void;
};

type RequestFunction<Req, Res> = (req: Req) => Promise<Res>;

const getPublicKeyHash = async () => {
  try {
    const publicKey = getPublicKey();
    const data = new TextEncoder().encode(publicKey);
    const digest = await crypto.subtle.digest('SHA-256', data);

    return Array.from(new Uint8Array(digest))
      .map((value) => value.toString(16).padStart(2, '0'))
      .join('');
  } catch (_e) {
    return null;
  }
};

export const useRequestWithSca = () => {
  const { initializeScaConfirmationFlow } = useScaConfirmationFlow();

  /**
   * Make sure that you prevent default form submit event if you are using <form /> element.
   * Its behaviour could cause issues with Sca Handling and couse "Response closed without headers" error
   * @param requestFunc - RequestFunction<T, U>,
   * @param scaMessage - (scaId: string) => string
   */
  const withSca = <T extends RequestSupportedSCA, U>(
    requestFunc: RequestFunction<T, U>,
    scaMessage: (scaId: string) => string,
  ) => {
    return async (req: T): Promise<{ isCanceled: boolean } | U> => {
      try {
        return await requestFunc(req);
      } catch (error) {
        const isScaRequired = getScaRequired(error);

        if (!isScaRequired) {
          throw error;
        }

        const scaId = isScaRequired.getId();

        try {
          const result = await initializeScaConfirmationFlow(scaId);
          if (result === ScaConfirmationFlowResult.canceledByUser) {
            Sentry.captureMessage(`Sca Confirmation Flow canceled by user`, {
              fingerprint: ['SCA canceled by user'],
              level: 'info',
            });
            return { isCanceled: true };
          }
        } catch (error: any) {
          Sentry.captureMessage(
            `Sca Confirmation Flow failed with unexpected error. Message: ${error?.message}; Code: ${error?.code}`,
            {
              fingerprint: ['SCA failed unexpectedly'],
              level: 'fatal',
            },
          );
          throw error;
        }

        const message = scaMessage(scaId);
        const scaAnswer = await getScaAnswer(scaId, message);

        if (req.setSca) {
          req.setSca(scaAnswer);
        } else {
          // @ts-ignore
          req['sca'] = scaAnswer;
        }

        try {
          // Don't replace it with `return await requestFunc(req)` otherwise catch(e) won't work
          const res = await requestFunc(req);
          return res;
        } catch (error: any) {
          const scaId = message?.split('|')?.[0];
          const publicKeyHash = await getPublicKeyHash();
          let publicKeyBase64: null | string = null;

          try {
            publicKeyBase64 = getPublicKey();
          } catch (_e) {
            publicKeyBase64 = null;
          }

          const logMessage = `Requests failed after Sca. Message: ${error?.message}; Code: ${error?.code}; Signed message: ${message};`;
          Sentry.captureMessage(logMessage, {
            extra: {
              fingerprint: getClientFingerprint(),
              publicKeyBase64,
              publicKeyHash,
              scaId,
              signedMessage: message,
            },
            fingerprint: ['Request failed after SCA'],
            level: 'fatal',
          });
          Logger.error(new Error('Requests failed after Sca'), {
            extraMessage: logMessage,
            fingerprint: getClientFingerprint(),
            publicKeyBase64,
            publicKeyHash,
            scaId,
            signedMessage: message,
          });
          throw error;
        }
      }
    };
  };

  return { withSca };
};
