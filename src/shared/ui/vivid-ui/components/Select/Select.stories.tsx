import type { Meta, StoryObj } from '@storybook/react';

import { useMemo, useState } from 'react';

import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '../../shared';
import { Emergency24, Globe24 } from '../Icons';
import { IconView } from '../IconView';
import { Select, SelectOption, SelectProps } from './Select';

type StateFullSelectProps = Omit<
  PolymorphicComponentProps<'input', SelectProps>,
  'onChange' | 'value'
>;

const StateFullSelectBase = ({ options, ...rest }: StateFullSelectProps) => {
  const [value, setValue] = useState<SelectOption | undefined>();
  const [search, setSearch] = useState('');

  const _options = useMemo(
    () =>
      options.filter((opt) => {
        if (search && typeof opt.title === 'string') {
          return !opt.title.toLowerCase().indexOf(search.toLowerCase());
        }
        return true;
      }),
    [options, search],
  );

  const handleSearch = (u: string) => {
    setSearch(u);
    setValue(undefined);
  };

  const handleSelect = (u: SelectOption) => {
    setValue(u);
    setSearch('');
  };

  const handleChange = (u: SelectOption | string) => {
    console.log(u);

    if (typeof u === 'string') {
      handleSearch(u);
    } else {
      handleSelect(u);
    }
  };

  return (
    <div style={{ minHeight: '500rem' }}>
      <Select
        {...rest}
        id="select"
        options={_options}
        readOnly
        value={value || search}
        onChange={handleChange}
        onSearch={handleSearch}
        onSelect={handleSelect}
      />
    </div>
  );
};

const StateFullSelect = createPolymorphicComponent<
  'input',
  StateFullSelectProps
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
    onSearch: {
      description: 'Called when input value changed',
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
    // rightIcon: {
    //   control: false,
    // },
  },
  component: StateFullSelect,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof StateFullSelect>;

export const WithIcon: Story = {
  args: {
    component: 'input',
    disabled: false,
    error: false,
    hint: '',
    label: 'Bank',
    // rightIcon: <ClearCircleIcon />,
    options: [
      {
        label: 'Up Label',
        labelPosition: 'up',
        title: 'Raiffaisen',
        value: 'Raiffaisen',
      },
      {
        label: 'Down label',
        labelPosition: 'down',
        title: 'Citybank',
        value: 'Citybank',
      },
      {
        leftIcon: <IconView background="yellow">N26</IconView>,
        title: 'N26',
        value: 'N26',
      },
    ],
    placeholder: 'Please select',
    size: 'large',
  },
};

export const WithScroll: Story = {
  args: {
    component: 'input',
    disabled: false,
    error: false,
    hint: '',
    label: 'Bank',
    maxItems: 3,
    // rightIcon: <ClearCircleIcon />,
    options: [
      { title: 'Raiffaisen 0', value: 'Raiffaisen' },
      { title: 'Citybank 0', value: 'Citybank' },
      {
        leftIcon: <IconView background="yellow">N26</IconView>,
        rightIcon: <Emergency24 />,
        title: 'N26 0',
        value: 'N26',
      },
      { title: 'Raiffaisen 1', value: 'Raiffaisen1' },
      { title: 'Citybank 1', value: 'Citybank1' },
      {
        leftIcon: <IconView background="green">N26</IconView>,
        title: 'N26 1',
        value: 'N261',
      },
      { title: 'Raiffaisen 2', value: 'Raiffaisen2' },
      { title: 'Citybank 2', value: 'Citybank2' },
      {
        leftIcon: <IconView background="purple">N26</IconView>,
        title: 'N26 2',
        value: 'N262',
      },
    ],
    placeholder: 'Please select',
    size: 'large',
  },
};

export const WithRightIcon: Story = {
  args: {
    component: 'input',
    disabled: false,
    error: false,
    hint: '',
    label: 'Bank',
    maxItems: 3,
    options: [
      { title: 'Raiffaisen 0', value: 'Raiffaisen' },
      { title: 'Citybank 0', value: 'Citybank' },
      {
        leftIcon: <IconView background="yellow">N26</IconView>,
        rightIcon: <Emergency24 />,
        title: 'N26 0',
        value: 'N26',
      },
      { title: 'Raiffaisen 1', value: 'Raiffaisen1' },
      { title: 'Citybank 1', value: 'Citybank1' },
      {
        leftIcon: <IconView background="green">N26</IconView>,
        title: 'N26 1',
        value: 'N261',
      },
      { title: 'Raiffaisen 2', value: 'Raiffaisen2' },
      { title: 'Citybank 2', value: 'Citybank2' },
      {
        leftIcon: <IconView background="purple">N26</IconView>,
        title: 'N26 2',
        value: 'N262',
      },
    ],
    placeholder: 'Please select',
    rightIcon: <Globe24 />,
    size: 'large',
  },
};
