import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './index';

const meta: Meta<typeof Avatar> = {
  argTypes: {
    component: {
      control: false,
    },
    onEdit: {
      control: false,
    },
  },
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    color: '#43B02A',
    name: 'Pekan Ltd',
    onEdit: () => {},
    size: 80,
    url: 'https://picsum.photos/80',
  },
};
