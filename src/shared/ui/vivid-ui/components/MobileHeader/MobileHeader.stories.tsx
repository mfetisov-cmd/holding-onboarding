import type { Meta, StoryObj } from '@storybook/react';

import { VividRegular } from '@/shared/ui/vivid-ui/components/Icons';
import { Column } from '@/shared/ui/vivid-ui/components/Layout';

import { MobileHeader } from './MobileHeader';
import {
  MobileHeaderBack,
  MobileHeaderClose,
  MobileHeaderMenu,
} from './MobileHeaderButtons';
import { MobileHeaderLeftItem } from './MobileHeaderLeftItem';
import { MobileHeaderRightItem } from './MobileHeaderRightItem';
import { MobileHeaderTitle } from './MobileHeaderTitle';

const meta: Meta<typeof MobileHeader> = {
  argTypes: {},
  component: MobileHeader,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MobileHeader>;

export const DefaultStory: Story = {
  args: {
    children: (
      <>
        <MobileHeaderLeftItem>
          <MobileHeaderBack />
        </MobileHeaderLeftItem>
        <MobileHeaderTitle>Company</MobileHeaderTitle>
        <MobileHeaderRightItem>
          <MobileHeaderMenu />
        </MobileHeaderRightItem>
      </>
    ),
  },
};

export const Examples: Story = {
  render: () => (
    <Column gap={'10rem'}>
      <MobileHeader>
        <MobileHeaderLeftItem>
          <MobileHeaderBack />
        </MobileHeaderLeftItem>
        <MobileHeaderTitle>Company</MobileHeaderTitle>
        <MobileHeaderRightItem>
          <MobileHeaderMenu />
        </MobileHeaderRightItem>
      </MobileHeader>

      <MobileHeader>
        <MobileHeaderLeftItem>
          <MobileHeaderBack />
        </MobileHeaderLeftItem>
        <VividRegular color="#E7E7E4" />
      </MobileHeader>

      <MobileHeader>
        <MobileHeaderLeftItem>
          <MobileHeaderClose />
        </MobileHeaderLeftItem>
        <MobileHeaderTitle>Company</MobileHeaderTitle>
      </MobileHeader>
    </Column>
  ),
};
