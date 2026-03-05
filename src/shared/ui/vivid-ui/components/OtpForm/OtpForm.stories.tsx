import type { Meta, StoryObj } from '@storybook/react';

import { OtpForm } from './OtpForm';

const meta: Meta<typeof OtpForm> = {
  argTypes: {
    component: {
      control: false,
    },
    onSubmit: {
      control: false,
    },
    size: {
      control: 'radio',
      options: ['small', 'extra-small', 'medium'],
    },
  },
  component: OtpForm,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof OtpForm>;

export const Default: Story = {
  args: {
    inputProps: {
      autoComplete: 'off',
      placeholder: 'x',
    },
    onChange: console.log,
    onSubmit: console.log,
    otpLength: 6,
    size: 'small',
  },
};
