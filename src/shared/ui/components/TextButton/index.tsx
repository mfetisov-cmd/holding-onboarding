'use client';
import { ElementType, useRef } from 'react';

import styled, { css } from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '@/shared/ui/vivid-ui/shared';
import { PrefixType } from '@/shared/ui/vivid-ui/shared/types';

export type TextButtonProps = {
  color?: string;
  fullWidth?: boolean;
  variant?: 'plain' | 'primary';
};

type StyledButtonProps = PrefixType<TextButtonProps, '$'>;

const getVariantStyles = ({
  $color,
  $fullWidth,
  $variant,
}: StyledButtonProps) => {
  if ($variant === 'primary') {
    return css`
      display: flex;
      white-space: nowrap;
      gap: ${(props) => props.theme.token.sizeUnits(3)};
      align-items: center;
      color: ${(props) => $color || props.theme.token.color.c6};
      fill: ${(props) => props.theme.token.color.c6};
    `;
  }

  return css`
    padding: 0;
    display: ${$fullWidth ? 'block' : 'inline-block'};
    color: ${() => $color || 'inherit'};
  `;
};

export const StyledTextButton = styled(Box)<StyledButtonProps>`
  margin: 0;
  padding: 0;
  user-select: none;
  text-align: center;
  width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
  cursor: pointer;
  border: none;
  background-color: transparent;
  font: ${(props) => props.theme.token.font.labelS};

  &:hover,
  &:active,
  &:focus {
    outline: none;
    opacity: 0.8;
  }

  &[disabled],
  &:disabled {
    pointer-events: none;
  }

  ${getVariantStyles}
`;

export type PolymorphicTextButtonProps<C extends ElementType = 'button'> =
  PolymorphicComponentProps<C, TextButtonProps>;

const TextButtonBase = ({
  children,
  color,
  component = 'button',
  fullWidth,
  onClick,
  variant = 'plain',
  ...rest
}: PolymorphicTextButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Fix the issue where the button remains in an active state after being clicked
  // on macOS Chrome by blurring the button after click event.
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      buttonRef.current.blur();
    }
    onClick?.(e);
  };

  return (
    <StyledTextButton
      $color={color}
      $fullWidth={fullWidth}
      $variant={variant}
      as={component}
      ref={buttonRef}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </StyledTextButton>
  );
};

export const TextButton = createPolymorphicComponent<'button', TextButtonProps>(
  TextButtonBase,
);
