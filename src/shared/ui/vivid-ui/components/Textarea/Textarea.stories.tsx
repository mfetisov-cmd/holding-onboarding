import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '../../shared';
import { Textarea, TextareaProps } from './Textarea';

type StateFullTextareaProps = Omit<
  PolymorphicComponentProps<'textarea', TextareaProps>,
  'onChange' | 'value'
>;

const StateFullTextareaBase = (props: StateFullTextareaProps) => {
  const [value, setValue] = useState('');

  return (
    <Textarea
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

const StateFullTextarea = createPolymorphicComponent<
  'textarea',
  StateFullTextareaProps
>(StateFullTextareaBase);

const meta: Meta<typeof StateFullTextarea> = {
  argTypes: {
    minHeight: {
      control: { type: 'number' },
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
  component: StateFullTextarea,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof StateFullTextarea>;

export const Default: Story = {
  args: {
    disabled: false,
    error: false,
    hint: '',
    label: 'Label',
    placeholder: 'Placeholder',
    size: 'large',
  },
};
