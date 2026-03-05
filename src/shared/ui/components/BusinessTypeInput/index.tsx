'use client';
import styled from 'styled-components';

import { RadioTile } from '@/shared/ui/components/RadioTile';
import { Box } from '@/shared/ui/vivid-ui/components/Box';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '@/shared/ui/vivid-ui/shared';

type Option = {
  disabled?: boolean;
  label?: string;
  title: string;
  value: string;
};

export type BusinessTypeInputProps = {
  onChange: (value: Option) => void;
  options: Array<Option>;
  value: string;
};

const StyledBusinessTypeContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: stretch;
  align-items: stretch;
  gap: ${(props) => props.theme.token.spacingXS};
  border: none;
`;

const _BusinessTypeInput = ({
  component = 'fieldset',
  disabled,
  onChange,
  options,
  value,
  ...rest
}: PolymorphicComponentProps<'fieldset', BusinessTypeInputProps>) => {
  return (
    <StyledBusinessTypeContainer as={component} {...rest}>
      {options.map((option) => (
        <RadioTile
          checked={option.value === value}
          disabled={disabled}
          key={option.value}
          label={option.label}
          title={option.title}
          value={option.value}
          onChange={() => onChange(option)}
        />
      ))}
    </StyledBusinessTypeContainer>
  );
};

export const BusinessTypeInput = createPolymorphicComponent<
  'input',
  BusinessTypeInputProps
>(_BusinessTypeInput);
