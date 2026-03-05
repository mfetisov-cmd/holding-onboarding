'use client';
import { ElementType } from 'react';

import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '@/shared/ui/vivid-ui/shared';

import { Input, InputProps } from '../../Input';
import { SkeletonCommonProps } from '../Skeleton';
import { StyledSkeletonInput } from './styles';

export type SkeletonInputProps = SkeletonCommonProps & {
  size: InputProps['size'];
};

export type PolymorphicSkeletonInputProps<C extends ElementType = 'div'> =
  PolymorphicComponentProps<C, SkeletonInputProps>;

const _SkeletonInput = ({
  animated,
  children,
  component,
  size,
  ...rest
}: PolymorphicSkeletonInputProps) => {
  return (
    <StyledSkeletonInput
      $animated={animated}
      $size={size}
      as={component}
      {...rest}
    >
      <Input disabled size={size}>
        {children}
      </Input>
    </StyledSkeletonInput>
  );
};

export const SkeletonInput = createPolymorphicComponent<
  'div',
  SkeletonInputProps
>(_SkeletonInput);
