import type { Meta, StoryFn } from '@storybook/react';

import { Button } from '@/shared/ui/vivid-ui/components/Button';
import { CenteredBox } from '@/shared/ui/vivid-ui/components/Layout/CenteredBox';
import { FlexProps } from '@/shared/ui/vivid-ui/components/Layout/Flex';

const meta: Meta<typeof CenteredBox> = {
  argTypes: {},
  component: CenteredBox,
};

export default meta;

export const Default: StoryFn<typeof CenteredBox> = (args: FlexProps) => (
  <CenteredBox
    height="300px"
    width="300px"
    {...args}
    style={{ border: '1px solid' }}
  >
    <Button>Button</Button>
  </CenteredBox>
);
