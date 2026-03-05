import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import { IconView } from '@/shared/ui/vivid-ui/components/IconView';
import { SelectOption } from '@/shared/ui/vivid-ui/components/Select';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '@/shared/ui/vivid-ui/shared';

import { MultiSelect, MultiSelectProps } from './MultiSelect';

type StateFullMultiSelectProps = Omit<
  PolymorphicComponentProps<'input', MultiSelectProps>,
  'value'
>;

const StateFullSelectBase = (props: StateFullMultiSelectProps) => {
  const [options, setOptions] = useState(props.options);

  const handleSelect = (u: SelectOption) => {
    setOptions(
      options.map((it) => ({
        ...it,
        selected: u.value === it.value ? !it.selected : it.selected,
      })),
    );
  };

  const handleReset = (u: SelectOption[]) => {
    setOptions(u);
  };

  return (
    <div style={{ minHeight: '500rem' }}>
      <MultiSelect
        {...props}
        id="multi_select"
        options={options}
        readOnly
        rightIcon={<></>}
        value={options
          .filter((it) => it.selected)
          .map((it) => it.title)
          .join(', ')}
        onReset={handleReset}
        onSelect={handleSelect}
      />
    </div>
  );
};

const StateFullSelect = createPolymorphicComponent<
  'input',
  StateFullMultiSelectProps
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
    onReset: {
      description:
        "Only for mobile view. Callback is being called when close button was clicked. It provides a list of options which was passed to to select before it's opening",
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
