'use client';
import { ComponentType, ElementType, RefObject, useRef } from 'react';

import { PolymorphicSquareIconProps } from '@/shared/ui/vivid-ui/components/Icons/types';
import { Loader } from '@/shared/ui/vivid-ui/components/Loader';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
  Size,
} from '@/shared/ui/vivid-ui/shared';

import {
  StyledButton,
  StyledButtonIcon,
  StyledButtonLoadingIcon,
  StyledContent,
  StyledPlaceholderAction,
  StyledPlaceholderLabel,
} from './styles';

const getIconSize = (size?: Size) => {
  switch (size) {
    case 'small':
      return 16;
    case 'medium':
      return 20;
    case 'large':
    default:
      return 24;
  }
};

export type ButtonVariant =
  | 'destructive'
  | 'ghost'
  | 'primary'
  | 'secondary'
  | 'shimmer';

type ButtonV2Icon =
  | {
      LeftIconComponent?: ComponentType<PolymorphicSquareIconProps>;
      RightIconComponent?: never;
    }
  | {
      LeftIconComponent?: never;
      RightIconComponent?: ComponentType<PolymorphicSquareIconProps>;
    }
  | {
      LeftIconComponent?: never;
      RightIconComponent?: never;
    };

type ButtonV2Placeholder =
  | {
      placeholderAction?: string;
      placeholderLabel?: never;
      size: 'small';
    }
  | {
      placeholderAction?: string;
      placeholderLabel?: string;
      size?: 'large' | 'medium';
    };

type ButtonCorners =
  | {
      corners?: 'fully-rounded';
      placeholderAction?: never;
      placeholderLabel?: never;
      size?: Size;
    }
  | ({ corners?: 'slightly-rounded' } & ButtonV2Placeholder);

export type ButtonProps = {
  buttonRef?: RefObject<HTMLButtonElement | null>;
  fullWidth?: boolean;
  loading?: boolean;
  variant?: ButtonVariant;
} & ButtonCorners &
  ButtonV2Icon;

export type PolymorphicButtonProps<C extends ElementType = 'button'> =
  PolymorphicComponentProps<C, ButtonProps>;

const ButtonV2Base = ({
  buttonRef: outerButtonRef,
  children,
  color,
  component = 'button',
  corners = 'slightly-rounded',
  disabled,
  fullWidth,
  LeftIconComponent,
  loading,
  onClick,
  placeholderAction,
  placeholderLabel,
  RightIconComponent,
  size = 'medium',
  variant = 'primary',
  ...rest
}: PolymorphicButtonProps) => {
  const innerButtonRef = useRef<HTMLButtonElement>(null);
  const buttonRef = outerButtonRef ?? innerButtonRef;

  const isDisabled = disabled || variant === 'shimmer' || loading;

  const hasContent = Boolean(
    placeholderAction || placeholderAction || children,
  );

  const hasIcons = Boolean(LeftIconComponent || RightIconComponent);

  const iconSize = getIconSize(size);

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
      {...rest}
      $corners={corners}
      $fullWidth={fullWidth}
      $hasIcons={hasIcons}
      $loading={loading}
      $size={size}
      $variant={variant}
      as={component}
      disabled={isDisabled}
      ref={buttonRef}
      onClick={handleClick}
    >
      {/* Don't show loading and shimmer - are similar states, don't show them together */}
      {loading && variant !== 'shimmer' ? (
        <StyledButtonLoadingIcon $iconSize={iconSize}>
          <Loader size={iconSize} />
        </StyledButtonLoadingIcon>
      ) : null}
      {LeftIconComponent && (
        <StyledButtonIcon $iconSize={iconSize}>
          <LeftIconComponent size={iconSize} />
        </StyledButtonIcon>
      )}
      {hasContent ? (
        <StyledContent $iconSize={hasIcons ? iconSize : 0} $size={size}>
          <StyledPlaceholderAction $size={size} as="span">
            {placeholderAction || children}
          </StyledPlaceholderAction>
          {placeholderLabel && size !== 'small' ? (
            <StyledPlaceholderLabel $size={size} as="span">
              {placeholderLabel}
            </StyledPlaceholderLabel>
          ) : null}
        </StyledContent>
      ) : null}
      {RightIconComponent && (
        <StyledButtonIcon $iconSize={iconSize}>
          <RightIconComponent size={iconSize} />
        </StyledButtonIcon>
      )}
    </StyledButton>
  );
};

export const Button = createPolymorphicComponent<'button', ButtonProps>(
  ButtonV2Base,
);
