import type { Meta, StoryObj } from '@storybook/react';

import { Copy24, Emergency24 } from '../Icons';
import { IconView } from '../IconView';
import { DropList } from './DropList';

const meta: Meta<typeof DropList> = {
  argTypes: {
    component: {
      control: false,
    },
  },
  component: DropList,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DropList>;

export const Default: Story = {
  args: {
    isDividersVisible: true,
    onClick: console.log,
    options: [
      { title: 'Raiffaisen 0', value: 'Raiffaisen' },
      { title: 'Citybank 0', value: 'Citybank' },
      {
        label: 'Some description in label',
        labelPosition: 'down',
        leftIcon: <IconView background="yellow">N26</IconView>,
        rightIcon: <Emergency24 />,
        title: 'N26 0',
        value: 'N26',
      },
      {
        label: 'Some description in label, but up',
        labelPosition: 'up',
        title: 'Raiffaisen 1',
        value: 'Raiffaisen1',
      },
      { rightIcon: <Copy24 />, title: 'Citybank 1', value: 'Citybank1' },
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
  },
};
