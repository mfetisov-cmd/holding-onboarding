import { PropsWithChildren } from 'react';

import { styled } from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';

import { HEADER_ITEM_SIZE } from './constants';

const HeaderContainer = styled(Box)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.theme.token.sizeUnits(HEADER_ITEM_SIZE)};
  padding: 0 ${(props) => props.theme.token.sizeUnits(HEADER_ITEM_SIZE)};
`;

/**
 * A component representing the header section for mobile views.
 * It is used to contain navigation elements or titles.
 * @see MobileHeaderTitle
 * @see MobileHeaderLeftItem
 * @see MobileHeaderRightItem
 */
export const MobileHeader = ({ children }: PropsWithChildren) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};
