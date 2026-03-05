import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import { Emergency24 } from '@/shared/ui/vivid-ui/components/Icons';
import { IconView } from '@/shared/ui/vivid-ui/components/IconView';
import { SelectOption } from '@/shared/ui/vivid-ui/components/Select';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '@/shared/ui/vivid-ui/shared';

import { NativeSelect, NativeSelectProps } from './NativeSelect';

type StateFullNativeSelectProps = Omit<
  PolymorphicComponentProps<'input', NativeSelectProps>,
  'value'
>;

const StateFullSelectBase = (props: StateFullNativeSelectProps) => {
  const [value, setValue] = useState<SelectOption | undefined>();

  const handleSelect = (u: SelectOption) => {
    setValue(u);
  };

  return (
    <div style={{ minHeight: '500rem' }}>
      <NativeSelect
        {...props}
        id="native_select"
        readOnly
        value={value}
        onSelect={handleSelect}
      />
    </div>
  );
};

const StateFullSelect = createPolymorphicComponent<
  'input',
  StateFullNativeSelectProps
>(StateFullSelectBase);

const meta: Meta<typeof StateFullSelect> = {
  argTypes: {
    label: {
      description: 'Field label',
    },
    labelPosition: {
      control: { type: 'radio' },
      description: 'Label placement, similar to listItem',
      options: ['up', 'down'],
    },
    onChange: {
      description:
        'Similar to onSelect. Both callbacks called after value selection due to backward compatibility with Select component',
    },
    onSelect: {
      description:
        "Called when an option is selected, the params are option's value (or key) and option instance",
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
  component: StateFullSelect,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof StateFullSelect>;

export const Default: Story = {
  args: {
    disabled: false,
    error: false,
    hint: '',
    label: 'Bank',
    options: [
      {
        leftIcon: <IconView background="yellow">N26</IconView>,
        rightIcon: <Emergency24 />,
        title: 'Raiffaisen',
        value: 'Raiffaisen',
      },
      {
        title: 'Citybank',
        value: 'Citybank',
      },
      {
        title: 'N26',
        value: 'N26',
      },
    ],
    placeholder: 'Please select',
    size: 'large',
  },
};

export default meta;
