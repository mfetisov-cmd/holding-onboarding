import type { Meta, StoryObj } from '@storybook/react';

import { CopyableLink } from './index';

const meta: Meta<typeof CopyableLink> = {
  argTypes: {
    copyTimeoutMs: {
      control: { type: 'number' },
      description: 'Timeout in milliseconds for the copy confirmation',
    },
    label: {
      control: { type: 'text' },
      description: 'Optional label displayed above the link',
    },
    value: {
      control: { type: 'text' },
      description: 'The value to display and copy',
    },
  },
  component: CopyableLink,
  tags: ['autodocs'],
  title: 'components/CopyableLink',
};

export default meta;

type Story = StoryObj<typeof CopyableLink>;

export const Default: Story = {
  args: {
    value: 'https://example.com/payment/abc123',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Payment Link',
    value: 'https://example.com/payment/abc123',
  },
};

export const CustomTimeout: Story = {
  args: {
    copyTimeoutMs: 1000,
    label: 'Quick Timeout Link',
    value: 'https://example.com/payment/abc123',
  },
};

export const LongLink: Story = {
  args: {
    label: 'Very Long Link',
    value: 'https://example.com/payment/very-long-payment-link-with-many-parameters?param1=value1&param2=value2&param3=value3&param4=value4',
  },
};
