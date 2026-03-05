import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '../../shared';
import { Segment, SegmentProps } from './Segment';

type StateFullSegmentProps = Omit<
  PolymorphicComponentProps<'fieldset', SegmentProps<string>>,
  'onChange' | 'value'
> & { align?: ContainerAlign };

type ContainerAlign = 'start' | 'stretch';

const StateFullSegmentBase = ({
  align = 'stretch',
  ...props
}: StateFullSegmentProps) => {
  const [value, setValue] = useState(props.options[0].value);

  return (
    <div
      style={{ alignItems: align, display: 'flex', flexDirection: 'column' }}
    >
      <Segment {...props} value={value} onChange={setValue} />
    </div>
  );
};

const StateFullSegment = createPolymorphicComponent<
  'input',
  StateFullSegmentProps
>(StateFullSegmentBase);

const meta: Meta<typeof StateFullSegment> = {
  argTypes: {
    align: {
      control: { type: 'select' },
      options: ['stretch', 'start'],
    },
    component: {
      control: false,
    },
    size: {
      control: { type: 'select' },
      options: ['medium', 'small', 'large'],
    },
  },
  component: StateFullSegment,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof StateFullSegment>;

export const Default: Story = {
  args: {
    align: 'stretch',
    disabled: false,
    options: [
      {
        label: 'Personal',
        value: 'personal',
      },
      {
        label: 'Company',
        value: 'company',
      },
      {
        label: 'Directors',
        value: 'directors',
      },
      {
        label: 'UBOs',
        value: 'ubo',
      },
      {
        label: 'One more',
        value: 'more',
      },
    ],
    size: 'medium',
  },
};
