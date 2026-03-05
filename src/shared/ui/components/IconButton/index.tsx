import { ElementType, useRef } from 'react';

import { css, styled } from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
  PrefixType,
} from '@/shared/ui/vivid-ui/shared';

export type IconButtonProps = {
  backgroundColor?: string;
  borderColor?: string;
  color?: string;
  size?: 'large' | 'medium' | 'small';
  variant?: 'ghost' | 'primary' | 'secondary';
};

export type PolymorphicIconButtonProps<C extends ElementType = 'button'> =
  PolymorphicComponentProps<C, IconButtonProps>;

const getColors = ({
  $backgroundColor,
  $color,
  $variant,
}: PrefixType<IconButtonProps, '$'>) => {
  switch ($variant) {
    case 'primary': {
      return css`
        background-color: ${(props) =>
          $backgroundColor || props.theme.token.color.c6l};
        color: ${(props) => props.theme.token.color.c6};
        fill: ${(props) => props.theme.token.color.c6};

        &:hover,
        &:focus {
          background: ${(props) =>
            $backgroundColor || props.theme.token.color.c6};
          color: ${(props) => props.theme.token.color.c0};
          fill: ${(props) => props.theme.token.color.c0};
        }
      `;
    }
    case 'secondary': {
      return css`
        background-color: ${(props) =>
          $backgroundColor || props.theme.token.color.c5};
        color: ${(props) => $backgroundColor || props.theme.token.color.c2};
        fill: ${(props) => $backgroundColor || props.theme.token.color.c2};

        &:hover,
        &:focus {
          background: ${(props) =>
            $backgroundColor || props.theme.token.color.c4};
          color: ${(props) => props.theme.token.color.c2};
          fill: ${(props) => props.theme.token.color.c2};
        }
      `;
    }
    default: {
      return css`
        background-color: transparent;
        color: ${(props) => props.theme.token.color.c3};
        fill: ${(props) => props.theme.token.color.c3};

        &:hover,
        &:focus {
          background: transparent;
          color: ${(props) => $color || props.theme.token.color.c6};
          fill: ${(props) => $color || props.theme.token.color.c6};
        }

        &:disabled {
          cursor: not-allowed;
          color: ${(props) => props.theme.token.color.c3};
          fill: ${(props) => props.theme.token.color.c3};
          opacity: 0.5;
        }
      `;
    }
  }
};

const StyledIconButton = styled(Box)<PrefixType<IconButtonProps, '$'>>`
  margin: 0;
  padding: 0;
  user-select: none;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  min-width: ${(props) =>
    props.$size === 'small'
      ? '32rem'
      : props.$size === 'medium'
      ? '44rem'
      : '56rem'};
  height: ${(props) =>
    props.$size === 'small'
      ? '32rem'
      : props.$size === 'medium'
      ? '44rem'
      : '56rem'};
  border-radius: 50%;
  cursor: pointer;
  border: none;
  font: inherit;
  color: inherit;

  ${(props) =>
    props.$borderColor
      ? css`
          border: 1rem solid ${props.$borderColor};
        `
      : undefined}

  ${getColors}
`;

const BaseIconButton = ({
  backgroundColor,
  borderColor,
  children,
  color,
  component = 'button',
  onClick,
  size = 'medium',
  variant = 'primary',
  ...rest
}: PolymorphicComponentProps<'button', IconButtonProps>) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  // Fix the issue where the button remains in an active state after being clicked
  // on macOS Chrome by blurring the button after click event.
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      buttonRef.current.blur();
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <StyledIconButton
      as={component}
      {...rest}
      $backgroundColor={backgroundColor}
      $borderColor={borderColor}
      $color={color}
      $size={size}
      $variant={variant}
      ref={buttonRef}
      onClick={handleClick}
    >
      {children}
    </StyledIconButton>
  );
};

export const IconButton = createPolymorphicComponent<'button', IconButtonProps>(
  BaseIconButton,
);
