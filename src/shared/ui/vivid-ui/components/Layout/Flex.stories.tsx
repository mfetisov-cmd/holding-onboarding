import type { Meta, StoryFn } from '@storybook/react';

import { Button } from '../Button';
import { Flex, FlexProps } from './Flex';

const meta: Meta<typeof Flex> = {
  argTypes: {},
  component: Flex,
};

export default meta;

const Template: StoryFn<typeof Flex> = (args: FlexProps) => (
  <Flex {...args}>
    <Button>Element</Button>
    <Button>Element</Button>
    <Button>Element</Button>
    <Button>Element</Button>
    <Button>Element</Button>
    <Button>Element</Button>
  </Flex>
);

export const Default = Template.bind({});
Default.args = { direction: 'column', gap: '5rem' };
