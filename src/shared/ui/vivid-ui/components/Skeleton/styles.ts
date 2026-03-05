import styled, { css, keyframes } from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import { PrefixType } from '@/shared/ui/vivid-ui/shared';

import { SkeletonProps } from './Skeleton';

type StyledSkeletonProps = PrefixType<SkeletonProps, '$'>;

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

export const getStyledSkeletonAnimationStyle = ({
  $animated,
}: StyledSkeletonProps) => {
  if ($animated) {
    return css`
      animation: 1.5s ease-in-out 0.5s infinite normal none running ${pulse};
    `;
  }
};

const getStyledSkeletonVariantStyle = ({ $variant }: StyledSkeletonProps) => {
  switch ($variant) {
    case 'circular':
      return css`
        border-radius: 50%;
      `;
    case 'rounded':
      return css`
        border-radius: ${(props) => props.theme.token.borderRadiusM};
      `;
    case 'rectangular':
    default:
      return;
  }
};

const getStyledSkeletonWidthStyle = ({
  $fullWidth,
  $width,
}: StyledSkeletonProps) => {
  if ($width) {
    return css`
      width: ${$width}rem;
    `;
  }
  return css`
    width: ${$fullWidth ? 'auto' : 'fit-content'};
  `;
};

export const StyledSkeleton = styled(Box)<StyledSkeletonProps>`
  display: block;
  background-color: ${(props) => props.theme.token.color.c17};
  height: ${(props) => {
    if (!props.$height) return 'auto';
    return typeof props.$height === 'number'
      ? `${props.$height}rem`
      : props.$height;
  }};

  ${getStyledSkeletonWidthStyle}
  ${getStyledSkeletonAnimationStyle}
  ${getStyledSkeletonVariantStyle}
`;
