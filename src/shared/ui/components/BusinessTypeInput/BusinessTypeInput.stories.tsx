import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';

import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '@/shared/ui/vivid-ui/shared';

import { BusinessTypeInput, BusinessTypeInputProps } from './index';

type StateBusinessTypeInputProps = Omit<
  PolymorphicComponentProps<'input', BusinessTypeInputProps>,
  'onChange' | 'value'
>;

const StateBusinessTypeInputBase = (props: BusinessTypeInputProps) => {
  const [value, setValue] = useState('');

  return (
    <BusinessTypeInput
      {...props}
      value={value}
      onChange={(e) => setValue(e.value)}
    />
  );
};

const StateFullBusinessTypeInput = createPolymorphicComponent<
  'input',
  StateBusinessTypeInputProps
>(StateBusinessTypeInputBase);

const meta: Meta<typeof StateFullBusinessTypeInput> = {
  argTypes: {
    component: {
      controls: false,
    },
  },
  component: StateFullBusinessTypeInput,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof StateFullBusinessTypeInput>;

export const Default: Story = {
  args: {
    options: [
      {
        label: 'Lda., SA, SCA, SUA, Cooperativa, etc, and one more',
        title: 'I have a Company',
        value: 'company',
      },
      {
        label: 'Recibos Verdes (Autonomo)',
        title: 'I’m a Freelancer',
        value: 'freelance',
      },
    ],
  },
};
