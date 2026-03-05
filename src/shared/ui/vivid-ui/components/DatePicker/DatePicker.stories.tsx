import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import { addDays, subDays } from 'date-fns';

import { DatePicker, DatePickerProps } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  argTypes: {
    onChange: { action: 'onChange' },
    onError: { action: 'onError' },
  },
  component: DatePicker,
  tags: ['autodocs'],
};

export default meta;

const DatePickerWithState = (args: DatePickerProps) => {
  const [value, setValue] = useState<Date | undefined>();

  return <DatePicker {...args} value={value} onChange={setValue} />;
};

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {},
  render: DatePickerWithState,
};

export const WithDateLimits: Story = {
  args: {
    maxDate: addDays(new Date(), 10),
    minDate: subDays(new Date(), 10),
  },
  render: DatePickerWithState,
};

export const DisabledManualInput: Story = {
  args: {
    isManualInputDisabled: true,
    placeholder: 'Select date',
  },
  render: DatePickerWithState,
};
