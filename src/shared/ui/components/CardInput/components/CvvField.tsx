import { ChangeEvent } from 'react';

import styled from 'styled-components';

import { Input, InputProps } from '@/shared/ui/vivid-ui/components/Input';
import { PolymorphicComponentProps } from '@/shared/ui/vivid-ui/shared';

import { useCardInputState } from '../utils';

const StyledInput = styled(Input)<
  PolymorphicComponentProps<'input', InputProps>
>`
  -webkit-text-security: disc;
`;

export const CvvField = (inputProps: InputProps) => {
  const [data, emitter] = useCardInputState();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    emitter.update({
      cvv: e.target.value,
      cvvValidationError: null,
    });
  };

  return (
    <StyledInput
      {...inputProps}
      id="cc-csc"
      name="cvv"
      autoComplete="cc-csc"
      error={Boolean(data?.cvvValidationError)}
      hint={data?.cvvValidationError ?? ''}
      inputMode="numeric"
      label={'CVV'}
      maxLength={4}
      size={data.size}
      spellCheck={false}
      type="text"
      value={data?.cvv ?? ''}
      onChange={handleChange}
    />
  );
};
