import type { Meta, StoryObj } from '@storybook/react';

import styled from 'styled-components';

import { Typography } from '../Typography';
import * as IconsBankingCard from './BankingCard';
import * as IconsLogo from './Logo';
import { SquareIconProps } from './types';

const StyledGrid = styled.div`
  padding: ${({ theme }) => `${theme.token.spacingM} 0`};
  display: flex;
  flex-wrap: wrap;
  grid-gap: ${(props) => props.theme.token.spacingM};
`;

const Icons = ({ color }: SquareIconProps) => {
  return (
    <>
      <Typography variant="h6">Banking Card:</Typography>
      <StyledGrid>
        {<IconsBankingCard.Visa color={color} />}
        {<IconsBankingCard.VividRegular color={color} />}
        {<IconsBankingCard.Chip color={color} fill={'#eee'} />}
      </StyledGrid>
      <Typography variant="h6">Logo:</Typography>
      <StyledGrid>
        {<IconsLogo.VividLogo color={color} />}
        {<IconsLogo.VLogo color={color} />}
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
    color: '#000',
    size: 0,
  },
};
