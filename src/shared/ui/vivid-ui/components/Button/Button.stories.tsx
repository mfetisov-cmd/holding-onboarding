import type { Meta, StoryObj } from '@storybook/react';

import { PolymorphicComponentProps } from '@/shared/ui/vivid-ui/shared';

import { Button, ButtonProps } from './Button';

const buttonVariants: Array<ButtonProps['variant']> = [
  'primary',
  'secondary',
  'ghost',
];
const buttonSizes: Array<ButtonProps['size']> = ['small', 'medium', 'large'];

const meta: Meta<typeof Button> = {
  argTypes: {
    backgroundColor: {
      control: {
        type: 'color',
      },
      description: 'Not working with `variant === "ghost"`',
    },
    color: {
      control: {
        type: 'color',
      },
      description: 'Not working with `variant === "ghost"`',
    },
    component: {
      control: { type: 'radio' },
      description: 'HTMLElementType to be used as tag for Button\n\n',
      options: ['button', 'a'],
    },
    size: {
      control: {
        type: 'radio',
      },
      options: buttonSizes,
    },
    variant: {
      control: {
        type: 'radio',
      },
      options: buttonVariants,
    },
  },
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

const defaultArgs: PolymorphicComponentProps<'button', ButtonProps> = {
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

export const Medium = {
  args: {
    ...defaultArgs,
    size: 'medium',
  },
};

export const Small = {
  args: {
    ...defaultArgs,
    size: 'small',
  },
};

export const Secondary = {
  args: {
    ...defaultArgs,
    variant: 'secondary',
  },
};

export const Ghost = {
  args: {
    ...defaultArgs,
    variant: 'ghost',
  },
};

export const Anchor = {
  args: {
    ...defaultArgs,
    component: 'a',
  },
};

export const Disabled = {
  args: {
    ...defaultArgs,
    disabled: true,
  },
};
