'use client';
import { useEffect } from 'react';

export const useResizeHandler = (callback: () => void) => {
  useEffect(() => {
    const handleResize = () => {
      callback();
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
