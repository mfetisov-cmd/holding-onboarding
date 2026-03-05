import { ReactNode, useMemo } from 'react';

/**
 * Hook for preparing slides with placeholders if needed
 *
 * We add "placeholder" slides so that totalSlots = items.length + placeholders.
 * For example, if we have 5 items and itemsToShow=3, then totalPages=2 → totalSlots=6,
 * which means we add 1 placeholder to get exactly 6 slides.
 *
 * @param items - Original items to display in the carousel
 * @param totalSlots - Total number of slots needed
 * @returns Array of slides with placeholders added if needed
 */
export const usePrepareSlides = (
  items: ReactNode[],
  totalSlots: number,
): ReactNode[] => {
  return useMemo(() => {
    const filled = [...items];

    while (filled.length < totalSlots) {
      filled.push(<div style={{ opacity: 0 }}>{/* Placeholder */}</div>);
    }

    return filled;
  }, [items, totalSlots]);
};
