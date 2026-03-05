import { useEffect } from 'react';

import * as Sentry from '@sentry/nextjs';
import { useTranslations } from 'next-intl';

import { useBadRequest } from '@/shared/lib/hooks/useBadRequest';
import { useLocalizedMessage } from '@/shared/lib/hooks/useLocalizedMessage';
import { getRandomUUIDv4 } from '@/shared/lib/utils/getRandomUUIDv4';
import { ErrorType, EventType, sendEvent } from '@/shared/services/analytics';
import { SendEventParameters } from '@/shared/services/analytics/sendEvent';
import { useLegalEntityId } from '@/shared/ui/components/Spaces/ActiveSpaceProvider';
import { useToaster } from '@/shared/ui/components/Toaster';

export const useToastForLocalizedMessage = (
  error: any,
  screen: string,
  params?: SendEventParameters,
  defaultErrorMessage?: string,
) => {
  const t = useTranslations('common');
  const { toast } = useToaster();

  const legal_entity_id = useLegalEntityId();

  const badRequest = useBadRequest(error);
  const localizedMessage = useLocalizedMessage(error);

  const sendErrorEvent = (error_msg: string) => {
    sendEvent(EventType.EVENT_TYPE_VIEW_ERROR, screen, {
      error_msg,
      error_type: ErrorType.ELEMENT_ERROR,
      legal_entity_id,
      ...params,
    });
  };

  useEffect(() => {
    if (localizedMessage) {
      toast({
        id: localizedMessage.getMessage(),
        severity: 'error',
        title: localizedMessage.getMessage(),
      });

      sendErrorEvent(localizedMessage.getMessage());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localizedMessage]);

  useEffect(() => {
    if (error && !localizedMessage && Object.keys(badRequest).length === 0) {
      toast({
        id: getRandomUUIDv4(),
        severity: 'error',
        title: defaultErrorMessage || t('errors.sww_title'),
      });

      Sentry.captureMessage(`Generic SWW. Message ${error?.message};`, {
        fingerprint: ['Generic SWW'],
        level: 'error',
      });

      sendErrorEvent(t('errors.sww_title'));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);
};
