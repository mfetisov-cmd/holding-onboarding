import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  argTypes: {
    size: {
      control: 'radio',
      options: ['large', 'medium', 'small'],
    },
  },
  component: Switch,
  parameters: {
    docs: {
      description: {
        component:
          'If you need to represent the switching between two states or on-off state.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    size: 'large',
  },
};
