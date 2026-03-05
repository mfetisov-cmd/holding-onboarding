import { useCallback, useEffect } from 'react';

import { SmeTransferApprovesClient } from '@/shared/api/main/browser';
import { ListDraftTransfersResponse } from '@/shared/api/main/generated/vivid/frontend/shared/sme/gateway/transfers/approve/v1/sme_draft_transfers_service_pb';
import { useAsyncFunction } from '@/shared/lib/hooks/useAsyncFunction';
import { useValue } from '@/shared/lib/hooks/useValue';
import { useLegalEntityId } from '@/shared/ui/components/Spaces/ActiveSpaceProvider';

export type ListDraftTransfersStorageValue = {
  listDraftTransfersResponse?: ListDraftTransfersResponse | null;
};

export const LIST_DRAFT_TRANSFERS_STORAGE_KEY = 'list-draft-transfers';

export const useListDraftTransfers = (initialValue?: {
  listDraftTransfersResponse?: ListDraftTransfersResponse | null;
}) => {
  const legalEntityId = useLegalEntityId();

  const { error, execute, isLoading } = useAsyncFunction(
    SmeTransferApprovesClient.listDraftTransfers,
  );

  const [{ listDraftTransfersResponse }, emitter] =
    useValue<ListDraftTransfersStorageValue>(
      { ...initialValue },
      LIST_DRAFT_TRANSFERS_STORAGE_KEY,
    );

  const updateListDraftTransfers = useCallback(async () => {
    const res = await execute({
      legalEntityId,
    });

    emitter.update({
      listDraftTransfersResponse: res,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [legalEntityId]);

  useEffect(() => {
    if (!initialValue && !listDraftTransfersResponse) {
      updateListDraftTransfers();
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
    listDraftTransfersResponse,
    updateListDraftTransfers,
  };
};
