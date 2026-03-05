import { useEffect, useMemo, useRef } from 'react';

// eslint-disable-next-line no-restricted-imports
import debounce from 'debounce';

export function useDebounce<T extends (...args: any) => any>(callback: T, delay: number) {
  const ref = useRef<T>(undefined);

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = (...args: Parameters<T>) => {
      ref.current?.(...args);
    };

    return debounce(func, delay);
  }, [delay]);

  return debouncedCallback;
}
