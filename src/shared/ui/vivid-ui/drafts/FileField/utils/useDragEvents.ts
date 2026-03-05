import { useCallback, useEffect, useRef } from 'react';

const DEFAULT_DRAG_STATE_RESET_TIMEOUT_MS = 300;

export const useDragEvents = ({
  onEnd,
  onStart,
}: {
  onEnd: () => void;
  onStart: () => void;
}) => {
  const timer = useRef<NodeJS.Timeout>(undefined);

  const handleStart = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = undefined;
    }

    onStart();
  }, [onStart]);

  const handleEnd = useCallback(() => {
    timer.current = setTimeout(() => {
      onEnd();
      clearTimeout(timer.current);
      timer.current = undefined;
    }, DEFAULT_DRAG_STATE_RESET_TIMEOUT_MS);
  }, [onEnd]);

  useEffect(() => {
    window.addEventListener('dragover', handleStart);
    window.addEventListener('dragleave', handleEnd);
    window.addEventListener('dragend', handleEnd);
    window.addEventListener('drop', handleEnd);

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
        timer.current = undefined;
      }
      window.removeEventListener('dragover', handleStart);
      window.removeEventListener('dragleave', handleEnd);
      window.removeEventListener('dragend', handleEnd);
      window.removeEventListener('drop', handleEnd);
    };
    // Event listeners should be added only when component is mounted and removed on unmount, no deps are needed here
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
