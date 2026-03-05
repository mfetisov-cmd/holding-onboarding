import type { Meta, StoryObj } from '@storybook/react';

import { FilterChips } from './FilterChips';

const meta: Meta<typeof FilterChips> = {
  component: FilterChips,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FilterChips>;

export const Default: Story = {
  args: {
    children: '500 $',
    component: 'button',
    disabled: false,
    loading: false,
    selected: false,
  },
};
