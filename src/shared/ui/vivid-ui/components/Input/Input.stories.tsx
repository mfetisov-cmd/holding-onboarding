import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '../../shared';
import { Clear24 } from '../Icons/Ic24/Clear24';
import { IconView } from '../IconView';
import { Input, InputProps } from './Input';

type StateFullInputProps = Omit<
  PolymorphicComponentProps<'input', InputProps>,
  'onChange' | 'value'
>;

const StateFullInputBase = (props: StateFullInputProps) => {
  const [value, setValue] = useState('');

  return (
    <Input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

const StateFullInput = createPolymorphicComponent<'input', StateFullInputProps>(
  StateFullInputBase,
);

const meta: Meta<typeof StateFullInput> = {
  argTypes: {
    labelPosition: {
      control: { type: 'radio' },
      options: ['up', 'down'],
    },
    rightIcon: {
      control: false,
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: { type: 'radio' },
      options: ['standard', 'outlined'],
    },
  },
  component: StateFullInput,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof StateFullInput>;

export const Default: Story = {
  args: {
    backgroundColor: '',
    borderColor: '',
    disabled: false,
    error: false,
    hint: '',
    label: 'Label',
    labelPosition: 'up',
    placeholder: 'Placeholder',
    size: 'large',
  },
};

export const WithIcon: Story = {
  args: {
    disabled: false,
    error: false,
    hint: '',
    label: 'Label',
    leftIcon: <IconView background="yellow">IC</IconView>,
    placeholder: 'Placeholder',
    rightIcon: <Clear24 />,
    size: 'large',
    variant: 'outlined',
  },
};
