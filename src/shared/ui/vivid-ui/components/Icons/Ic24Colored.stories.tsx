import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import styled from 'styled-components';

import { Tooltip } from '@/shared/ui/components/Tooltip';
import { Input } from '@/shared/ui/vivid-ui/components/Input';

import * as Ic24Colored from './Ic24Colored';
import { SquareIconProps } from './types';

const StyledGrid = styled.div`
  padding: ${({ theme }) => `${theme.token.spacingM} 0`};
  display: flex;
  flex-wrap: wrap;
  grid-gap: ${(props) => props.theme.token.spacingM};
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    outline: 1px solid ${(props) => props.theme.token.color.c6};
  }
`;

const Icons = ({ size }: Omit<SquareIconProps, 'color'>) => {
  const [search, setSearch] = useState('');

  return (
    <>
      <Input
        label="Search"
        size="small"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <StyledGrid>
        {Object.entries(Ic24Colored)
          .filter(([name, _Icon]) =>
            search ? name.toLowerCase().includes(search.toLowerCase()) : true,
          )
          .map(([name, Icon]) => (
            <Tooltip content={name} key={name}>
              <StyledContainer>
                <Icon size={size || 24} />
              </StyledContainer>
            </Tooltip>
          ))}
      </StyledGrid>
    </>
  );
};

const meta: Meta<typeof Icons> = {
  argTypes: {},
  component: Icons,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Icons>;

export const Default: Story = {
  args: {
    size: 0,
  },
};
