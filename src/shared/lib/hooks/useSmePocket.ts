import { useCallback, useEffect, useState } from 'react';

import { SmePocketClient } from '@/shared/api/main/browser';
import { SmePocket } from '@/shared/api/main/generated/vivid/frontend/shared/sme/gateway/pocket/v2/sme_pocket_pb';
import { ListAvailablePocketsRequest } from '@/shared/api/main/generated/vivid/frontend/shared/sme/gateway/pocket/v2/sme_pocket_service_pb';
import { SetterParameters } from '@/shared/services/grpc/asAsync';
import { useActiveSpace } from '@/shared/ui/components/Spaces/ActiveSpaceProvider';

export const useListAvailablePockets = ({
  includeDeleted,
  typesList,
}: Omit<
  Partial<SetterParameters<ListAvailablePocketsRequest>>,
  'legalEntityId'
>) => {
  const activeSpace = useActiveSpace();
  const [pending, setPending] = useState(false);
  const [availablePocketsList, setAvailablePocketsList] = useState<
    SmePocket[] | undefined
  >(undefined);

  const listAvailablePockets = useCallback(async () => {
    setPending(true);
    try {
      const list = await SmePocketClient.listAvailablePockets({
        includeDeleted,
        legalEntityId: activeSpace.getRelatedId(),
        typesList,
      });
      setAvailablePocketsList(list?.getPocketsList());
    } finally {
      setPending(false);
    }
  }, [activeSpace, includeDeleted, typesList]);

  useEffect(() => {
    listAvailablePockets();
  }, [listAvailablePockets]);

  return { availablePocketsList, pending };
};
