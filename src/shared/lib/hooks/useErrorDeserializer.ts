import { useMemo } from 'react';

import { getDetailsListFromMetadata } from '@/shared/services/grpc/utils';

type HookParams<T> = {
  // usually it is deserializeBinary-function from target type, ex: BadRequest.deserializeBinary
  deserializer: (binaryData: Uint8Array) => T;
  // usually it has ServiceError type
  error: any;
  // typeUrl of data which needs to be deserialized, ex: 'type.googleapis.com/google.rpc.BadRequest'
  typeUrl: string;
};

export const deserializeError = <T>({
  deserializer,
  error,
  typeUrl,
}: HookParams<T>): T | undefined => {
  if (!error && !error?.metadata) {
    return undefined;
  }

  const detailsList = getDetailsListFromMetadata(error.metadata);

  const detailsToDeserialize = detailsList?.find(
    (detailsItem) => detailsItem.getTypeUrl() === typeUrl,
  );

  if (detailsToDeserialize) {
    return deserializer(detailsToDeserialize.getValue_asU8());
  }

  return undefined;
};

export function useErrorDeserializer<T>({
  deserializer,
  error,
  typeUrl,
}: HookParams<T>): T | undefined {
  return useMemo(
    () => deserializeError({ deserializer, error, typeUrl }),
    [error, typeUrl, deserializer],
  );
}
