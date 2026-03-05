'use client';
import React, { ElementType } from 'react';

import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '@/shared/ui/vivid-ui/shared';

import { StyledHorizontalSpacer, StyledVerticalSpacer } from './styles';

export type SpacerProps = {
  size: number;
  variant?: 'horizontal' | 'vertical';
};

export type PolymorphicSpacerProps<C extends ElementType = 'div'> =
  PolymorphicComponentProps<C, SpacerProps>;

const _Spacer = ({
  size,
  variant = 'vertical',
  ...rest
}: PolymorphicSpacerProps) => {
  return variant === 'vertical' ? (
    <StyledVerticalSpacer $size={size} $variant={variant} {...rest} />
  ) : (
    <StyledHorizontalSpacer $size={size} $variant={variant} {...rest} />
  );
};

export const Spacer = createPolymorphicComponent<'div', SpacerProps>(_Spacer);
