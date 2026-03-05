import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      description: 'Specifies shape of Skeleton\n\n',
      options: ['circular', 'rectangular', 'rounded'],
    },
  },
  component: Skeleton,
  parameters: {
    docs: {
      description: {
        component: `Skeleton component to be used as placeholder for loading interfaces.
            Could be used as-is, or as wrapper of custom component.
            Also contains \`Skeleton.Button\` and \`Skeleton.Input\` allow to simulate shape and size of this components
          `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    animated: false,
    fullWidth: false,
    height: 80,
    variant: 'rectangular',
    width: 200,
  },
};
