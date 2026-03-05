import { ReactNode } from 'react';

/**
 * Props for the Carousel component
 */
export interface CarouselProps {
  /**
   * Gap between carousel items in size units
   * @default 8
   */
  gap?: number;

  /**
   * Array of React nodes to display as carousel items
   */
  items: ReactNode[];

  /**
   * Number of items to show per page
   * @default 1
   */
  itemsToShow?: number;

  /**
   * Whether to show navigation dots
   * @default true
   */
  showDots?: boolean;
}
