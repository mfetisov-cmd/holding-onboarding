import type { Meta, StoryObj } from '@storybook/react';

import { CheckListItem } from './index';

const meta: Meta<typeof CheckListItem> = {
  argTypes: {},
  component: CheckListItem,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CheckListItem>;

export const Default: Story = {
  args: {
    label: 'Label',
    labelPosition: 'down',
    title: 'Title',
  },
};
