import { useCallback, useLayoutEffect } from 'react';

import { SmeInterestAccountDashboardClientV2 } from '@/shared/api/main/browser';
import { GetBannersResponse } from '@/shared/api/main/generated/vivid/frontend/web/sme/gateway/interest_account/v1/sme_interest_account_dashboard_service_pb';
import { useAsyncFunction } from '@/shared/lib/hooks/useAsyncFunction';
import { useValue } from '@/shared/lib/hooks/useValue';
import { useLegalEntityId } from '@/shared/ui/components/Spaces/ActiveSpaceProvider';

export type GetBriefValue = {
  getBannersResponse: GetBannersResponse | null;
};

export const GET_BANNERS_STORE_KEY = 'get-banners';

export const useGetBanner = (initialValue?: GetBannersResponse) => {
  const legalEntityId = useLegalEntityId();

  const { execute, isLoading } = useAsyncFunction(
    SmeInterestAccountDashboardClientV2.getBanners,
  );

  const [{ getBannersResponse }, emitter] = useValue<GetBriefValue>(
    {
      getBannersResponse: initialValue ?? null,
    },
    GET_BANNERS_STORE_KEY,
  );

  const refresh = useCallback(async () => {
    const res = await execute({
      legalEntityId,
    });

    emitter.update({
      getBannersResponse: res,
    });

    return res;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [legalEntityId]);

  useLayoutEffect(() => {
    if (!initialValue && !getBannersResponse) {
      refresh();
    }
    if (initialValue) {
      emitter.update({
        getBannersResponse: initialValue,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    getBannersResponse,
    isLoading,
    refresh,
  };
};
