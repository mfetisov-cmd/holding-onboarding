import { css, styled } from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import { ButtonProps } from '@/shared/ui/vivid-ui/components/ButtonV2/Button';
import { getStyledSkeletonAnimationStyle } from '@/shared/ui/vivid-ui/components/Skeleton/styles';
import { PrefixType } from '@/shared/ui/vivid-ui/shared';
import { colorToHsla } from '@/shared/ui/vivid-ui/utils/colors/colorToHsla';

type StyledButtonProps = PrefixType<
  Pick<ButtonProps, 'corners' | 'fullWidth' | 'loading' | 'size' | 'variant'>,
  '$'
> & { $hasIcons: boolean };

const getButtonContentGapSize = ({
  $size,
}: Pick<StyledButtonProps, '$size'>) => {
  switch ($size) {
    case 'small':
      return 2;
    case 'medium':
    case 'large':
    default:
      return 4;
  }
};

const getButtonSizeStyles = ({ $size }: StyledButtonProps) => {
  switch ($size) {
    case 'small':
      return css`
        height: ${(props) => props.theme.token.sizeUnits(16)};
        padding: ${(props) => `0 ${props.theme.token.sizeUnits(4)}`};
        gap: ${(props) =>
          `${props.theme.token.sizeUnits(getButtonContentGapSize({ $size }))}`};
        border-radius: ${(props) => props.theme.token.sizeUnits(4)};
        font: ${(props) => props.theme.token.font.bodyXS};
      `;
    case 'medium':
      return css`
        height: ${(props) => props.theme.token.sizeUnits(24)};
        padding: ${(props) => `0 ${props.theme.token.sizeUnits(7)}`};
        gap: ${(props) =>
          `${props.theme.token.sizeUnits(getButtonContentGapSize({ $size }))}`};
        border-radius: ${(props) => props.theme.token.sizeUnits(6)};
        font: ${(props) => props.theme.token.font.labelS};
      `;
    case 'large':
    default:
      return css`
        height: ${(props) => props.theme.token.sizeUnits(28)};
        padding: ${(props) => `0 ${props.theme.token.sizeUnits(8)}`};
        gap: ${(props) =>
          `${props.theme.token.sizeUnits(getButtonContentGapSize({ $size }))}`};
        border-radius: ${(props) => props.theme.token.sizeUnits(8)};
        font: ${(props) => props.theme.token.font.labelM};
      `;
  }
};

const getButtonCornersStyle = ({ $corners, $size }: StyledButtonProps) => {
  if ($corners === 'fully-rounded') {
    return css`
      border-radius: ${(props) => props.theme.token.sizeUnits(50)};
    `;
  }

  switch ($size) {
    case 'small':
      return css`
        border-radius: ${(props) => props.theme.token.sizeUnits(4)};
      `;
    case 'medium':
      return css`
        border-radius: ${(props) => props.theme.token.sizeUnits(6)};
      `;
    case 'large':
    default:
      return css`
        border-radius: ${(props) => props.theme.token.sizeUnits(8)};
      `;
  }
};

/*
   To simplify working with element states, a single value—background lightness—is used for modification.

   For example, the initial background color of an element is HSL(263, 92, 58).
   On hover, the lightness is reduced by 5 points, resulting in HSL(263, 92, 53),
   and on click, it decreases by an additional 3 points, resulting in HSL(263, 92, 50).
 */
const getButtonStateColorStyles = (backgroundColor: string) => {
  const hsla = colorToHsla(backgroundColor);
  if (!hsla) {
    return undefined;
  }

  return css`
    &:hover,
    &:focus-visible {
      background-color: hsl(
        ${hsla.hue} ${hsla.saturation}% ${hsla.lightness - 5}%
      );
    }

    &:focus-visible {
      outline: 2rem solid ${(props) => props.theme.token.color.c13};
    }

    &:active {
      background-color: hsl(
        ${hsla.hue} ${hsla.saturation}% ${hsla.lightness - 8}%
      );
    }
  `;
};

