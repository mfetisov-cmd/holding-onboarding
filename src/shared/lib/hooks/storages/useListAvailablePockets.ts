import { useCallback, useEffect, useMemo } from 'react';

import { hashObject } from '@/screens/transactions/ui/TransactionsGrid/utils/hashObject';
import { SmePocketClient } from '@/shared/api/main/browser';
import { Money } from '@/shared/api/main/generated/google/type/money_pb';
import {
  SmePocket,
  SmePocketType,
  SmePocketTypeMap,
} from '@/shared/api/main/generated/vivid/frontend/shared/sme/gateway/pocket/v2/sme_pocket_pb';
import { ListAvailablePocketsResponse } from '@/shared/api/main/generated/vivid/frontend/shared/sme/gateway/pocket/v2/sme_pocket_service_pb';
import { useAsyncFunction } from '@/shared/lib/hooks/useAsyncFunction';
import { useValue } from '@/shared/lib/hooks/useValue';
import { useActiveSpace } from '@/shared/ui/components/Spaces/ActiveSpaceProvider';
import { getSmeSpaceDetails } from '@/shared/ui/components/Spaces/hooks/useSmeSpaceDetails';

export type IntraTransferFormValue = {
  pocketsList?: SmePocket[];
  totalBalance?: Money;
  totalExternalBalance?: Money;
};

export const LIST_AVAILABLE_POCKETS_STORE_KEY = 'pocket-list-state-v2';

export const useListAvailablePockets = (
  initialValue?: ListAvailablePocketsResponse,
  params: {
    includeDeleted?: boolean;
    typesList?: Array<SmePocketTypeMap[keyof SmePocketTypeMap]>;
  } = {
    includeDeleted: true,
    typesList: [
      SmePocketType.SME_POCKET_TYPE_CURRENCY,
      SmePocketType.SME_POCKET_TYPE_MERCHANT,
      SmePocketType.SME_POCKET_TYPE_INTEREST_RATE,
      SmePocketType.SME_POCKET_TYPE_CREDIT_LINE,
    ],
  },
) => {
  const activeSpace = useActiveSpace();
  const { execute, isLoading } = useAsyncFunction(
    useMemo(() => SmePocketClient.listAvailablePockets, []),
  );

  const legalEntityId = getSmeSpaceDetails(activeSpace)?.getLegalEntityId();

  const [{ pocketsList, totalBalance, totalExternalBalance }, emitter] =
    useValue<IntraTransferFormValue>(
      {
        pocketsList: initialValue?.getPocketsList(),
        totalBalance: initialValue?.getTotalBalance(),
        totalExternalBalance: initialValue?.getTotalExternalBalance(),
      },
      `${LIST_AVAILABLE_POCKETS_STORE_KEY}-${legalEntityId}-${hashObject(
        params,
      )}`,
    );

  const updatePocketsList = useCallback(async () => {
    const res = await execute({
      legalEntityId,
      ...params,
    });

    emitter.update({
      pocketsList: res?.getPocketsList(),
      totalBalance: res?.getTotalBalance(),
      totalExternalBalance: res?.getTotalExternalBalance(),
    });
    return res?.getPocketsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [legalEntityId]);

  const getPocketById = (pocketId: string): SmePocket | undefined => {
    return pocketsList?.find((p) => p.getId() === pocketId);
  };

  useEffect(() => {
    if (!initialValue && !pocketsList) {
      updatePocketsList();
    }
    if (initialValue) {
      emitter.update({
        pocketsList: initialValue.getPocketsList(),
        totalBalance: initialValue?.getTotalBalance(),
        totalExternalBalance: initialValue?.getTotalExternalBalance(),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    getPocketById,
    isLoading,
    pocketsList,
    totalBalance,
    totalExternalBalance,
    updatePocketsList,
  };
};
