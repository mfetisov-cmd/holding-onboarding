import type { Meta, StoryObj } from '@storybook/react';

import { SegmentUnit } from './SegmentUnit';

const meta: Meta<typeof SegmentUnit> = {
  argTypes: {
    component: {
      control: false,
    },
  },
  component: SegmentUnit,
  parameters: {
    docs: {
      description: {
        component: 'Component to use inside Segment',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SegmentUnit>;

export const Default: Story = {
  args: {
    checked: true,
    children: 'Label',
    component: 'button',
    disabled: false,
  },
};
