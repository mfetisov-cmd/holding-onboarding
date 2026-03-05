import { ChangeEvent } from 'react';

import { ArrowDownCenter24 } from '@/shared/ui/vivid-ui/components/Icons';
import { PolymorphicInputProps } from '@/shared/ui/vivid-ui/components/Input';
import { InputWrapper } from '@/shared/ui/vivid-ui/components/Input/InputWrapper';
import { SelectOption } from '@/shared/ui/vivid-ui/components/Select/Select';

import {
  StyledArrowIcon,
  StyledNativeSelect,
  StyledNativeSelectValue,
  StyledRightIcon,
} from './styles';

export type NativeSelectProps = {
  isArrowHidden?: boolean;
  isSelectedIconDisabled?: boolean;
  onChange?: (value: SelectOption | string) => void;
  onSelect?: (value: SelectOption) => void;
  options: Array<SelectOption>;
  value?: SelectOption | string;
} & Omit<PolymorphicInputProps, 'onChange' | 'onSelect' | 'value'>;

export const NativeSelect = ({
  component,
  disabled,
  error,
  id,
  isArrowHidden,
  isSelectedIconDisabled,
  leftIcon,
  name,
  onChange,
  onSelect,
  options,
  placeholder,
  rightIcon,
  size,
  value = '',
  ...restProps
}: NativeSelectProps) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = options.find((it) => it.value === e.target.value);
    if (selectedOption) {
      onChange?.(selectedOption);
      onSelect?.(selectedOption);
    }
  };

  let displayValue;
  if (typeof value === 'string') {
    displayValue = value;
  } else if (typeof value?.title === 'string') {
    displayValue = value.title;
  } else {
    displayValue = value?.value;
  }

  const selectedOption =
    typeof value === 'string'
      ? options.find((option) => option.value === value)
      : value;

  const { leftIcon: optionLeftIcon, rightIcon: optionRightIcon } =
    selectedOption ?? {};

  return (
    <InputWrapper
      id={id}
      name={name}
      disabled={disabled}
      error={error}
      filled={Boolean(value)}
      leftIcon={isSelectedIconDisabled ? undefined : leftIcon || optionLeftIcon}
      placeholder={placeholder}
      rightIcon={
        <StyledRightIcon>
          {rightIcon || optionRightIcon}
          {!isArrowHidden && (
            <StyledArrowIcon $disabled={disabled}>
              <ArrowDownCenter24 />
            </StyledArrowIcon>
          )}
        </StyledRightIcon>
      }
      size={size}
      {...restProps}
    >
      <>
        <StyledNativeSelectValue $disabled={disabled} $size={size}>
          {/* nbsp is required to prevent input collapsing when there is no text in it */}
          {displayValue || placeholder || <span>&nbsp;</span>}
        </StyledNativeSelectValue>
        <StyledNativeSelect
          id={id}
          name={name}
          defaultValue={selectedOption?.value}
          disabled={disabled}
          onChange={handleChange}
        >
          {options.length && !value ? <option disabled selected /> : null}
          {options.map((it) => (
            <option key={it.value} value={it.value}>
              {it.title}
            </option>
          ))}
        </StyledNativeSelect>
      </>
    </InputWrapper>
  );
};
