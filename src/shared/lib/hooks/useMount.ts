import { useEffect, useRef } from 'react';

// Use to avoid useEffect be called twice in dev mode
export const useMount = (callback: () => void) => {
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      callback();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
