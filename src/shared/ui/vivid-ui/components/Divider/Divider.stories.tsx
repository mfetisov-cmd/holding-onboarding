import type { Meta, StoryObj } from '@storybook/react';

import styled from 'styled-components';

import { Divider } from './Divider';

const Spacer = styled.div`
  padding: ${(props) => props.theme.token.spacingL};
`;

const meta: Meta<typeof Divider> = {
  argTypes: {
    bounds: {
      description: 'Adds horizontal offset to divider',
    },
    component: {
      control: 'text',
    },
  },
  component: Divider,
  parameters: {
    docs: {
      description: {
        component: 'An element to horizontally separate list items',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    bounds: true,
    component: 'span',
  },
  render: (args) => {
    return (
      <>
        <Divider bounds={false} />
        <Spacer />
        <Divider {...args} />
      </>
    );
  },
};
