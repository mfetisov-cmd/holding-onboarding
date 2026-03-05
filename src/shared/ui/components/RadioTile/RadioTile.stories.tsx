import type { Meta, StoryObj } from '@storybook/react';

import { RadioTile } from './index';

const meta: Meta<typeof RadioTile> = {
  argTypes: {
    component: {
      control: false,
    },
  },
  component: RadioTile,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RadioTile>;

export const Default: Story = {
  args: {
    checked: false,
    label: 'Lda., SA, SCA, SUA, Cooperativa, etc',
    title: 'I have a Company',
    value: 'business',
  },
};
