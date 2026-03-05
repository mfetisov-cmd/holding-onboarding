import { useEffect, useRef } from 'react';

import { useTheme } from 'styled-components';

import {
  ArrowDownCenter24,
  ArrowUp24,
} from '@/shared/ui/vivid-ui/components/Icons';
import {
  Input,
  PolymorphicInputProps,
} from '@/shared/ui/vivid-ui/components/Input';
import {
  StyledArrowIcon,
  StyledInput,
  StyledRightIcon,
} from '@/shared/ui/vivid-ui/components/Select/styles';

import { SelectOption } from './Select';

export type SelectInputProps = {
  isArrowHidden?: boolean;
  isOpen?: boolean;
  isSelectedIconDisabled?: boolean;
  options: Array<SelectOption>;
  value?: SelectOption | string;
} & Omit<PolymorphicInputProps, 'value'>;

export const SelectInput = ({
  autoFocus,
  disabled,
  id,
  isArrowHidden,
  isOpen,
  isSelectedIconDisabled,
  leftIcon,
  options,
  rightIcon,
  value,
  ...rest
}: SelectInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const theme = useTheme();

  const { leftIcon: optionLeftIcon, rightIcon: optionRightIcon } =
    typeof value === 'string' || value === undefined
      ? options.find((option) => option.value === value) ?? {}
      : value;

  let displayValue;
  if (typeof value === 'string') {
    displayValue = value;
  } else if (typeof value?.title === 'string') {
    displayValue = value.title;
  } else {
    displayValue = value?.value;
  }

  // manually set focus, because autoFocus attribute is not working on Select component
  useEffect(() => {
    if (autoFocus) {
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [autoFocus]);

  return (
    <Input
      {...rest}
      id={id}
      aria-controls={`${id}-listbox`}
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      aria-label={id}
      autoFocus={autoFocus}
      component={StyledInput}
      disabled={disabled}
      leftIcon={isSelectedIconDisabled ? undefined : leftIcon || optionLeftIcon}
      ref={inputRef}
      rightIcon={
        <StyledRightIcon>
          {rightIcon || optionRightIcon}
          {!isArrowHidden && (
            <StyledArrowIcon $disabled={disabled}>
              {isOpen ? (
                <ArrowUp24 color={theme.token.color.c1} />
              ) : (
                <ArrowDownCenter24 />
              )}
            </StyledArrowIcon>
          )}
        </StyledRightIcon>
      }
      role="combobox"
      value={displayValue}
    />
  );
};
