'use client';
import { ElementType } from 'react';

import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '@/shared/ui/vivid-ui/shared';

import { SkeletonButton } from './SkeletonButton';
import { SkeletonInput } from './SkeletonInput';
import { StyledSkeleton } from './styles';

export type SkeletonCommonProps = {
  animated?: boolean;
};

export type SkeletonProps = SkeletonCommonProps & {
  fullWidth?: boolean;
  height?: number | string;
  variant?: 'circular' | 'rectangular' | 'rounded';
  width?: number | string;
};

type StaticComponents = {
  Button: typeof SkeletonButton;
  Input: typeof SkeletonInput;
};

export type PolymorphicSkeletonProps<C extends ElementType = 'div'> =
  PolymorphicComponentProps<C, SkeletonProps>;

const _Skeleton = ({
  animated,
  children,
  component,
  fullWidth,
  height,
  variant = 'rectangular',
  width,
  ...rest
}: PolymorphicSkeletonProps) => {
  return (
    <StyledSkeleton
      $animated={animated}
      $fullWidth={fullWidth}
      $height={height}
      $variant={variant}
      $width={width}
      as={component}
      {...rest}
    >
      {children}
    </StyledSkeleton>
  );
};

const Skeleton = createPolymorphicComponent<
  'div',
  SkeletonProps,
  StaticComponents
>(_Skeleton);

Skeleton.Button = SkeletonButton;
Skeleton.Input = SkeletonInput;

export { Skeleton };
