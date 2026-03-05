'use client';
import { ElementType, ReactNode } from 'react';

import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '@/shared/ui/vivid-ui/shared';

import { StyledIconView, StyledSubIcon, StyledSupIcon } from './styles';

export type IconViewProps = {
  background?: string;
  backgroundColor?: string;
  backgroundUrl?: string;
  borderRadius?: string;
  color?: string;
  disabled?: boolean;
  size?: number;
  subIcon?: ReactNode;
  supIcon?: ReactNode;
  variant?: 'circle' | 'default';
};

export type PolymorphicIconViewProps<C extends ElementType = 'div'> =
  PolymorphicComponentProps<C, IconViewProps>;

const _IconView = ({
  background,
  backgroundColor,
  backgroundUrl,
  borderRadius,
  children,
  color,
  component = 'div',
  disabled,
  size,
  subIcon,
  supIcon,
  variant,
  ...rest
}: PolymorphicIconViewProps) => {
  return (
    <StyledIconView
      $background={background}
      $backgroundColor={backgroundColor}
      $backgroundUrl={backgroundUrl}
      $borderRadius={borderRadius}
      $color={color}
      $disabled={disabled}
      $size={size}
      $variant={variant}
      as={component}
      {...rest}
    >
      {children}
      {supIcon && (
        <StyledSupIcon $size={size} $variant={variant}>
          {supIcon}
        </StyledSupIcon>
      )}
      {subIcon && (
        <StyledSubIcon $size={size} $variant={variant}>
          {subIcon}
        </StyledSubIcon>
      )}
    </StyledIconView>
  );
};

export const IconView = createPolymorphicComponent<'div', IconViewProps>(
  _IconView,
);
