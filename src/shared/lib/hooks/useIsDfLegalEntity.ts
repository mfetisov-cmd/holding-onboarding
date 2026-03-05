import { DOGFOODERS_LEGAL_ENTITIES_LIST } from '@/screens/payments/modals/transfer/constants';
import { useLegalEntityId } from '@/shared/ui/components/Spaces/ActiveSpaceProvider';

export const useIsDfLegalEntity = () => {
  const legalEntityId = useLegalEntityId();
  return DOGFOODERS_LEGAL_ENTITIES_LIST.indexOf(legalEntityId) !== -1;
};
