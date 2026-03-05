import type { Meta, StoryObj } from '@storybook/react';

import { styled } from 'styled-components';

import { CardGroupType } from '@/shared/api/main/generated/vivid/shared/v1/card_group_type_pb';
import { PaymentSystem } from '@/shared/api/main/generated/vivid/shared/v1/payment_system_pb';

import { Card, CardProps } from './index';

const meta: Meta<typeof Card> = {
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
    },
    component: {
      control: false,
    },
  },
  component: Card,
  tags: ['autodocs'],
};

export default meta;

const StyledWrapper = styled.div`
  display: inline-block;
`;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    color: '#1CC6BB',
    embossingName: 'JÜRGEN/ZIMMERMANN',
    panLast4: '9999',
    paymentSystem: PaymentSystem.PAYMENT_SYSTEM_VISA,
    type: CardGroupType.CARD_GROUP_TYPE_PLASTIC,
    width: '202rem',
  },
  render: (args: CardProps) => {
    return (
      <StyledWrapper style={{ width: `${args.width}` }}>
        <Card {...args} />
      </StyledWrapper>
    );
  },
};

export const WithImage: Story = {
  args: {
    backgroundUrl:
      'https://interactive-examples.mdn.mozilla.net/media/examples/lizard.png',
    color: '#1CC6BB',
    embossingName: 'JÜRGEN/ZIMMERMANN',
    panLast4: '9999',
    paymentSystem: PaymentSystem.PAYMENT_SYSTEM_VISA,
    type: CardGroupType.CARD_GROUP_TYPE_METAL,
    width: '202rem',
  },
  render: (args: CardProps) => {
    return (
      <StyledWrapper style={{ width: `${args.width}` }}>
        <Card {...args} />
      </StyledWrapper>
    );
  },
};
