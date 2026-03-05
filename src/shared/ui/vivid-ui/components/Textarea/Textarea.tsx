import React, {
  ElementType,
  FocusEvent,
  PropsWithChildren,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { styled } from 'styled-components';

import { InputWrapper } from '@/shared/ui/vivid-ui/components/Input/InputWrapper';
import { ListItemProps } from '@/shared/ui/vivid-ui/components/ListItem';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
  Size,
} from '@/shared/ui/vivid-ui/shared';

import { StyledTextarea } from './styles';

const PaddedContainer = styled.div<
  PropsWithChildren<{ bottom?: number; top?: number }>
>`
  padding-top: ${({ top }) => `${top}rem`};
  padding-bottom: ${({ bottom }) => `${bottom}rem`};
`;

export type TextareaProps = Partial<
  Pick<ListItemProps, 'label' | 'labelPosition' | 'leftIcon' | 'rightIcon'>
> & {
  error?: boolean;
  hint?: string;
  maxHeight?: number;
  minHeight?: number;
  placeholder?: string;
  size?: Size;
  variant?: 'outlined' | 'standard';
};

export type PolymorphicTextareaProps<C extends ElementType = 'textarea'> =
  PolymorphicComponentProps<C, TextareaProps>;

const TextareaBase = ({
  component = 'textarea',
  disabled,
  error,
  hint,
  id,
  label,
  labelPosition,
  maxHeight,
  minHeight = 16,
  name,
  onBlur,
  onFocus,
  placeholder,
  size,
  value,
  variant,
  ...rest
}: PolymorphicTextareaProps) => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [focused, setFocused] = useState(false);

  const handleFocus = useCallback(
    (e: FocusEvent<HTMLTextAreaElement>) => {
      setFocused(true);
      if (onFocus) {
        onFocus(e);
      }
    },
    [onFocus],
  );

  const handleBlur = useCallback(
    (e: FocusEvent<HTMLTextAreaElement>) => {
      setFocused(false);
      if (onBlur) {
        onBlur(e);
      }
    },
    [onBlur],
  );

  const handleWrapperClick = () => {
    ref.current?.focus();
  };

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    const adjustHeight = () => {
      if (!ref.current) return;

      const scrollHeight = ref.current.scrollHeight;
      const calculatedHeight = Math.max(scrollHeight, minHeight);

      ref.current.style.height = `${
        maxHeight ? Math.min(calculatedHeight, maxHeight) : calculatedHeight
      }px`;
    };

    adjustHeight();

    // If element is hidden or not yet rendered (scrollHeight === 0),
    // recalculate height asynchronously via microtask
    if (ref.current.scrollHeight === 0) {
      Promise.resolve().then(adjustHeight);
    }
  }, [value, minHeight, maxHeight]);

  return (
    <InputWrapper
      id={id}
      name={name}
      disabled={disabled}
      error={error}
      filled={Boolean(value)}
      focused={focused}
      hint={hint}
      label={
        label ? <PaddedContainer top={12}>{label}</PaddedContainer> : undefined
      }
      labelPosition={labelPosition}
      placeholder={placeholder}
      size={size}
      variant={variant}
      onClick={handleWrapperClick}
    >
      <PaddedContainer bottom={12} top={12}>
        <StyledTextarea
          $error={error}
          $overflow={maxHeight ? 'auto' : 'hidden'}
          $size={size}
          as={component}
          disabled={disabled}
          placeholder={placeholder}
          ref={ref}
          rows={1}
          value={value}
          onBlur={handleBlur}
          onFocus={handleFocus}
          {...rest}
        />
      </PaddedContainer>
    </InputWrapper>
  );
};

export const Textarea = createPolymorphicComponent<'textarea', TextareaProps>(
  TextareaBase,
);
