import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import { PasscodeInput } from './PasscodeInput';

const meta: Meta<typeof PasscodeInput> = {
  component: PasscodeInput,
  tags: ['autodocs'],
  title: 'Inputs/PasscodeInput',
};

export default meta;

type Story = StoryObj<typeof PasscodeInput>;

const Template = (args: any) => {
  const [value, setValue] = useState('');
  return <PasscodeInput {...args} value={value} onChange={setValue} />;
};

export const Default: Story = {
  args: {
    disabled: false,
    error: false,
    otpLength: 6,
    success: false,
  },
  render: Template,
};

export const Success: Story = {
  args: {
    otpLength: 6,
    success: true,
  },
  render: Template,
};

export const Error: Story = {
  args: {
    error: true,
    otpLength: 6,
  },
  render: Template,
};

export const Disabled: Story = {
  args: {
    disabled: true,
    otpLength: 6,
  },
  render: Template,
};

export const PasswordDefault: Story = {
  args: {
    disabled: false,
    error: false,
    mode: 'password',
    placeholder: 'Password',
    success: false,
  },
  render: Template,
};

export const PasswordError: Story = {
  args: {
    disabled: false,
    error: true,
    mode: 'password',
    placeholder: 'Password',
    success: false,
  },
  render: Template,
};

export const PasswordSuccess: Story = {
  args: {
    disabled: false,
    error: false,
    mode: 'password',
    placeholder: 'Password',
    success: true,
  },
  render: Template,
};

export const PasswordDisabled: Story = {
  args: {
    disabled: true,
    error: false,
    mode: 'password',
    placeholder: 'Password',
    success: false,
  },
  render: Template,
};
