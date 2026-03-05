'use client';
import React, { ElementType, useMemo } from 'react';

import { ListItem } from '@/shared/ui/vivid-ui/components/ListItem';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '@/shared/ui/vivid-ui/shared';

import { InputProps } from '../Input';
import {
  StyledInputWrapper,
  StyledInputWrapperContainer,
  StyledInputWrapperHint,
  StyledInputWrapperLabel,
  StyledInputWrapperLabelContainer,
  StyledInputWrapperUpLabel,
  StyledListItemContainer,
} from './styles';

export type InputWrapperProps = Pick<
  InputProps,
  | 'backgroundColor'
  | 'borderColor'
  | 'borderRadius'
  | 'containerAs'
  | 'error'
  | 'hint'
  | 'label'
  | 'labelPosition'
  | 'leftIcon'
  | 'placeholder'
  | 'rightIcon'
  | 'size'
  | 'variant'
> & {
  disabled?: boolean;
  filled?: boolean;
  focused?: boolean;
  fullWidth?: boolean;
  name?: string;
};

export type PolymorphicInputWrapperProps<C extends ElementType = 'div'> =
  PolymorphicComponentProps<C, InputWrapperProps>;

const PrivateInputWrapper = ({
  backgroundColor,
  borderColor,
  borderRadius,
  children,
  component,
  containerAs,
  disabled,
  error,
  filled,
  focused,
  fullWidth,
  hint,
  id,
  label,
  labelPosition = 'up',
  leftIcon,
  name,
  placeholder,
  rightIcon,
  size,
  variant = 'outlined',
  ...rest
}: PolymorphicInputWrapperProps) => {
  const up = Boolean(focused || placeholder || filled);

  const labelElement = useMemo(() => {
    if (!label) {
      return undefined;
    }
    if (labelPosition === 'up') {
      return (
        <StyledInputWrapperLabelContainer $rightIcon={rightIcon} $size={size}>
          <StyledInputWrapperUpLabel
            $error={error}
            $focused={focused}
            $size={size}
            $up={up}
            $variant={variant}
            tabIndex={-1}
          >
            {label}
          </StyledInputWrapperUpLabel>
        </StyledInputWrapperLabelContainer>
      );
    }
    return (
      <StyledInputWrapperLabel
        $error={error}
        $focused={focused}
        $size={size}
        tabIndex={-1}
      >
        {label}
      </StyledInputWrapperLabel>
    );
  }, [label, labelPosition, error, focused, size, rightIcon, up, variant]);

  return (
    <StyledInputWrapperContainer
      $fullWidth={fullWidth}
      as={component}
      {...rest}
    >
      <StyledInputWrapper
        $backgroundColor={backgroundColor}
        $borderColor={borderColor}
        $borderRadius={borderRadius}
        $disabled={disabled}
        $error={error}
        $focused={focused}
        $size={size}
        $variant={variant}
        as="div"
      >
        <StyledListItemContainer $variant={variant} as={containerAs}>
          <ListItem
            component="div"
            label={labelElement}
            labelPosition={labelPosition}
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            size={size}
            title={children}
          />
        </StyledListItemContainer>
      </StyledInputWrapper>
      {hint && (
        <StyledInputWrapperHint $error={error}>{hint}</StyledInputWrapperHint>
      )}
    </StyledInputWrapperContainer>
  );
};

export const InputWrapper = createPolymorphicComponent<
  'div',
  InputWrapperProps
>(PrivateInputWrapper);
