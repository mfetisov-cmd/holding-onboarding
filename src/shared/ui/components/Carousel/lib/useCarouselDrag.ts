import { MouseEvent, useCallback, useState } from 'react';

import { DEFAULT_DRAG_THRESHOLD } from '../model';

type UseCarouselDragProps = {
  currentPage: number;
  dragThreshold?: number;
  onNext: () => void;
  onPrev: () => void;
  totalPages: number;
};

export const useCarouselDrag = ({
  currentPage,
  dragThreshold = DEFAULT_DRAG_THRESHOLD,
  onNext,
  onPrev,
  totalPages,
}: UseCarouselDragProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragX, setDragX] = useState(0);

  const handleMouseDown = useCallback((e: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setDragX(0);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!isDragging) return;

      // Calculate drag distance
      const currentDragX = e.clientX - startX;
      setDragX(currentDragX);

      // Prevent text selection during dragging
      e.preventDefault();
    },
    [isDragging, startX],
  );

  const handleDragEnd = useCallback(
    (dragDistance: number) => {
      // If dragged far enough, change page
      if (Math.abs(dragDistance) >= dragThreshold) {
        if (dragDistance > 0 && currentPage > 0) {
          onPrev();
        } else if (dragDistance < 0 && currentPage < totalPages - 1) {
          onNext();
        }
      }

      setIsDragging(false);
      setDragX(0);
    },
    [currentPage, dragThreshold, onNext, onPrev, totalPages],
  );

  const handleMouseUp = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!isDragging) return;

      const dragDistance = e.clientX - startX;
      handleDragEnd(dragDistance);
    },
    [handleDragEnd, isDragging, startX],
  );

  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      setDragX(0);
    }
  }, [isDragging]);

  return {
    dragX,
    handleDragEnd,
    handleMouseDown,
    handleMouseLeave,
    handleMouseMove,
    handleMouseUp,
    isDragging,
    startX,
  };
};
