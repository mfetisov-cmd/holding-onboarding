import type { Meta, StoryFn } from '@storybook/react';

import { Button } from '../Button';
import { FlexProps } from './Flex';
import { Row } from './Row';
const meta: Meta<typeof Row> = {
  argTypes: {},
  component: Row,
};

export default meta;

const Template: StoryFn<typeof Row> = (args: Omit<FlexProps, 'direction'>) => (
  <Row {...args}>
    <Button>Element</Button>
    <Button>Element</Button>
    <Button>Element</Button>
    <Button>Element</Button>
    <Button>Element</Button>
    <Button>Element</Button>
  </Row>
);

export const Default = Template.bind({});
Default.args = { gap: '5rem' };
