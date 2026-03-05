import type { Meta, StoryObj } from '@storybook/react';

import { CardType } from '@/shared/api/main/generated/vivid/frontend/shared/card/v1/card_pb';
import { SmeSupercard } from '@/shared/api/main/generated/vivid/frontend/shared/sme/gateway/card/v1/sme_card_pb';
import { CardColor } from '@/shared/api/main/generated/vivid/shared/v1/card_color_pb';
import { DisplayInfo } from '@/shared/api/main/generated/vivid/shared/v1/display_info_pb';

import { CardCell } from './index';

const meta: Meta<typeof CardCell> = {
  argTypes: {
    card: {
      control: false,
    },
  },
  component: CardCell,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CardCell>;

const card = new SmeSupercard();
const displayInfo = new DisplayInfo();
const color = new CardColor();

color.setColorHexCode('#1CC6BB');
displayInfo.setColor(color);

card.setCardType(CardType.CARD_TYPE_VIRTUAL);
card.setDisplayInfo(displayInfo);
card.setLastDigits('4321');

export const Default: Story = {
  args: {
    card,
  },
};
