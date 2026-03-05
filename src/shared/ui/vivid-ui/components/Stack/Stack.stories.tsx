import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/shared/ui/vivid-ui/components/Button';

import { Stack } from './Stack';

const meta: Meta<typeof Stack> = {
  argTypes: {
    component: { table: { disable: true } },
    variant: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },
  },
  component: Stack,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  args: {
    gap: 4,
    variant: 'vertical',
  },
  render: (args) => {
    return (
      <Stack {...args}>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Stack>
    );
  },
};
