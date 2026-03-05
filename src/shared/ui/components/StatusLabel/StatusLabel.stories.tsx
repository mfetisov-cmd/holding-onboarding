import type { Meta, StoryObj } from '@storybook/react';

import { StatusLabel, StatusLabelType } from './StatusLabel';

const meta: Meta<typeof StatusLabel> = {
  argTypes: {
    children: {
      control: 'text',
      description: 'Text content of the label',
    },
    status: {
      control: { type: 'select' },
      description: 'Status type that determines the visual style of the label',
      options: Object.values(StatusLabelType),
    },
  },
  component: StatusLabel,
  parameters: {
    docs: {
      description: {
        component:
          'A label component for displaying status with different visual styles',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof StatusLabel>;

export const Positive: Story = {
  args: {
    children: 'Paid',
    status: StatusLabelType.POSITIVE,
  },
};

export const Negative: Story = {
  args: {
    children: 'Overdue',
    status: StatusLabelType.NEGATIVE,
  },
};

export const Warning: Story = {
  args: {
    children: 'Pending',
    status: StatusLabelType.WARNING,
  },
};

export const Neutral: Story = {
  args: {
    children: 'Unspecified',
    status: StatusLabelType.NEUTRAL,
  },
};

export const Default: Story = {
  args: {
    children: 'Default',
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      <StatusLabel status={StatusLabelType.POSITIVE}>Paid</StatusLabel>
      <StatusLabel status={StatusLabelType.NEGATIVE}>Overdue</StatusLabel>
      <StatusLabel status={StatusLabelType.WARNING}>Pending</StatusLabel>
      <StatusLabel status={StatusLabelType.NEUTRAL}>Unspecified</StatusLabel>
      <StatusLabel>Default</StatusLabel>
    </div>
  ),
};
