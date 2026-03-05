import { useCallback, useState } from 'react';

export const useCarouselNavigation = (totalPages: number) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrev = useCallback(() => {
    setCurrentPage((p) => Math.max(p - 1, 0));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentPage((p) => Math.min(p + 1, totalPages - 1));
  }, [totalPages]);

  const handleDotClick = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  return {
    currentPage,
    handleDotClick,
    handleNext,
    handlePrev,
  };
};
