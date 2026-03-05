import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../Typography';
import { Paper } from './Paper';

const meta: Meta<typeof Paper> = {
  argTypes: {
    component: {
      control: false,
    },
    type: {
      control: 'radio',
      options: ['light', 'gray'],
    },
  },
  component: Paper,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Paper>;

export const Default: Story = {
  args: {
    type: 'light',
  },
  render: (args) => {
    return (
      <Paper {...args}>
        <Typography variant="h3">This is a paper</Typography>
      </Paper>
    );
  },
};
