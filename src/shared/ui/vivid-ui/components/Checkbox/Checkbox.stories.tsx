import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  argTypes: {
    size: {
      control: 'radio',
      options: ['xs', 'small', 'medium', 'large'],
    },
    type: {
      control: 'radio',
      options: ['checkbox', 'radio'],
    },
  },
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component:
          'The same element could be used for checkbox and radio button by passing `type` prop',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    size: 'medium',
    type: 'checkbox',
  },
};
