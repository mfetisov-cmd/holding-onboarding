import React, { ChangeEvent, useId } from 'react';

import { Input, InputProps } from '@/shared/ui/vivid-ui/components/Input';
import { Typography } from '@/shared/ui/vivid-ui/components/Typography';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '@/shared/ui/vivid-ui/shared';

import { StyledField } from './styles';

export type FieldProps = InputProps & {
  changed?: boolean;
  labelPlacement?: 'inside' | 'outside';
  onChange?: (value: string) => void;
  value: string;
};

const FieldBase = ({
  changed,
  component,
  error,
  hint,
  label,
  labelPlacement = 'outside',
  name,
  onChange,
  size = 'medium',
  value,
  ...rest
}: PolymorphicComponentProps<'input', FieldProps>) => {
  const id = useId();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <StyledField>
      {labelPlacement === 'outside' && label && (
        <Typography component="label" htmlFor={id} variant="paragraphMAcc">
          {label}
        </Typography>
      )}
      <Input
        id={id}
        name={name}
        component={component}
        error={!changed && error}
        hint={!changed ? hint : undefined}
        label={labelPlacement === 'inside' && label ? label : undefined}
        size={size}
        value={value}
        onChange={handleChange}
        {...rest}
      />
    </StyledField>
  );
};

export const Field = createPolymorphicComponent<'input', FieldProps>(FieldBase);
