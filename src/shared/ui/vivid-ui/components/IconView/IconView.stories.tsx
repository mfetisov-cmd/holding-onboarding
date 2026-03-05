import type { Meta, StoryObj } from '@storybook/react';

import { Clear24 } from '../Icons/Ic24/Clear24';
import { IconView } from './IconView';

const meta: Meta<typeof IconView> = {
  argTypes: {
    background: {
      description:
        'Background color of main container, you can pass color from theme using useTheme hook',
    },
    component: {
      control: 'text',
    },
    subIcon: {
      control: false,
      description: 'ReactNode to be shown as icon in the bottom right corner',
    },
    supIcon: {
      control: false,
      description: 'ReactNode to be shown as icon in the top right corner',
    },
  },
  component: IconView,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof IconView>;

export const Default: Story = {
  args: {
    background: 'yellow',
    subIcon: <Clear24 color="blue" />,
    supIcon: <Clear24 color="lightgray" />,
  },
};
