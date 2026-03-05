import { useMemo } from 'react';

import { styled, WebTarget } from 'styled-components';

import { useCardDetailsUrl } from '@/screens/cards/components/CardHolderCardsGrid/utils/useCardDetailsUrl';
import { CardState } from '@/shared/api/main/generated/vivid/frontend/shared/card/v1/card_pb';
import {
  SmeCardHolderCards,
  SmeCardOrder,
  SmeSupercard,
} from '@/shared/api/main/generated/vivid/frontend/shared/sme/gateway/card/v1/sme_card_pb';
import { Card } from '@/shared/ui/components/Cards/Card';
import { ListItemWithLink } from '@/shared/ui/components/ListItemWithLink';
import { ListItemProps } from '@/shared/ui/vivid-ui/components/ListItem';
import { PrefixType } from '@/shared/ui/vivid-ui/shared/types';

type CardCellProps = {
  as?: WebTarget;
  card?: SmeCardHolderCards.MiniCard | SmeSupercard;
  cardOrder?: SmeCardOrder;
  isActive?: boolean;
  size?: ListItemProps['size'];
  variant?: 'cell' | 'list-item';
};

type StyledProps = PrefixType<Pick<CardCellProps, 'isActive' | 'variant'>, '$'>;

const StyledListItem = styled.div<StyledProps>`
  padding: ${(props) =>
    props.$variant === 'cell' ? 0 : props.theme.token.spacing2XS};
  border-radius: ${(props) => props.theme.token.borderRadiusS};
  transition: background-color 0.3s;
  background-color: ${(props) =>
    props.$isActive ? props.theme.token.color.c5 : 'transparent'};

  &:hover {
    background-color: ${(props) =>
      props.$variant === 'list-item'
        ? props.theme.token.color.c5
        : 'transparent'};
  }
`;

const StyledCardIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40rem;
  height: 40rem;
`;

export const CardCell = ({
  as,
  card,
  cardOrder,
  isActive,
  size = 'medium',
  variant = 'cell',
}: CardCellProps) => {
  const title = useMemo(
    () => (card ? `•${card.getLastDigits()}` : cardOrder?.getName()),
    [card, cardOrder],
  );
  const displayInfo = useMemo(
    () => (card ? card.getDisplayInfo() : cardOrder?.getDisplayInfo()),
    [card, cardOrder],
  );

  const cardDetailsUrl = useCardDetailsUrl(
    card
      ? { cardId: card.getId() }
      : { cardOrderId: cardOrder?.getCardOrderId() ?? '' },
  );

  if (!card && !cardOrder) {
    return null;
  }

  return (
    <StyledListItem $isActive={isActive} $variant={variant} as={as}>
      <ListItemWithLink
        href={cardDetailsUrl}
        label={card ? card.getName() : undefined}
        labelPosition="up"
        leftIcon={
          <StyledCardIcon>
            <Card
              backgroundUrl={displayInfo?.getBackgroundImageUrl()}
              cardState={
                card ? card.getCardState() : CardState.CARD_STATE_ORDERED
              }
              color={displayInfo?.getColor()}
              paymentSystem={displayInfo?.getPaymentSystem()}
              type={
                card ? card.getCardGroupType() : cardOrder?.getCardGroupType()
              }
              width="20rem"
            />
          </StyledCardIcon>
        }
        size={size}
        title={title}
      />
    </StyledListItem>
  );
};
