// SmeInterestAccountDashboardClientV2.getBrief

import { useCallback, useEffect, useMemo, useRef } from 'react';

import { useQuery } from '@tanstack/react-query';

import { applyGiftBonusToGetBriefResponse } from '@/screens/invest/interest/components/modules/Gift/lib';
import { getGiftQueryOptions } from '@/screens/invest/interest/components/modules/Gift/model/queries';
import { usePortfolioId } from '@/screens/invest/interest/components/modules/Portfolio';
import { SmeInterestAccountDashboardClientV2 } from '@/shared/api/main/browser';
import { GetBriefResponse } from '@/shared/api/main/generated/vivid/frontend/web/sme/gateway/interest_account/v2/sme_interest_account_dashboard_service_pb';
import { useValue } from '@/shared/lib/hooks/useValue';
import { useLegalEntityId } from '@/shared/ui/components/Spaces/ActiveSpaceProvider';

export type GetBriefValue = {
  error?: Error | null;
  isLoading?: boolean;
  // [GiftPercentWorkaround] Store raw response without gift modifications
  rawGetBriefResponse?: GetBriefResponse | null;
};

export const GET_BRIEF_V2_STORE_KEY = 'get-brief-v2';

// Global promise map for request deduplication
const requestPromiseMap = new Map<string, Promise<GetBriefResponse | null>>();

const createRequestKey = (legalEntityId: string, portfolioId: string) =>
  `${legalEntityId}-${portfolioId}`;

export const useGetBriefv2 = (initialValue?: GetBriefResponse) => {
  const legalEntityId = useLegalEntityId();
  const { portfolioId, setPortfolioId } = usePortfolioId();
  const portfolioIdRef = useRef(portfolioId);
  useEffect(() => {
    portfolioIdRef.current = portfolioId;
  }, [portfolioId]);

  // [GiftPercentWorkaround] Get gift data to apply bonus percentage
  const { data: giftData } = useQuery(getGiftQueryOptions(legalEntityId));

  const [{ error = null, isLoading = false, rawGetBriefResponse }, emitter] =
    useValue<GetBriefValue>(
      {
        error: null,
        isLoading: false,
        rawGetBriefResponse: initialValue,
      },
      GET_BRIEF_V2_STORE_KEY,
    );

  // [GiftPercentWorkaround] Apply gift bonus to strategies when gift data is available
  const getBriefResponse = useMemo(() => {
    if (!rawGetBriefResponse) return rawGetBriefResponse;

    return applyGiftBonusToGetBriefResponse(
      rawGetBriefResponse,
      giftData,
      portfolioId,
    );
  }, [rawGetBriefResponse, giftData, portfolioId]);

  const executeRequest = useCallback(
    async (
      requestLegalEntityId: string,
      requestPortfolioId: string,
    ): Promise<GetBriefResponse | null> => {
      const requestKey = createRequestKey(
        requestLegalEntityId,
        requestPortfolioId,
      );

      // If there's already an active promise for these parameters, return it
      if (requestPromiseMap.has(requestKey)) {
        return requestPromiseMap.get(requestKey)!;
      }

      // Create new promise and save it to the map
      const requestPromise = (async (): Promise<GetBriefResponse | null> => {
        try {
          const currentState = emitter.get();

          // Only set isLoading to true if we don't have data yet (initial load)
          // This prevents UI flickering during data refresh/polling
          if (!currentState.rawGetBriefResponse) {
            emitter.update({
              error: null,
              isLoading: true,
            });
          }

          const res = await SmeInterestAccountDashboardClientV2.getBrief({
            legalEntityId: requestLegalEntityId,
            portfolioId: requestPortfolioId,
          });

          const portfolioIdResponse = res?.getOnboarded()?.getPortfolioId();
          const currentPortfolioId = portfolioIdRef.current;
          if (portfolioIdResponse && !currentPortfolioId) {
            setPortfolioId(portfolioIdResponse);
          }

          // Ignore response if portfolioId changed while the request was in-flight
          if (
            currentPortfolioId &&
            currentPortfolioId !== portfolioIdResponse
          ) {
            return res;
          }

          // [GiftPercentWorkaround] Store raw response, gift bonus will be applied in useMemo
          emitter.update({
            error: null,
            isLoading: false,
            rawGetBriefResponse: res,
          });

          return res;
        } catch (requestError) {
          const errorToLog =
            requestError instanceof Error
              ? requestError
              : new Error(String(requestError));

          emitter.update({
            error: errorToLog,
            isLoading: false,
          });

          return null;
        } finally {
          // Clean up promise from map after completion
          requestPromiseMap.delete(requestKey);
        }
      })();

      requestPromiseMap.set(requestKey, requestPromise);
      return requestPromise;
    },
    [emitter, setPortfolioId],
  );

  const refreshGetBrief = useCallback(
    async ({ isInitial }: { isInitial?: boolean } = {}) => {
      // TODO find a better way to prevent client requests before the initial server value is set
      if (isInitial && emitter.get().rawGetBriefResponse) {
        return emitter.get().rawGetBriefResponse;
      }

      return executeRequest(legalEntityId, portfolioIdRef.current);
    },
    [emitter, executeRequest, legalEntityId],
  );

  useEffect(() => {
    if (!initialValue && !rawGetBriefResponse && !isLoading) {
      refreshGetBrief({ isInitial: true });
    }
    if (initialValue) {
      emitter.update({
        error: null,
        isLoading: false,
        rawGetBriefResponse: initialValue,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    error,
    getBriefResponse,
    // [GiftPercentWorkaround] Expose raw response for onboarding flows where gift bonus should not be shown
    getBriefResponseRaw: rawGetBriefResponse,
    isLoading,
    refreshGetBrief,
  };
};
