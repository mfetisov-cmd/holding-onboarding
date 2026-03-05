import { useRef } from 'react';

export function useThrottle<T extends (...args: any[]) => any>(
  callback: T,
  interval: number,
): (...args: Parameters<T>) => ReturnType<T> | void {
  const lastCall = useRef<null | number>(null);

  return (...args: Parameters<T>): ReturnType<T> | void => {
    const now = Date.now();

    if (!lastCall.current || now - lastCall.current >= interval) {
      lastCall.current = now;

      return callback(...args);
    }
  };
}
