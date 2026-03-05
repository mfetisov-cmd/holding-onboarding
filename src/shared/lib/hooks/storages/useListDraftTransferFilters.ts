import { useCallback, useEffect } from 'react';

import { SmeTransferApprovesClient } from '@/shared/api/main/browser';
import { ListDraftTransferFiltersResponse } from '@/shared/api/main/generated/vivid/frontend/shared/sme/gateway/transfers/approve/v1/sme_draft_transfers_service_pb';
import { useAsyncFunction } from '@/shared/lib/hooks/useAsyncFunction';
import { useValue } from '@/shared/lib/hooks/useValue';
import { useLegalEntityId } from '@/shared/ui/components/Spaces/ActiveSpaceProvider';

export type ListDraftTransferFiltersStorageValue = {
  listDraftTransferFiltersResponse?: ListDraftTransferFiltersResponse | null;
};

export const LIST_DRAFT_TRANSFER_FILTERS_STORAGE_KEY =
  'list-draft-transfer-filters';

export const useListDraftTransferFilters = (initialValue?: {
  listDraftTransferFiltersResponse?: ListDraftTransferFiltersResponse | null;
}) => {
  const legalEntityId = useLegalEntityId();

  const { error, execute, isLoading } = useAsyncFunction(
    SmeTransferApprovesClient.listDraftTransferFilters,
  );

  const [{ listDraftTransferFiltersResponse }, emitter] =
    useValue<ListDraftTransferFiltersStorageValue>(
      { ...initialValue },
      LIST_DRAFT_TRANSFER_FILTERS_STORAGE_KEY,
    );

  const updateListBills = useCallback(async () => {
    const res = await execute({
      legalEntityId,
    });

    emitter.update({
      listDraftTransferFiltersResponse: res,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [legalEntityId]);

  useEffect(() => {
    if (!initialValue && !listDraftTransferFiltersResponse) {
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
    listDraftTransferFiltersResponse,
    updateListBills,
  };
};
