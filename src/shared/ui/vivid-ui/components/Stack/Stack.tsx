'use client';
import React, { ElementType } from 'react';

import { BoxProps } from '@/shared/ui/vivid-ui/components/Box';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '@/shared/ui/vivid-ui/shared';

import { StyledHStack, StyledVStack } from './styles';

export type StackProps = BoxProps & {
  gap?: number;
  variant?: 'horizontal' | 'vertical';
};

export type PolymorphicStackProps<C extends ElementType = 'div'> =
  PolymorphicComponentProps<C, StackProps>;

const _Stack = ({
  gap = 0,
  variant = 'vertical',
  ...boxProps
}: PolymorphicStackProps) => {
  return variant === 'horizontal' ? (
    <StyledHStack {...boxProps} $gap={gap} />
  ) : (
    <StyledVStack {...boxProps} $gap={gap} />
  );
};

export const Stack = createPolymorphicComponent<'div', StackProps>(_Stack);
