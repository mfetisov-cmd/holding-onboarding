import type { Meta, StoryObj } from '@storybook/react';

import { QrCode } from './index';

const meta: Meta<typeof QrCode> = {
  argTypes: {},
  component: QrCode,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof QrCode>;

export const Default: Story = {
  args: {
    data: 'https://vivid.money/',
    size: 260,
  },
};
