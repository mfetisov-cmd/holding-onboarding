import type { Meta, StoryObj } from '@storybook/react';

import { Flash24 } from '@/shared/ui/vivid-ui/components/Icons';

import { Button, PolymorphicButtonProps } from './index';

const meta: Meta<typeof Button> = {
  argTypes: {},
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

const defaultArgs: PolymorphicButtonProps = {
  children: 'Open your account',
  component: 'button',
  disabled: false,
  fullWidth: false,
  loading: false,
  size: 'large',
  variant: 'primary',
};

export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};

export const LeftIcon: Story = {
  args: {
    ...defaultArgs,
    LeftIconComponent: Flash24,
  },
};

export const RightIcon: Story = {
  args: {
    ...defaultArgs,
    RightIconComponent: Flash24,
  },
};
