import { PreconditionFailure } from '@/shared/api/rpc/generated/google/rpc/error_details_pb';
import {
  deserializeError,
  useErrorDeserializer,
} from '@/shared/lib/hooks/useErrorDeserializer';

export const getPreconditionFailure = (
  error: any,
): PreconditionFailure | undefined =>
  deserializeError({
    deserializer: PreconditionFailure.deserializeBinary,
    error,
    typeUrl: 'type.googleapis.com/google.rpc.PreconditionFailure',
  });

export function usePreconditionFailure(
  error: any,
): PreconditionFailure | undefined {
  return useErrorDeserializer({
    deserializer: PreconditionFailure.deserializeBinary,
    error,
    typeUrl: 'type.googleapis.com/google.rpc.PreconditionFailure',
  });
}
