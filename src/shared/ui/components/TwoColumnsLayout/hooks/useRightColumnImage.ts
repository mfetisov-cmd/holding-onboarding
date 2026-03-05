import { useEffect } from 'react';

import {
  DARK_LOGO_KEYS,
  RightColumnImageKey,
  useTwoColumnsLayoutState,
} from '@/shared/ui/components/TwoColumnsLayout/hooks/useTwoColumnsLayoutState';

export const useRightColumnImage = (key: RightColumnImageKey) => {
  const [, emitter] = useTwoColumnsLayoutState(key);

  useEffect(() => {
    emitter.update({
      isDarkLogo: DARK_LOGO_KEYS.includes(key),
      rightColumnImageKey: key,
    });
  }, [emitter, key]);
};
