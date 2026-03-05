import type { Meta, StoryFn } from '@storybook/react';

import { Button } from '../Button';
import { Column } from './Column';
import { FlexProps } from './Flex';

const meta: Meta<typeof Column> = {
  argTypes: {},
  component: Column,
};

export default meta;

const Template: StoryFn<typeof Column> = (
  args: Omit<FlexProps, 'direction'>,
) => (
  <Column {...args}>
    <Button>Element</Button>
    <Button>Element</Button>
    <Button>Element</Button>
    <Button>Element</Button>
    <Button>Element</Button>
    <Button>Element</Button>
  </Column>
);

export const Default = Template.bind({});
Default.args = { gap: '5rem' };
