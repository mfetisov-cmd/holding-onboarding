import { useCallback, useEffect } from 'react';

import { RegularPaymentsClient } from '@/shared/api/main/browser';
import { GetUpcomingPaymentsResponse } from '@/shared/api/main/generated/vivid/frontend/mobile/capt/payments/transfer_manager/transfers/v1/regular_payments_service_pb';
import { useAsyncFunction } from '@/shared/lib/hooks/useAsyncFunction';
import { useValue } from '@/shared/lib/hooks/useValue';
import { useLegalEntityId } from '@/shared/ui/components/Spaces/ActiveSpaceProvider';

export type StorageValue = {
  getUpcomingPaymentsResponse?: GetUpcomingPaymentsResponse | null;
};

export const REGULAR_PAYMENTS_GET_UPCOMING_PAYMENTS =
  'regular-payments-get-upcoming-payments';

export const useUpcomingPayments = (initialValue?: {
  getUpcomingPaymentsResponse?: GetUpcomingPaymentsResponse | null;
}) => {
  const legalEntityId = useLegalEntityId();

  const { error, execute, isLoading } = useAsyncFunction(
    RegularPaymentsClient.getUpcomingPayments,
  );

  const [{ getUpcomingPaymentsResponse }, emitter] = useValue<StorageValue>(
    { ...initialValue },
    REGULAR_PAYMENTS_GET_UPCOMING_PAYMENTS,
  );

  const updateGetUpcomingPayments = useCallback(async () => {
    const res = await execute({
      legalEntityId,
    });

    emitter.update({
      getUpcomingPaymentsResponse: res,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [legalEntityId]);

  useEffect(() => {
    if (!initialValue && !getUpcomingPaymentsResponse) {
      updateGetUpcomingPayments();
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
    getUpcomingPaymentsResponse,
    isLoading,
    updateGetUpcomingPayments,
  };
};
