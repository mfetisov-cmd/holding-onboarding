import { useCallback, useRef, useState } from 'react';
import type {
  MouseEvent as ReactMouseEvent,
  PointerEvent as ReactPointerEvent,
} from 'react';

type UseDragScrollOptions = {
  axis?: 'x' | 'y';
  threshold?: number;
};

type DragScrollContainerProps = {
  onClickCapture: (event: ReactMouseEvent) => void;
  onPointerCancel: (event: ReactPointerEvent<HTMLDivElement>) => void;
  onPointerDown: (event: ReactPointerEvent<HTMLDivElement>) => void;
  onPointerLeave: (event: ReactPointerEvent<HTMLDivElement>) => void;
  onPointerMove: (event: ReactPointerEvent<HTMLDivElement>) => void;
  onPointerUp: (event: ReactPointerEvent<HTMLDivElement>) => void;
};

export const useDragScroll = (
  options: UseDragScrollOptions = {},
): { containerProps: DragScrollContainerProps; isDragging: boolean } => {
  const { axis = 'x', threshold = 3 } = options;

  const [isDragging, setIsDragging] = useState(false);
  const pointerIdRef = useRef<null | number>(null);
  const startClientRef = useRef(0);
  const startScrollRef = useRef(0);
  const hasMovedRef = useRef(false);
  const isPointerDownRef = useRef(false);

  const handlePointerDown = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      const container = event.currentTarget;
      pointerIdRef.current = event.pointerId;
      startClientRef.current = axis === 'x' ? event.clientX : event.clientY;
      startScrollRef.current =
        axis === 'x' ? container.scrollLeft : container.scrollTop;
      hasMovedRef.current = false;
      isPointerDownRef.current = true;
    },
    [axis],
  );

  const handlePointerMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      // Ignore moves without active press (prevents hover-triggered scroll)
      if (!isPointerDownRef.current) return;
      // For mouse pointers ensure left button is pressed
      if (event.pointerType === 'mouse' && (event.buttons & 1) === 0) return;

      const container = event.currentTarget;
      const current = axis === 'x' ? event.clientX : event.clientY;
      const delta = current - startClientRef.current;
      if (Math.abs(delta) > threshold) {
        // Start real drag only after threshold is exceeded
        if (!isDragging && pointerIdRef.current != null) {
          setIsDragging(true);
          container.setPointerCapture?.(pointerIdRef.current);
        }
        hasMovedRef.current = true;
        if (axis === 'x') {
          container.scrollLeft = startScrollRef.current - delta;
        } else {
          container.scrollTop = startScrollRef.current - delta;
        }
      }
    },
    [axis, isDragging, threshold],
  );

  const endDrag = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    const container = event.currentTarget;
    if (container && pointerIdRef.current != null) {
      try {
        container.releasePointerCapture?.(pointerIdRef.current);
      } catch {
        // no-op
      }
    }
    setIsDragging(false);
    isPointerDownRef.current = false;
  }, []);

  const handleClickCapture = useCallback((event: ReactMouseEvent) => {
    if (hasMovedRef.current) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, []);

  return {
    containerProps: {
      onClickCapture: handleClickCapture,
      onPointerCancel: endDrag,
      onPointerDown: handlePointerDown,
      onPointerLeave: endDrag,
      onPointerMove: handlePointerMove,
      onPointerUp: endDrag,
    },
    isDragging,
  };
};
