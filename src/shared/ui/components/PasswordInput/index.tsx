import { SyntheticEvent, useState } from 'react';

import styled from 'styled-components';

import { Eye24, EyeOff24 } from '@/shared/ui/vivid-ui/components/Icons/Ic24';
import { Input, InputProps } from '@/shared/ui/vivid-ui/components/Input';
import { PolymorphicComponentProps } from '@/shared/ui/vivid-ui/shared';

const StyledToggleButton = styled.button`
  padding: ${({ theme }) => `${theme.token.spacingXS} 0`};
  background: transparent;
  border: none;
  font-size: 0;
  cursor: pointer;
  svg {
    fill: ${({ theme }) => theme?.token.color.c3};
  }
  &:hover svg {
    fill: ${({ theme }) => theme?.token.color.c1};
  }
`;

export const PasswordInput = (
  props: PolymorphicComponentProps<'input', InputProps>,
) => {
  const [hidden, setHidden] = useState(true);
  const IconComponent = hidden ? Eye24 : EyeOff24;

  const handleToggleClick = (e: SyntheticEvent) => {
    e.preventDefault();
    setHidden(!hidden);
  };

  return (
    <Input
      rightIcon={
        <StyledToggleButton type="button" onClick={handleToggleClick}>
          <IconComponent />
        </StyledToggleButton>
      }
      type={hidden ? 'password' : 'text'}
      {...props}
    />
  );
};
