import { useMemo } from 'react';

import { LocalizedMessage } from '@/shared/api/rpc/generated/google/rpc/error_details_pb';
import { Status } from '@/shared/api/rpc/generated/google/rpc/status_pb';
import { toUintArray } from '@/shared/services/grpc/utils';

export const useLocalizedMessageError = (error?: Error) => {
  return useMemo(() => {
    if (!error) return;
    try {
      const status = Status.deserializeBinary(
        toUintArray(error.message),
      ).getDetailsList();
      return LocalizedMessage.deserializeBinary(
        toUintArray(status[0].getValue_asB64()),
      ).getMessage();
    } catch (err) {
      return undefined;
    }
  }, [error]);
};
