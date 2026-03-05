'use client';
import { useActiveSpace } from '@/shared/ui/components/Spaces/ActiveSpaceProvider';
import { getSmeSpaceDetails } from '@/shared/ui/components/Spaces/hooks/useSmeSpaceDetails';

import { MobilePlaceholderBase } from './MobilePlaceholderBase';

export const MobilePlaceholderProduct = () => {
  const activeSpace = useActiveSpace();

  const legal_entity_id = getSmeSpaceDetails(activeSpace)!.getLegalEntityId();

  return (
    <MobilePlaceholderBase
      legalEntityId={legal_entity_id}
      spaceId={activeSpace.getId()}
    />
  );
};
