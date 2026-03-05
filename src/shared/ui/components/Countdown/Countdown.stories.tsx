import type { Meta, StoryObj } from '@storybook/react';

import { Countdown } from './index';

const meta: Meta<typeof Countdown> = {
  argTypes: {},
  component: Countdown,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Countdown>;

export const Default: Story = {
  args: {
    timeout: Date.now() + 1000000,
  },
};
