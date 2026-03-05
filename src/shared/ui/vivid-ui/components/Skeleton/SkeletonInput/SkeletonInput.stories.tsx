import type { Meta, StoryObj } from '@storybook/react';

import { SkeletonInput } from './SkeletonInput';

const meta: Meta<typeof SkeletonInput> = {
  argTypes: {
    size: {
      control: { type: 'radio' },
      description: 'Specifies size of input\n\n',
      options: ['small', 'medium', 'large'],
    },
  },
  component: SkeletonInput,
  parameters: {
    docs: {
      description: {
        component: 'Skeleton component which inherits `Input` size and shape',
      },
    },
  },
  tags: ['autodocs'],
  title: 'Components/Skeleton.Input',
};

export default meta;

type Story = StoryObj<typeof SkeletonInput>;

export const Default: Story = {
  args: {
    animated: false,
    size: 'small',
  },
};
