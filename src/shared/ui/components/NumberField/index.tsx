import { ChangeEvent, useCallback } from 'react';

import {
  maskitoNumberOptionsGenerator,
  maskitoParseNumber,
} from '@maskito/kit';
import { useMaskito } from '@maskito/react';

import { Input, InputProps } from '@/shared/ui/vivid-ui/components/Input';
import { PolymorphicComponentProps } from '@/shared/ui/vivid-ui/shared';

const defaultOptions = maskitoNumberOptionsGenerator({
  min: 0,
  precision: 2,
});

type NumberFieldProps = {
  onChange: (value: number) => void;
  options?: ReturnType<typeof maskitoNumberOptionsGenerator>;
  value?: number;
} & Omit<
  PolymorphicComponentProps<'input', InputProps>,
  'onChange' | 'onInput' | 'value' | 'variant'
>;

export const NumberField = ({
  disabled,
  onChange,
  options = defaultOptions,
  value,
  ...rest
}: NumberFieldProps) => {
  const getValueString = (value?: number) =>
    value == null || Number.isNaN(value) ? '' : String(value);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const upd = e.currentTarget.value;
      onChange(maskitoParseNumber(upd));
    },
    [onChange],
  );

  const inputRef = useMaskito({ options });
  return (
    <Input
      {...rest}
      ref={inputRef}
      value={getValueString(value)}
      onInput={handleChange}
    />
  );
};
