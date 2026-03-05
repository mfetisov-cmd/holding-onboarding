import { useEffect, useRef } from 'react';

import {
  createPopper,
  Placement,
  Instance as PopperInstance,
  StrictModifiers,
} from '@popperjs/core';

export const usePopoverPosition = (
  popoverRef: React.RefObject<HTMLDivElement | null>,
  triggerRef: React.RefObject<HTMLElement | null>,
  isOpen: boolean,
  placement: Placement = 'bottom',
  arrowRef?: React.RefObject<HTMLDivElement | null>,
) => {
  const popperInstance = useRef<null | PopperInstance>(null);
  useEffect(() => {
    if (isOpen && triggerRef.current && popoverRef.current) {
      const modifiers: StrictModifiers[] = [
        {
          name: 'offset',
          options: {
            offset: [0, 6], // Offset by 6 pixels to account for smaller arrow size
          },
        },
      ];

      // Add arrow modifier if arrow element is provided
      if (arrowRef?.current) {
        modifiers.push({
          name: 'arrow',
          options: {
            element: arrowRef.current,
            padding: 6, // Reduced padding for better centering
          },
        });
      }

      popperInstance.current = createPopper(
        triggerRef.current,
        popoverRef.current,
        {
          modifiers,
          placement,
        },
      );
    }

    return () => {
      popperInstance.current?.destroy();
      popperInstance.current = null;
    };
  }, [isOpen, placement, popoverRef, triggerRef, arrowRef]);
};
