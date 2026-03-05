import { useCallback, useEffect } from 'react';

import { SmeCardClient } from '@/shared/api/main/browser';
import { ListCardHoldersCardsResponse } from '@/shared/api/main/generated/vivid/frontend/shared/sme/gateway/card/v1/sme_card_service_pb';
import { useAsyncFunction } from '@/shared/lib/hooks/useAsyncFunction';
import { useValue } from '@/shared/lib/hooks/useValue';
import { useLegalEntityId } from '@/shared/ui/components/Spaces/ActiveSpaceProvider';

export type ListCardholderCardsValue = {
  listCardHoldersCardsResponse?: ListCardHoldersCardsResponse | null;
};

export const LIST_CARDHOLDER_CARDS_STORE_KEY = 'list-cardholders-cards';

export const useListCardholderCards = (initialValue?: {
  listCardHoldersCardsResponse?: ListCardHoldersCardsResponse | null;
}) => {
  const legalEntityId = useLegalEntityId();
  const { error, execute, isLoading } = useAsyncFunction(
    SmeCardClient.listCardHoldersCards,
  );

  const [{ listCardHoldersCardsResponse }, emitter] =
    useValue<ListCardholderCardsValue>(
      { ...initialValue },
      LIST_CARDHOLDER_CARDS_STORE_KEY,
    );

  const updateListCardholderCards = useCallback(async () => {
    const res = await execute({
      legalEntityId,
    });

    emitter.update({
      listCardHoldersCardsResponse: res,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [legalEntityId]);

  useEffect(() => {
    if (!initialValue && !listCardHoldersCardsResponse) {
      updateListCardholderCards();
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
    listCardHoldersCardsResponse,
    updateListCardholderCards,
  };
};
