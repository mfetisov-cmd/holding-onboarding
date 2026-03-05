'use client';
import { ElementType } from 'react';

import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '@/shared/ui/vivid-ui/shared';

import { Button, ButtonProps } from '../../Button';
import { SkeletonCommonProps } from '../Skeleton';
import { StyledSkeletonButton } from './styles';

export type SkeletonButtonProps = SkeletonCommonProps & {
  size: ButtonProps['size'];
};

export type PolymorphicSkeletonButtonProps<C extends ElementType = 'div'> =
  PolymorphicComponentProps<C, SkeletonButtonProps>;

const _SkeletonButton = ({
  animated,
  children,
  component,
  size,
  ...rest
}: PolymorphicSkeletonButtonProps) => {
  return (
    <StyledSkeletonButton
      $animated={animated}
      $size={size}
      as={component}
      {...rest}
    >
      <Button disabled size={size} type="button">
        {children}
      </Button>
    </StyledSkeletonButton>
  );
};

export const SkeletonButton = createPolymorphicComponent<
  'div',
  SkeletonButtonProps
>(_SkeletonButton);
