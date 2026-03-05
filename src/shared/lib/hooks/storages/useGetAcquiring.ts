import { useCallback, useEffect } from 'react';

import { AcquiringDataClient } from '@/shared/api/main/browser';
import { GetAcquiringDataResponse } from '@/shared/api/main/generated/vivid/frontend/shared/capt/product/client_api/v1/acquiring_data_service_pb';
import { useAsyncFunction } from '@/shared/lib/hooks/useAsyncFunction';
import { useValue } from '@/shared/lib/hooks/useValue';
import { useLegalEntityId } from '@/shared/ui/components/Spaces/ActiveSpaceProvider';

export type GetAcquiringValue = {
  getAcquiringResponse?: GetAcquiringDataResponse | null;
};

export const GET_ACQUIRING_STORE_KEY = 'get-acquiring';

export const useGetAcquiring = (initialValue?: GetAcquiringDataResponse) => {
  const legalEntityId = useLegalEntityId();

  const { error, execute, isLoading } = useAsyncFunction(
    AcquiringDataClient.getAcquiringData,
  );

  const [{ getAcquiringResponse }, emitter] = useValue<GetAcquiringValue>(
    {
      ...initialValue,
    },
    GET_ACQUIRING_STORE_KEY,
  );

  const refreshGetAcquiring = useCallback(async () => {
    const res = await execute({
      legalEntityId,
    });

    emitter.update({
      getAcquiringResponse: res,
    });

    return res;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [legalEntityId]);

  useEffect(() => {
    if (!initialValue && !getAcquiringResponse) {
      refreshGetAcquiring();
    }
    if (initialValue) {
      emitter.update({
        getAcquiringResponse: initialValue,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    error,
    getAcquiringResponse,
    isLoading,
    refreshGetAcquiring,
  };
};
