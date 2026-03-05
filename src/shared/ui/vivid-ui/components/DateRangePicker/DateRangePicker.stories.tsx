import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';
import { DateRange } from 'react-day-picker';

import { DateRangePicker, DateRangePickerProps } from './DateRangePicker';

const meta: Meta<typeof DateRangePicker> = {
  component: DateRangePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DateRangePicker>;

const DateRangePickerWithState = (args: DateRangePickerProps) => {
  const [value, setValue] = useState<DateRange | undefined>();

  return <DateRangePicker {...args} value={value} onChange={setValue} />;
};

const SingleInputWithState = (args: DateRangePickerProps) => {
  const [value, setValue] = useState<DateRange | undefined>();

  return (
    <div style={{ width: '500px' }}>
      <DateRangePicker {...args} value={value} onChange={setValue} />
    </div>
  );
};

export const Default: Story = {
  render: DateRangePickerWithState,
};

export const SingleInput: Story = {
  args: {
    isSingleInput: true,
  },
  render: SingleInputWithState,
};

export const SingleMonth: Story = {
  args: {
    numberOfMonths: 1,
  },
  render: DateRangePickerWithState,
};

export const DisabledManualInput: Story = {
  args: {
    isDisplayFormatShown: true,
    isManualInputDisabled: true,
    leftInputProps: {
      label: 'Start date',
    },
    rightInputProps: {
      label: 'End date',
    },
  },
  render: DateRangePickerWithState,
};

export const DisabledManualInputSingleInput: Story = {
  args: {
    isDisplayFormatShown: true,
    isManualInputDisabled: true,
    isSingleInput: true,
    singleInputProps: {
      label: 'Dates',
    },
  },
  render: DateRangePickerWithState,
};
