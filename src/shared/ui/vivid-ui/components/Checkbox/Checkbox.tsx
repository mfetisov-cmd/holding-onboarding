'use client';
import {
  FocusEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import {
  Bullet24,
  Check24,
  CheckboxIndeterminate24,
} from '@/shared/ui/vivid-ui/components/Icons';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
  Size,
  SizeXS,
} from '@/shared/ui/vivid-ui/shared';

import {
  StyledCheckbox,
  StyledCheckboxNativeInput,
  StyledCheckIcon,
} from './styles';

export type CheckboxProps = {
  borderRadius?: number;
  error?: boolean;
  indeterminate?: boolean;
  size?: Size | SizeXS;
  type?: 'checkbox' | 'radio';
  variant?: 'circle' | 'square';
};

export type CommonCheckboxProps = PolymorphicComponentProps<
  'input',
  CheckboxProps
>;

const CheckboxInner = ({
  borderRadius,
  checked,
  disabled,
  error,
  indeterminate = false,
  onBlur,
  onChange,
  onFocus,
  readOnly,
  size = 'medium',
  type = 'checkbox',
  variant = 'circle',
  ...rest
}: CommonCheckboxProps) => {
  const checkboxRef = useRef<HTMLInputElement | null>(null);
  const [focused, setFocused] = useState(false);

  const checkboxIcon = useMemo(() => {
    if (indeterminate && type === 'checkbox') {
      return <CheckboxIndeterminate24 component={StyledCheckIcon} size={16} />;
    }

    return type === 'checkbox' ? (
      <Check24 component={StyledCheckIcon} size={16} />
    ) : (
      <Bullet24 component={StyledCheckIcon} size={32} />
    );
  }, [type, indeterminate]);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.setCustomValidity(error ? 'Invalid field' : '');
    }
  }, [error]);

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
    <StyledCheckbox
      $borderRadius={borderRadius}
      $checked={checked}
      $disabled={disabled}
      $focused={focused}
      $indeterminate={indeterminate}
      $size={size}
      $variant={variant}
      as="span"
    >
      {checkboxIcon}
      <StyledCheckboxNativeInput
        {...rest}
        as="input"
        checked={checked}
        disabled={disabled}
        readOnly={readOnly}
        ref={checkboxRef}
        type="checkbox"
        onBlur={handleBlur}
        onChange={onChange}
        onFocus={handleFocus}
      />
    </StyledCheckbox>
  );
};

export const Checkbox = createPolymorphicComponent<'input', CheckboxProps>(
  CheckboxInner,
);
