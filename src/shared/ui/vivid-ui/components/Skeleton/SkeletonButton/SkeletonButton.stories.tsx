import type { Meta, StoryObj } from '@storybook/react';

import { SkeletonButton } from './SkeletonButton';

const meta: Meta<typeof SkeletonButton> = {
  argTypes: {
    size: {
      control: { type: 'radio' },
      description: 'Specifies size of button\n\n',
      options: ['small', 'medium', 'large'],
    },
  },
  component: SkeletonButton,
  parameters: {
    docs: {
      description: {
        component: 'Skeleton component which inherits `Button` size and shape',
      },
    },
  },
  tags: ['autodocs'],
  title: 'Components/Skeleton.Button',
};

export default meta;

type Story = StoryObj<typeof SkeletonButton>;

export const Default: Story = {
  args: {
    animated: false,
    size: 'small',
  },
};
