import type { Meta, StoryObj } from '@storybook/react';

import { TextButton } from './index';

const meta: Meta<typeof TextButton> = {
  argTypes: {
    component: {
      control: { type: 'radio' },
      description: 'HTMLElementType to be used as tag for Button\n\n',
      options: ['button', 'a'],
    },
  },
  component: TextButton,
  parameters: {
    docs: {
      description: {
        component: 'Style-less button to wrap interactive elements',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TextButton>;

export const Default: Story = {
  args: {
    children: 'Click me',
    component: 'button',
  },
};
