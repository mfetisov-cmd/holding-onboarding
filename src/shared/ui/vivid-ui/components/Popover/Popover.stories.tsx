import type { Meta, StoryFn } from '@storybook/react';

import { Button } from '../Button';
import { Popover, PopoverProps } from './Popover';

const meta: Meta<typeof Popover> = {
  argTypes: {},
  component: Popover,
  tags: ['autodocs'],
};

export default meta;

const TemplateClick: StoryFn<typeof Popover> = (args: PopoverProps) => (
  <Popover {...args}>
    <Button>Click me</Button>
  </Popover>
);

const TemplateHover: StoryFn<typeof Popover> = (args: PopoverProps) => (
  <Popover {...args}>
    <Button>Hover me</Button>
  </Popover>
);

export const Default = TemplateClick.bind({});
Default.args = {
  content: 'Popover content',
};

export const Top = TemplateClick.bind({});
Top.args = {
  content: 'Popover content',
  placement: 'top',
};

export const Right = TemplateClick.bind({});
Right.args = {
  content: 'Popover content',
  placement: 'right',
};

export const WithTitle = TemplateClick.bind({});
WithTitle.args = {
  content: 'Popover content',
  title: 'Popover title',
};

export const Hover = TemplateHover.bind({});
Hover.args = {
  content: 'Popover content',
  trigger: 'hover',
};
