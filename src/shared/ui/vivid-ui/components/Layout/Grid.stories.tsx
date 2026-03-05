import type { Meta, StoryFn } from '@storybook/react';

import { Button } from '../Button';
import { Grid, GridProps } from './Grid';

const meta: Meta<typeof Grid> = {
  argTypes: {},
  component: Grid,
};

export default meta;

const Template: StoryFn<typeof Grid> = (args: GridProps) => (
  <Grid {...args}>
    <Button>Element</Button>
    <Button>Element</Button>
    <Button>Element</Button>
    <Button>Element</Button>
    <Button>Element</Button>
    <Button>Element</Button>
    <Button>Element</Button>
    <Button>Element</Button>
    <Button>Element</Button>
    <Button>Element</Button>
    <Button>Element</Button>
    <Button>Element</Button>
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  justifyContent: 'stretch',
  rowGap: '10rem',
  templateColumns: '1fr 1fr 1fr',
  templateRows: '1fr 1fr 1fr',
};
