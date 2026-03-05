import type { Meta, StoryObj } from '@storybook/react';

import { Chips } from './Chips';

const meta: Meta<typeof Chips> = {
  component: Chips,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Chips>;

export const Default: Story = {
  args: {
    children: '500 $',
    component: 'button',
    disabled: false,
    loading: false,
    selected: false,
  },
};
