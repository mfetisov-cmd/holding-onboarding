import { useMemo } from 'react';

import { SmeSpace } from '@/shared/api/main/generated/vivid/frontend/shared/sme/space/v1/sme_space_pb';
import { Space } from '@/shared/api/main/generated/vivid/frontend/shared/superapp_backend/pocket/api/v1/spaces_service_pb';

export const getSmeSpaceDetails = (space: Space): SmeSpace | undefined => {
  const detailsUInt8Array = space.getDetails()?.getValue_asU8();
  return detailsUInt8Array
    ? SmeSpace.deserializeBinary(detailsUInt8Array)
    : undefined;
};

export const useSmeSpaceDetails = (space: Space): SmeSpace | undefined => {
  return useMemo(() => getSmeSpaceDetails(space), [space]);
};
