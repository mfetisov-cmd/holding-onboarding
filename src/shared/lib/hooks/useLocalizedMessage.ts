import { LocalizedMessage } from '@/shared/api/rpc/generated/google/rpc/error_details_pb';
import {
  deserializeError,
  useErrorDeserializer,
} from '@/shared/lib/hooks/useErrorDeserializer';

export const getLocalizedMessage = (error: any): LocalizedMessage | undefined =>
  deserializeError({
    deserializer: LocalizedMessage.deserializeBinary,
    error,
    typeUrl: 'type.googleapis.com/google.rpc.LocalizedMessage',
  });

export function useLocalizedMessage(error: any): LocalizedMessage | undefined {
  return useErrorDeserializer({
    deserializer: LocalizedMessage.deserializeBinary,
    error,
    typeUrl: 'type.googleapis.com/google.rpc.LocalizedMessage',
  });
}
