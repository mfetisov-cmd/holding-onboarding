import { DependencyList, RefObject, useEffect } from 'react';

export type UseOnOutsideConfig = {
  event?: 'click' | 'mousedown' | 'mouseup';
  onClick: (event: MouseEvent) => void;
  target: RefObject<HTMLElement | null> | RefObject<HTMLElement | null>[];
};

export const useOnOutside = (
  { event: targetEvent = 'click', onClick, target }: UseOnOutsideConfig,
  deps: DependencyList = [],
) => {
  useEffect(() => {
    const refs = [target].flat();

    if (!refs.length) {
      return;
    }

    const listner = (event: MouseEvent) => {
      if (
        refs.every((ref) => {
          return !ref.current?.contains(event.target as Node);
        })
      ) {
        onClick?.(event);
      }
    };

    document.addEventListener(targetEvent, listner);

    return () => {
      document.removeEventListener(targetEvent, listner);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- disabled while refactoring, delete this comment after consideration if array of dependencies have more than one dependency
  }, deps);
};
