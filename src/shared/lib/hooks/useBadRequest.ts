import { useMemo } from 'react';

import { BadRequest } from '@/shared/api/rpc/generated/google/rpc/error_details_pb';
import { deserializeError } from '@/shared/lib/hooks/useErrorDeserializer';

export type FlatBadRequest = {
  [flattenRequestFieldKey: string]: string;
};

export const getBadRequestFromError = (error: any): FlatBadRequest => {
  const badRequest = deserializeError({
    deserializer: BadRequest.deserializeBinary,
    error,
    typeUrl: 'type.googleapis.com/google.rpc.BadRequest',
  });

  if (!badRequest) {
    return {};
  }

  const fieldViolations: FlatBadRequest = {};

  badRequest?.getFieldViolationsList()?.forEach((fieldViolation) => {
    fieldViolations[fieldViolation.getField()] =
      fieldViolation.getDescription();
  });

  return fieldViolations;
};

export function useBadRequest(error: any): FlatBadRequest {
  return useMemo(() => getBadRequestFromError(error), [error]);
}
