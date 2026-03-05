import { ComponentProps, MouseEvent } from 'react';

import { css, styled } from 'styled-components';

import { Link, ProductLink } from '@/shared/services/navigation';
import {
  ListItem,
  ListItemProps,
} from '@/shared/ui/vivid-ui/components/ListItem';

type Props = {
  href: ComponentProps<typeof ProductLink>['href'];
  isExternal?: boolean;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  target?: ComponentProps<typeof ProductLink>['target'];
} & ListItemProps;

const LinkStyles = css`
  font: ${(props) => props.theme.token.font.labelS};

  &:hover {
    color: ${(props) => props.theme.token.color.c6};
  }
`;

const StyledProductLink = styled(ProductLink)`
  ${LinkStyles}
`;

const StyledExternalLink = styled(Link)`
  ${LinkStyles}
`;

export const ListItemWithLink = ({
  href,
  isExternal,
  target,
  ...restListItemProps
}: Props) => {
  return (
    <ListItem
      component={isExternal ? StyledExternalLink : StyledProductLink}
      href={href}
      target={target}
      {...restListItemProps}
    />
  );
};
