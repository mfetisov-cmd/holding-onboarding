'use client';
import React, {
  CSSProperties,
  ElementType,
  FocusEvent,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { ListItemProps } from '@/shared/ui/vivid-ui/components/ListItem';
import { useScrollToElement } from '@/shared/ui/vivid-ui/components/ScrollToFirstProvider';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
  Size,
} from '@/shared/ui/vivid-ui/shared';

import { useAutofillDetection } from './hooks/useAutofillDetection';
import { InputWrapper } from './InputWrapper';
import { StyledInput } from './styles';

export type InputProps = Partial<
  Pick<ListItemProps, 'label' | 'labelPosition' | 'leftIcon' | 'rightIcon'>
> & {
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: CSSProperties['borderRadius'];
  containerAs?: 'div' | 'label';
  error?: boolean;
  fullWidth?: boolean;
  hint?: ReactElement<any> | string;
  placeholder?: string;
  size?: Size;
  variant?: 'outlined' | 'standard';
};

export type PolymorphicInputProps<C extends ElementType = 'input'> =
  PolymorphicComponentProps<C, InputProps>;

const _Input = React.forwardRef<HTMLInputElement>(function PrivateInput(
  {
    backgroundColor,
    borderColor,
    borderRadius,
    component = 'input',
    containerAs = 'label',
    disabled,
    error,
    fullWidth,
    hint,
    id,
    label,
    labelPosition = 'up',
    leftIcon,
    name,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    readOnly,
    rightIcon,
    size = 'large',
    value,
    variant = 'outlined',
    ...rest
  }: PolymorphicInputProps,
  ref,
) {
  const [focused, setFocused] = useState(false);
  const localRef = useRef<HTMLInputElement | null>(null);
  const scrollToElement = useScrollToElement();
  const isAutoFilled = useAutofillDetection(localRef);

  // sync ref and localRef
  useEffect(() => {
    if (!ref) return;

    if (typeof ref === 'function') {
      ref(localRef.current);
    } else {
      ref.current = localRef.current;
    }
  }, [ref]);

  // Scroll to element on error
  useEffect(() => {
    if (error) {
      scrollToElement(localRef?.current ?? undefined);
    }
  }, [error, scrollToElement]);

  const handleFocus = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      setFocused(true);
      if (onFocus) {
        onFocus(e);
      }
    },
    [onFocus],
  );

  const handleBlur = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      if (onBlur) {
        onBlur(e);
      }
    },
    [onBlur],
  );

  const isFilled = Boolean(value) || isAutoFilled;

  return (
    <InputWrapper
      id={id}
      name={name}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
      containerAs={containerAs}
      disabled={disabled}
      error={error}
      filled={isFilled}
      focused={focused}
      fullWidth={fullWidth}
      hint={hint}
      label={label}
      labelPosition={labelPosition}
      leftIcon={leftIcon}
      placeholder={placeholder}
      rightIcon={rightIcon}
      size={size}
      variant={variant}
    >
      <StyledInput
        id={id}
        name={name}
        $backgroundColor={backgroundColor}
        $error={error}
        $label={label}
        $size={size}
        as={component}
        disabled={disabled}
        placeholder={placeholder}
        readOnly={readOnly}
        ref={localRef}
        value={value}
        onBlur={handleBlur}
        onChange={onChange}
        onFocus={handleFocus}
        {...rest}
      />
    </InputWrapper>
  );
});

export const Input = createPolymorphicComponent<'input', InputProps>(_Input);
