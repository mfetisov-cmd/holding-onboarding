import type { Meta, StoryObj } from '@storybook/react';

import { ComponentProps, useState } from 'react';

import { Calendar } from './Calendar';

const CalendarWithState = (props: ComponentProps<typeof Calendar>) => {
  const [selected, setSelected] = useState<Date>();

  return (
    <Calendar
      {...props}
      mode="single"
      selected={selected}
      onSelect={setSelected}
    />
  );
};

const meta: Meta<typeof Calendar> = {
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the selection',
    },
    fixedWeeks: {
      control: { type: 'boolean' },
      description: 'Fixed number of weeks',
    },
    fromDate: {
      control: { type: 'date' },
      description: 'Minimum available date',
    },
    mode: {
      control: { type: 'select' },
      description: 'Date selection mode',
      options: ['single', 'multiple', 'range'],
    },
    selected: {
      control: { type: 'date' },
      description: 'Selected date or dates',
    },
    showOutsideDays: {
      control: { type: 'boolean' },
      description: 'Show days from adjacent months',
    },
    toDate: {
      control: { type: 'date' },
      description: 'Maximum available date',
    },
  },
  component: Calendar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: {
    mode: 'single',
    showOutsideDays: true,
  },
  render: CalendarWithState,
};
