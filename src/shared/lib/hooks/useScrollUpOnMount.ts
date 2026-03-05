import { useEffect, useRef } from 'react';

export const useScrollUpOnMount = <T extends HTMLElement>({
  behavior = 'smooth',
  ...rest
}: ScrollOptions) => {
  const scrollToRef = useRef<T>(null);

  useEffect(() => {
    scrollToRef.current?.scrollIntoView({ behavior, ...rest });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return scrollToRef;
};
