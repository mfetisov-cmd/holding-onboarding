import { useCallback, useEffect } from 'react';

import { SmeBillClient } from '@/shared/api/main/browser';
import { ListBillsResponse } from '@/shared/api/main/generated/vivid/frontend/shared/sme/gateway/bill/v1/sme_bill_service_pb';
import { useAsyncFunction } from '@/shared/lib/hooks/useAsyncFunction';
import { useValue } from '@/shared/lib/hooks/useValue';
import { useLegalEntityId } from '@/shared/ui/components/Spaces/ActiveSpaceProvider';

export type ListBillsStorageValue = {
  listBillsResponse?: ListBillsResponse | null;
};

export const LIST_BILLS_STORAGE_KEY = 'list-bills';

export const useListBills = (initialValue?: {
  listBillsResponse?: ListBillsResponse | null;
}) => {
  const legalEntityId = useLegalEntityId();

  const { error, execute, isLoading } = useAsyncFunction(
    SmeBillClient.listBills,
  );

  const [{ listBillsResponse }, emitter] = useValue<ListBillsStorageValue>(
    { ...initialValue },
    LIST_BILLS_STORAGE_KEY,
  );

  const updateListBills = useCallback(async () => {
    const res = await execute({
      legalEntityId,
    });

    emitter.update({
      listBillsResponse: res,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [legalEntityId]);

  useEffect(() => {
    if (!initialValue && !listBillsResponse) {
      updateListBills();
    }

    if (initialValue) {
      emitter.update({
        ...initialValue,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    error,
    isLoading,
    listBillsResponse,
    updateListBills,
  };
};
