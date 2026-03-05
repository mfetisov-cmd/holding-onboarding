import { useEffect } from 'react';

import { useTwoColumnsLayoutState } from './useTwoColumnsLayoutState';

export const useTwoColumnsOnBackSetter = (onBackHandler?: () => void) => {
  const [{ onBack: currentOnBack }, emitter] = useTwoColumnsLayoutState();

  useEffect(() => {
    emitter.update({ onBack: onBackHandler });

    return () => {
      if (currentOnBack === onBackHandler) {
        emitter.update({ onBack: undefined });
      }
    };
  }, [currentOnBack, emitter, onBackHandler]);
};
