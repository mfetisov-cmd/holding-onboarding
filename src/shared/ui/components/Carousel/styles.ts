import styled, { css, keyframes } from 'styled-components';

const pulse = keyframes`
  0%   { transform: scale(1);   }
  50%  { transform: scale(1.3); }
  100% { transform: scale(1);   }
`;

export const CarouselWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

export const Viewport = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

/**
 * Track:
 * - width = trackWidthPercent% (e.g., 200% for 2 pages, 300% for 3, etc.)
 * - offset = offsetPercent% (if currentPage=1 out of 2 => 50%)
 */
export const Track = styled.div<{
  $offsetPercent: number;
  $trackWidthPercent: number;
}>`
  display: flex;
  flex-wrap: nowrap;
  transition: transform 0.4s ease;
  user-select: none;

  width: ${({ $trackWidthPercent }) => $trackWidthPercent}%;
  transform: translateX(-${({ $offsetPercent }) => $offsetPercent}%);
`;

/**
 * Slide:
 * - occupies calc((100% - (totalSlots - 1) * gap) / totalSlots)
 *   (i.e., we "subtract" the total gap from 100% of the track,
 *    then divide the remaining space by totalSlots)
 * - for all slides except the last one, we apply margin-right: gap
 */
export const Slide = styled.div<{
  $gap: number;
  $isLast: boolean;
  $totalSlots: number;
}>`
  box-sizing: border-box;

  width: ${({ $gap, $totalSlots, theme }) =>
    `calc((100% - (${$totalSlots - 1} * ${theme.token.sizeUnits(
      $gap,
    )})) / ${$totalSlots})`};

  margin-right: ${({ $gap, $isLast, theme }) =>
    $isLast ? 0 : theme.token.sizeUnits($gap)};
`;

export const ArrowContainer = styled.div<{ $arrowPosition: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%)
    scaleX(${({ $arrowPosition }) => ($arrowPosition === 'left' ? -1 : 1)});
  z-index: 2;
  cursor: pointer;
  user-select: none;

  ${({ $arrowPosition, theme }) =>
    `${$arrowPosition}: -${theme.token.sizeUnits(6)};`}
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.token.sizeUnits(8)};
  gap: ${({ theme }) => theme.token.sizeUnits(4)};
`;

export const Dot = styled.div<{ $active: boolean }>`
  width: ${({ theme }) => theme.token.sizeUnits(4)};
  height: ${({ theme }) => theme.token.sizeUnits(4)};
  border-radius: 50%;
  background-color: ${({ $active, theme }) =>
    $active ? theme.token.color.c6 : theme.token.color.c4};
  cursor: pointer;

  ${({ $active }) =>
    $active &&
    css`
      animation: ${pulse} 0.4s ease;
    `}
`;
