import type { Meta, StoryFn } from '@storybook/react';

import { PolymorphicComponentProps } from '@/shared/ui/vivid-ui/shared';

import { Overlay } from './Overlay';

const meta: Meta<typeof Overlay> = {
  argTypes: {},
  component: Overlay,
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<
  PolymorphicComponentProps<'div', { testId?: string }>
> = (args) => <Overlay {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <div> Content </div>,
};