const getButtonColorStyles = ({ $loading, $variant }: StyledButtonProps) => {
  let colorStyles: ReturnType<typeof css>;

  switch ($variant) {
    case 'ghost':
      colorStyles = css`
        background-color: transparent;
        ${(props) => getButtonStateColorStyles(props.theme.token.color.c6t)}
        color: ${(props) => props.theme.token.color.c6};
        fill: ${(props) => props.theme.token.color.c6};
      `;
      break;
    case 'secondary':
      colorStyles = css`
        background-color: ${(props) => props.theme.token.color.c5};
        ${(props) => getButtonStateColorStyles(props.theme.token.color.c5)}
        color: ${(props) => props.theme.token.color.c1};
        fill: ${(props) => props.theme.token.color.c1};
      `;
      break;
    case 'destructive':
      colorStyles = css`
        background-color: ${(props) => props.theme.token.color.c8t};
        ${(props) => getButtonStateColorStyles(props.theme.token.color.c8t)}
        color: ${(props) => props.theme.token.color.c8};
        fill: ${(props) => props.theme.token.color.c8};
      `;
      break;
    case 'shimmer':
      colorStyles = css`
        background-color: ${(props) => props.theme.token.color.c17};
        color: transparent !important;
        fill: transparent !important;
        ${() => getStyledSkeletonAnimationStyle({ $animated: true })};
      `;
      break;
    case 'primary':
    default:
      colorStyles = css`
        background-color: ${(props) => props.theme.token.color.c6};
        ${(props) => getButtonStateColorStyles(props.theme.token.color.c6)}
        color: ${(props) => props.theme.token.color.c11};
        fill: ${(props) => props.theme.token.color.c11};
      `;
      break;
  }

  const disabledColorStyles = css`
    &[disabled],
    &:disabled {
      background-color: ${(props) => props.theme.token.color.c5};
      color: ${(props) => props.theme.token.color.c3};
      fill: ${(props) => props.theme.token.color.c3};
    }
  `;

  const loadingColorStyles = css`
    ${StyledContent}, ${StyledButtonIcon} {
      opacity: 0;
    }
  `;

  return css`
    ${colorStyles}

    ${$loading ? loadingColorStyles : disabledColorStyles};
  `;
};

export const StyledButton = styled(Box)<StyledButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
  max-width: 100%;
  cursor: pointer;
  border: none;

  &[disabled],
  &:disabled {
    pointer-events: none;
  }

  ${getButtonSizeStyles}
  ${getButtonCornersStyle}
  ${getButtonColorStyles}
`;

export const StyledButtonIcon = styled.div<{ $iconSize: number }>`
  width: ${(props) => props.$iconSize}rem;
  height: ${(props) => props.$iconSize}rem;
  flex-shrink: 0;
`;

export const StyledButtonLoadingIcon = styled.div<{ $iconSize: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: calc(50% - ${(props) => `${props.$iconSize / 2}rem`});
  left: calc(50% - ${(props) => `${props.$iconSize / 2}rem`});
  width: ${(props) => props.$iconSize}rem;
  height: ${(props) => props.$iconSize}rem;
  flex-shrink: 0;
`;

export const StyledContent = styled(Box)<
  Pick<StyledButtonProps, '$size'> & { $iconSize: number }
>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.token.sizeUnits(1)};
  white-space: nowrap;
  // one extra rem added to avoid overflowing behavior on the content due to decimal parts of calculated max-width
  max-width: ${(props) =>
    props.$iconSize
      ? `calc(100% - ${props.$iconSize}rem - ${props.theme.token.sizeUnits(
          getButtonContentGapSize({ $size: props.$size }),
        )} + 1rem)`
      : '100%'};
`;

export const StyledPlaceholderAction = styled(Box)<
  Pick<StyledButtonProps, '$size'>
>`
  width: 100%;
  overflow-y: hidden;
  overflow-x: auto;
  text-overflow: ellipsis;

  ${(props) => {
    switch (props.$size) {
      case 'small':
        return css`
          font: ${props.theme.token.font.bodyXS};
        `;
      case 'medium':
        return css`
          font: ${props.theme.token.font.bodyS};
        `;
      case 'large':
      default:
        return css`
          font: ${props.theme.token.font.bodyM};
        `;
    }
  }}
`;

export const StyledPlaceholderLabel = styled(Box)<
  Pick<StyledButtonProps, '$size'>
>`
  width: 100%;
  overflow-y: hidden;
  overflow-x: auto;
  text-overflow: ellipsis;
  opacity: 0.8;

  ${(props) => {
    switch (props.$size) {
      case 'small':
        return css`
          display: none;
        `;
      case 'medium':
        return css`
          font: ${props.theme.token.font.bodyXS};
          line-height: 1.2;
        `;
      case 'large':
      default:
        return css`
          font: ${props.theme.token.font.bodyS};
          line-height: 1.2;
        `;
    }
  }}
`;
