'use client';
import { ElementType, ReactNode, RefObject, useRef } from 'react';

import { useTheme } from 'styled-components';

import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
  Size,
  SizeXS,
} from '@/shared/ui/vivid-ui/shared';

import { Loader } from '../Loader';
import { StyledButton, StyledButtonContent } from './styles';

/** @deprecated Use Button from /ButtonV2 instead */
export type ButtonVariant = 'ghost' | 'primary' | 'secondary';

/** @deprecated Use Button from /ButtonV2 instead */
export type ButtonProps = {
  // color and backgroundColor not working with variant === 'ghost'
  backgroundColor?: string;
  borderColor?: string;
  buttonRef?: RefObject<HTMLButtonElement | null>;
  children?: ReactNode;
  color?: string;
  fullWidth?: boolean;
  loading?: boolean;
  minWidth?: string;
  rounded?: boolean;
  size?: Size | SizeXS;
  variant?: ButtonVariant;
};

/** @deprecated Use Button from /ButtonV2 instead */
export type PolymorphicButtonProps<C extends ElementType = 'button'> =
  PolymorphicComponentProps<C, ButtonProps>;

const ButtonInner = ({
  backgroundColor,
  borderColor,
  buttonRef: outerButtonRef,
  children,
  color,
  component = 'button',
  fullWidth,
  loading,
  minWidth,
  onClick,
  rounded = false,
  size = 'large',
  variant = 'primary',
  ...rest
}: PolymorphicButtonProps) => {
  const innerButtonRef = useRef<HTMLButtonElement>(null);
  const buttonRef = outerButtonRef ?? innerButtonRef;
  const theme = useTheme();

  // Fix the issue where the Button remains in an active state after being clicked
  // on macOS Chrome by blurring the Button after click event.
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      buttonRef.current.blur();
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <StyledButton
      $backgroundColor={backgroundColor}
      $borderColor={borderColor}
      $color={color}
      $fullWidth={fullWidth}
      $loading={loading}
      $minWidth={minWidth}
      $rounded={rounded}
      $size={size}
      $variant={variant}
      as={component}
      ref={buttonRef}
      onClick={handleClick}
      {...rest}
    >
      <StyledButtonContent>
        {loading ? (
          <Loader
            color={
              color ??
              (variant === 'primary'
                ? theme?.token.color.c11
                : theme?.token.color.c6)
            }
            size={size === 'small' ? 16 : 24}
          />
        ) : (
          children
        )}
      </StyledButtonContent>
    </StyledButton>
  );
};

/** @deprecated Use Button from /ButtonV2 instead */
export const Button = createPolymorphicComponent<'button', ButtonProps>(
  ButtonInner,
);
