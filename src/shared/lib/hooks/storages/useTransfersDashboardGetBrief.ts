import { useCallback, useEffect } from 'react';

import { SmeTransfersDashboardClient } from '@/shared/api/main/browser';
import { GetBriefResponse } from '@/shared/api/main/generated/vivid/frontend/shared/sme/gateway/transfers/dashboard/v1/sme_transfers_dashboard_service_pb';
import { useAsyncFunction } from '@/shared/lib/hooks/useAsyncFunction';
import { useValue } from '@/shared/lib/hooks/useValue';
import { useLegalEntityId } from '@/shared/ui/components/Spaces/ActiveSpaceProvider';

export type StorageValue = {
  getBriefResponse?: GetBriefResponse | null;
};

export const TRANSFERS_DASHBOARD_BRIEF = 'TransfersDashboard-GetBrief';

export const useTransfersDashboardGetBrief = (initialValue?: {
  getBriefResponse?: GetBriefResponse | null;
}) => {
  const legalEntityId = useLegalEntityId();

  const { error, execute, isLoading } = useAsyncFunction(
    SmeTransfersDashboardClient.getBrief,
  );

  const [{ getBriefResponse }, emitter] = useValue<StorageValue>(
    { ...initialValue },
    TRANSFERS_DASHBOARD_BRIEF,
  );

  const update = useCallback(async () => {
    const res = await execute({
      legalEntityId,
    });

    emitter.update({
      getBriefResponse: res,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [legalEntityId]);

  useEffect(() => {
    if (!initialValue && !getBriefResponse) {
      update();
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
    getBriefResponse,
    isLoading,
    update,
  };
};
