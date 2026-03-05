import { useCallback, useEffect, useRef } from 'react';

import { hashObject } from '@/screens/transactions/ui/TransactionsGrid/utils/hashObject';
import { OperationFeedClient } from '@/shared/api/main/browser';
import { OperationFeedFilter } from '@/shared/api/main/generated/vivid/frontend/shared/superapp_backend/operation/feed/v1/filter_messages_pb';
import {
  FeedSetupMap,
  GetOperationFilterDictionaryResponse,
} from '@/shared/api/main/generated/vivid/frontend/shared/superapp_backend/operation/feed/v1/operation_feed_service_pb';
import { useAsyncFunction } from '@/shared/lib/hooks/useAsyncFunction';
import { useValue } from '@/shared/lib/hooks/useValue';
import { isAbortError } from '@/shared/services/grpc/asAsync/helpers';
import { useLegalEntityId } from '@/shared/ui/components/Spaces/ActiveSpaceProvider';

type ListApplicationsValue = {
  isLoading?: boolean;
  operationFilterDictionary?: GetOperationFilterDictionaryResponse | null;
};

export const useOperationFilterDictionary = ({
  feedSetupsList,
  filter,
}: UseFetchOperationFilterDictionaryParams) => {
  const [{ isLoading = true, operationFilterDictionary }, emitter] =
    useValue<ListApplicationsValue>(
      {},
      createOperationsFilterDictionaryStorageKey({ feedSetupsList, filter }),
    );

  const fetchFilterDictionary = useFetchOperationFilterDictionary({
    feedSetupsList,
    filter,
  });

  useEffect(() => {
    const emitterGet = emitter.get;
    if (emitterGet().isLoading) return;

    void fetchFilterDictionary();
  }, [emitter.get, fetchFilterDictionary]);

  return {
    isLoading,
    operationFilterDictionary,
    updateOperationFilterDictionary: fetchFilterDictionary,
  };
};

type UseFetchOperationFilterDictionaryParams = {
  feedSetupsList: FeedSetupMap[keyof FeedSetupMap][] | undefined;
  filter: OperationFeedFilter;
};

const useFetchOperationFilterDictionary = ({
  feedSetupsList,
  filter,
}: UseFetchOperationFilterDictionaryParams) => {
  const legalEntityId = useLegalEntityId();

  const [, emitter] = useValue<ListApplicationsValue>(
    {},
    createOperationsFilterDictionaryStorageKey({ feedSetupsList, filter }),
  );

  const abortControllerRef = useRef<AbortController>(undefined);

  const { execute } = useAsyncFunction(
    useCallback(async () => {
      const emitterUpdate = emitter.update;

      emitterUpdate({ isLoading: true });

      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      await OperationFeedClient.getOperationFilterDictionary({
        feedSetupsList,
        filter,
        legalEntityId,
      })
        .then((response) =>
          emitterUpdate({ operationFilterDictionary: response }),
        )
        .catch((error) =>
          isAbortError(error) ? undefined : Promise.reject(error),
        )
        .finally(() => emitterUpdate({ isLoading: false }));
    }, [emitter.update, feedSetupsList, filter, legalEntityId]),
  );

  useEffect(() => () => abortControllerRef.current?.abort(), []);

  return execute;
};

const createOperationsFilterDictionaryStorageKey = ({
  feedSetupsList,
  filter,
}: UseFetchOperationFilterDictionaryParams) => {
  return `operation-filter-dictionary-${
    feedSetupsList && hashObject([feedSetupsList, filter.toObject()])
  }`;
};
