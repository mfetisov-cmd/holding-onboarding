'use client';
import {
  ChangeEvent,
  ElementType,
  FocusEvent,
  useCallback,
  useState,
} from 'react';

import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
  Size,
} from '@/shared/ui/vivid-ui/shared';

import {
  StyledCheckCircle,
  StyledSwitch,
  StyledSwitchNativeInput,
} from './styles';

export type SwitchProps = {
  size?: Size;
};

export type PolymorphicSwitchProps<C extends ElementType = 'input'> =
  PolymorphicComponentProps<C, SwitchProps>;

const SwitchBase = ({
  checked,
  disabled,
  onBlur,
  onChange,
  onFocus,
  size = 'large',
  ...rest
}: Omit<PolymorphicSwitchProps, 'component' | 'type'>) => {
  const [focused, setFocused] = useState(false);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setFocused(false);
      if (onChange) {
        onChange(e);
      }
    },
    [onChange],
  );

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

  return (
    <StyledSwitch
      $checked={checked}
      $disabled={disabled}
      $focused={focused}
      $size={size}
      as="span"
    >
      <StyledCheckCircle
        $checked={checked}
        $disabled={disabled}
        $focused={focused}
        $size={size}
      />
      <StyledSwitchNativeInput
        as="input"
        checked={checked}
        disabled={disabled}
        type="checkbox"
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        {...rest}
      />
    </StyledSwitch>
  );
};

export const Switch = createPolymorphicComponent<'input', SwitchProps>(
  SwitchBase,
);
