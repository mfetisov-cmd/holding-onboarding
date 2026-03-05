import { useCallback, useEffect } from 'react';

import { SmeCashLoanClient } from '@/shared/api/main/browser';
import { GetBriefInfoResponse } from '@/shared/api/main/generated/vivid/frontend/shared/sme/gateway/cash_loan/v1/sme_cash_loan_service_pb';
import { useAsyncFunction } from '@/shared/lib/hooks/useAsyncFunction';
import { useValue } from '@/shared/lib/hooks/useValue';
import { useLegalEntityId } from '@/shared/ui/components/Spaces/ActiveSpaceProvider';

export type ListBillsStorageValue = {
  getBriefInfoResponse?: GetBriefInfoResponse | null;
};

export const CASH_LOAN_GET_BRIEF_INFO_STORAGE_KEY =
  'sme-cash-loan-get-brief-info';

export const useGetBriefInfo = (initialValue?: {
  getBriefInfoResponse?: GetBriefInfoResponse | null;
}) => {
  const legalEntityId = useLegalEntityId();

  const { error, execute, isLoading } = useAsyncFunction(
    SmeCashLoanClient.getBriefInfo,
  );

  const [{ getBriefInfoResponse }, emitter] = useValue<ListBillsStorageValue>(
    { ...initialValue },
    CASH_LOAN_GET_BRIEF_INFO_STORAGE_KEY,
  );

  const updateGetBriefInfo = useCallback(async () => {
    const res = await execute({
      legalEntityId,
    });

    emitter.update({
      getBriefInfoResponse: res,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [legalEntityId]);

  useEffect(() => {
    if (!initialValue && !getBriefInfoResponse) {
      updateGetBriefInfo();
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
    getBriefInfoResponse,
    isLoading,
    updateGetBriefInfo,
  };
};
