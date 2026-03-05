import { MouseEvent, useMemo } from 'react';

import { useTheme } from 'styled-components';

import { SmeCardHolder } from '@/shared/api/main/generated/vivid/frontend/shared/sme/gateway/card/v1/sme_card_pb';
import {
  MEMBER_ID_DETAILS,
  USER_ID_DETAILS,
} from '@/shared/services/urls/urlParams';
import { Avatar } from '@/shared/ui/components/Avatar';
import { ListItemWithLink } from '@/shared/ui/components/ListItemWithLink';
import { useActiveSpace } from '@/shared/ui/components/Spaces/ActiveSpaceProvider';
import {
  ListItem,
  ListItemProps,
} from '@/shared/ui/vivid-ui/components/ListItem';

type CardHolderProps = {
  cardHolder?: SmeCardHolder;
  disableLink?: boolean;
  isRoleHidden?: boolean;
  onClick?: (e: MouseEvent) => void;
};

export const CardHolder = ({
  cardHolder,
  disableLink,
  isRoleHidden,
  onClick,
}: CardHolderProps) => {
  const activeSpace = useActiveSpace();
  const theme = useTheme();
  const title = useMemo(
    () =>
      [
        cardHolder?.getFirstName(),
        cardHolder?.getMiddleName(),
        cardHolder?.getLastName(),
      ]
        .filter(Boolean)
        .join(' '),
    [cardHolder],
  );

  const isOwner = useMemo(
    () => activeSpace.getOwnerId() === cardHolder?.getClientId(),
    [activeSpace, cardHolder],
  );

  const listItemProps = useMemo(
    (): ListItemProps | undefined =>
      cardHolder
        ? {
            label: isRoleHidden ? undefined : cardHolder?.getRoleName(),
            labelPosition: 'up',
            leftIcon: (
              <Avatar
                name={cardHolder.getFirstName()}
                color={theme?.token.color.c7t}
                isOwner={isOwner}
                size={40}
              />
            ),
            size: 'small',
            title,
          }
        : undefined,
    [cardHolder, isOwner, theme, title, isRoleHidden],
  );

  if (typeof cardHolder === 'undefined') {
    return null;
  }

  if (disableLink) {
    return <ListItem {...listItemProps} />;
  }

  return (
    <ListItemWithLink
      href={{
        query: {
          [MEMBER_ID_DETAILS]: cardHolder.getCardHolderId()?.getMemberId(),
          [USER_ID_DETAILS]:
            cardHolder.getCardHolderId()?.getUserId() || undefined,
        },
      }}
      onClick={onClick}
      {...listItemProps}
    />
  );
};
