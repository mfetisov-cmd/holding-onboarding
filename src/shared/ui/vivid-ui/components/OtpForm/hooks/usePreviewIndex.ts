import { useCallback, useEffect, useRef, useState } from 'react';

export const usePreviewIndex = () => {
  const timeout = useRef<NodeJS.Timeout>(undefined);
  const [previewIndex, setPreviewIndex] = useState(-1);

  const handleDigitChange = useCallback((index: number) => {
    clearTimeout(timeout.current);
    setPreviewIndex(index);
    timeout.current = setTimeout(() => setPreviewIndex(-1), 500);
  }, []);

  useEffect(() => () => clearTimeout(timeout.current), []);

  return {
    onDigitChange: handleDigitChange,
    previewIndex,
  };
};
