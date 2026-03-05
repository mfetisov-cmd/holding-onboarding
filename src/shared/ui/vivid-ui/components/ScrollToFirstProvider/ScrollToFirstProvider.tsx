import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useRef,
} from 'react';

import { useDebounce } from '@/shared/lib/hooks/useDebounce';

const ScrollControllerContext = createContext<
  (targetRef?: HTMLElement) => void
>(() => {});

export const useScrollToElement = () => useContext(ScrollControllerContext);

/**
 * A component designed to control scrolling to child common.
 * When multiple child elements trigger scroll functions, the controller calculates the topmost one and scrolls to it.
 */
export const ScrollToFirstProvider = ({ children }: PropsWithChildren) => {
  const upperScrollTarget = useRef<HTMLElement>(undefined);

  const scrollToUpperTarget = useDebounce(() => {
    upperScrollTarget.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
    upperScrollTarget.current = undefined;
  }, 100);

  const handleNewScrollTarget = useCallback(
    (targetRef?: HTMLElement) => {
      if (!targetRef) {
        return;
      }

      if (
        !upperScrollTarget.current ||
        targetRef.getBoundingClientRect().y <
          upperScrollTarget.current.getBoundingClientRect().y
      ) {
        upperScrollTarget.current = targetRef;
        scrollToUpperTarget();
      }
    },
    [scrollToUpperTarget],
  );

  return (
    <ScrollControllerContext.Provider value={handleNewScrollTarget}>
      {children}
    </ScrollControllerContext.Provider>
  );
};
