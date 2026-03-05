'use client';
import { ChangeEvent, FocusEvent, useCallback, useRef, useState } from 'react';

import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '@/shared/ui/vivid-ui/shared';

import {
  StyledSegmentUnit,
  StyledSegmentUnitLabel,
  StyledSegmentUnitNativeInput,
} from './styles';

export type SegmentUnitProps = unknown;

export type CommonSegmentUnitProps = Omit<
  PolymorphicComponentProps<'input', SegmentUnitProps>,
  'type'
>;

const SegmentUnitBase = ({
  checked,
  children,
  component = 'input',
  disabled,
  name,
  onBlur,
  onChange,
  onFocus,
  ...rest
}: CommonSegmentUnitProps) => {
  const ref = useRef(null);
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
    <StyledSegmentUnit
      $checked={checked}
      $disabled={disabled}
      $focused={focused}
      as="div"
    >
      <StyledSegmentUnitLabel
        $checked={checked}
        $disabled={disabled}
        as="label"
        htmlFor={name}
      >
        {children}
      </StyledSegmentUnitLabel>
      <StyledSegmentUnitNativeInput
        name={name}
        as={component}
        checked={checked}
        disabled={disabled}
        ref={ref}
        type="radio"
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        {...rest}
      />
    </StyledSegmentUnit>
  );
};

export const SegmentUnit = createPolymorphicComponent<
  'input',
  SegmentUnitProps
>(SegmentUnitBase);
