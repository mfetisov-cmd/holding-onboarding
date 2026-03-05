import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
    },
    component: {
      control: false,
    },
  },
  component: Loader,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const DefaultStory: Story = {
  args: {
    color: '',
    size: 24,
  },
};
