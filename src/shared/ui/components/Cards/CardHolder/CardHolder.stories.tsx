import type { Meta, StoryObj } from '@storybook/react';

import { SmeCardHolder } from '@/shared/api/main/generated/vivid/frontend/shared/sme/gateway/card/v1/sme_card_pb';
import { ActiveSpaceProvider } from '@/shared/ui/components/Spaces/ActiveSpaceProvider';

import { CardHolder } from './index';

const meta: Meta<typeof CardHolder> = {
  argTypes: {
    cardHolder: {
      control: false,
    },
  },
  component: CardHolder,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CardHolder>;

const cardHolder = new SmeCardHolder();
cardHolder.setClientId('clientId');
cardHolder.setFirstName('Corie');
cardHolder.setMiddleName('Chidiebele');
cardHolder.setLastName('Forney');
cardHolder.setRoleName('Owner');

export const Default: Story = {
  args: {
    cardHolder,
  },
  render: ({ cardHolder }) => (
    <ActiveSpaceProvider activeSpaceData={new Uint8Array()}>
      <CardHolder cardHolder={cardHolder} />
    </ActiveSpaceProvider>
  ),
};
