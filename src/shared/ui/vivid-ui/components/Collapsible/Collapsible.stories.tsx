import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '@/shared/ui/vivid-ui/components/Typography';

import { Collapsible } from './Collapsible';

const meta: Meta<typeof Collapsible> = {
  component: Collapsible,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  args: {
    targetElement: (
      <Typography variant="captionM">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At
      </Typography>
    ),
    triggerElement: (
      <Typography variant="h5">Diam nonumy eirmod tempor invidunt</Typography>
    ),
  },
  render: (args) => {
    return <Collapsible {...args} />;
  },
};
