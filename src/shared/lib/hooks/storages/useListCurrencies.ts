import { useCallback, useEffect } from 'react';

import { SmeAccountClient } from '@/shared/api/main/browser';
import { ListCurrenciesResponse } from '@/shared/api/main/generated/vivid/frontend/shared/sme/gateway/account/v1/sme_account_service_pb';
import { useAsyncFunction } from '@/shared/lib/hooks/useAsyncFunction';
import { useValue } from '@/shared/lib/hooks/useValue';
import { useActiveSpace } from '@/shared/ui/components/Spaces/ActiveSpaceProvider';
import { getSmeSpaceDetails } from '@/shared/ui/components/Spaces/hooks/useSmeSpaceDetails';

export type ListCurrenciesValue = {
  otherCurrenciesList?: string[];
  popularCurrenciesList?: string[];
};

export const LIST_CURRENCIES_STORE_KEY = 'list-currencies';

export const useListCurrencies = (initialValue?: ListCurrenciesResponse) => {
  const activeSpace = useActiveSpace();
  const { execute, isLoading } = useAsyncFunction(
    SmeAccountClient.listCurrencies,
  );

  const [{ otherCurrenciesList, popularCurrenciesList }, emitter] =
    useValue<ListCurrenciesValue>(
      {
        otherCurrenciesList: initialValue?.getOtherCurrenciesList(),
        popularCurrenciesList: initialValue?.getPopularCurrenciesList(),
      },
      LIST_CURRENCIES_STORE_KEY,
    );

  const updateCurrenciesList = useCallback(async () => {
    const res = await execute({
      legalEntityId: getSmeSpaceDetails(activeSpace)?.getLegalEntityId(),
    });

    emitter.update({
      otherCurrenciesList: res?.getOtherCurrenciesList(),
      popularCurrenciesList: res?.getPopularCurrenciesList(),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSpace]);

  useEffect(() => {
    if (!initialValue && (!otherCurrenciesList || !popularCurrenciesList)) {
      updateCurrenciesList();
    }
    if (initialValue) {
      emitter.update({
        otherCurrenciesList: initialValue?.getOtherCurrenciesList(),
        popularCurrenciesList: initialValue?.getPopularCurrenciesList(),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    otherCurrenciesList,
    popularCurrenciesList,
    updateCurrenciesList,
  };
};
