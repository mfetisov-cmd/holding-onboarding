import {
  CSSProperties,
  MouseEvent,
  TouchEvent,
  useEffect,
  useRef,
} from 'react';

import { useTheme } from 'styled-components';

import { ArrowForwardCenter24 } from '@/shared/ui/vivid-ui/components/Icons';
import { Flex } from '@/shared/ui/vivid-ui/components/Layout';

import { IconButton } from '../IconButton';
import {
  useCarouselDrag,
  useCarouselNavigation,
  usePrepareSlides,
} from './lib';
import {
  CarouselProps,
  DEFAULT_GAP,
  DEFAULT_ITEMS_TO_SHOW,
  RESISTANCE_FACTOR,
} from './model';
import {
  ArrowContainer,
  CarouselWrapper,
  Dot,
  DotsContainer,
  Slide,
  Track,
  Viewport,
} from './styles';

/**
 * Arrow component for carousel navigation
 */
const Arrow = () => {
  const theme = useTheme();

  return (
    <IconButton
      backgroundColor={theme.token.color.c0}
      borderColor={theme.token.color.c4}
      size="small"
    >
      <ArrowForwardCenter24 color={theme.token.color.c1} size={20} />
    </IconButton>
  );
};

/**
 * Carousel component that supports mouse and touch swiping
 */
export const Carousel = ({
  gap = DEFAULT_GAP,
  items,
  itemsToShow = DEFAULT_ITEMS_TO_SHOW,
  showDots = true,
}: CarouselProps) => {
  const trackRef = useRef<HTMLDivElement>(null);

  // Calculate pagination values
  const totalPages = Math.ceil(items.length / itemsToShow);
  const totalSlots = totalPages * itemsToShow;

  // Prepare slides with placeholders if needed
  const slides = usePrepareSlides(items, totalSlots);

  // Navigation state and handlers
  const { currentPage, handleDotClick, handleNext, handlePrev } =
    useCarouselNavigation(totalPages);

  // Drag state and handlers
  const {
    dragX,
    handleMouseDown,
    handleMouseLeave,
    handleMouseMove,
    handleMouseUp,
    isDragging,
  } = useCarouselDrag({
    currentPage,
    onNext: handleNext,
    onPrev: handlePrev,
    totalPages,
  });

  // Calculate track positioning
  const trackWidthPercent = totalPages * 100;
  const baseOffsetPercent = (currentPage / totalPages) * 100;

  // Calculate drag offset with resistance factor
  const dragOffsetPercent = isDragging
    ? (dragX / (trackRef.current?.clientWidth || 1)) *
      100 *
      -1 *
      RESISTANCE_FACTOR
    : 0;

  // Combine base offset with drag offset, with limits to prevent dragging beyond bounds
  const offsetPercent = Math.max(
    0,
    Math.min(
      baseOffsetPercent + dragOffsetPercent,
      ((totalPages - 1) / totalPages) * 100,
    ),
  );

  // Track styling based on drag state
  const trackStyle: CSSProperties = {
    transition: isDragging ? 'none' : 'transform 0.4s ease',
  };

  // Add passive touch event listeners for better performance
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const options = { passive: true };

    const touchStartHandler = (e: TouchEvent) => {
      handleMouseDown({
        clientX: e.touches[0].clientX,
      } as MouseEvent<HTMLDivElement>);
    };

    const touchMoveHandler = (e: TouchEvent) => {
      handleMouseMove({
        clientX: e.touches[0].clientX,
        preventDefault: () => {},
      } as MouseEvent<HTMLDivElement>);
    };

    const touchEndHandler = (e: TouchEvent) => {
      handleMouseUp({
        clientX: e.changedTouches[0].clientX,
      } as MouseEvent<HTMLDivElement>);
    };

    track.addEventListener('touchstart', touchStartHandler as any, options);
    track.addEventListener('touchmove', touchMoveHandler as any, options);
    track.addEventListener('touchend', touchEndHandler as any);

    return () => {
      track.removeEventListener('touchstart', touchStartHandler as any);
      track.removeEventListener('touchmove', touchMoveHandler as any);
      track.removeEventListener('touchend', touchEndHandler as any);
    };
  }, [handleMouseDown, handleMouseMove, handleMouseUp]);

  return (
    <Flex direction="column">
      <CarouselWrapper>
        {currentPage > 0 && (
          <ArrowContainer $arrowPosition="left" onClick={handlePrev}>
            <Arrow />
          </ArrowContainer>
        )}

        <Viewport>
          <Track
            $offsetPercent={offsetPercent}
            $trackWidthPercent={trackWidthPercent}
            ref={trackRef}
            style={trackStyle}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            {slides.map((item, idx) => (
              <Slide
                $gap={gap}
                $isLast={idx === slides.length - 1}
                $totalSlots={totalSlots}
                key={idx}
              >
                {item}
              </Slide>
            ))}
          </Track>
        </Viewport>

        {currentPage < totalPages - 1 && (
          <ArrowContainer $arrowPosition="right" onClick={handleNext}>
            <Arrow />
          </ArrowContainer>
        )}
      </CarouselWrapper>

      {showDots && (
        <DotsContainer>
          {Array.from({ length: totalPages }, (_, i) => {
            const isActive = i === currentPage;
            return (
              <Dot
                $active={isActive}
                key={i}
                onClick={() => handleDotClick(i)}
              />
            );
          })}
        </DotsContainer>
      )}
    </Flex>
  );
};
