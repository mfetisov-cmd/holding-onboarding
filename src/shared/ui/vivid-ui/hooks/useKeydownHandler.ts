import { useCallback, useEffect } from 'react';

export const useKeydownHandler = (key: string, callback: () => void) => {
  const onKeydown = useCallback(
    (evt: KeyboardEvent) => {
      if (evt.key === key) callback();
    },
    [key, callback],
  );

  useEffect(() => {
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, [onKeydown]);
};
