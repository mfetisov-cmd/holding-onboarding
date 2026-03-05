import { styled } from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';

import { HEADER_ITEM_SIZE } from './constants';

/**
 * An item positioned on the left side of the mobile header.
 * It is typically used for elements like back buttons or icons.
 * This component is intended to be used inside a MobileHeader.
 */
export const MobileHeaderLeftItem = styled(Box)`
  position: absolute;
  width: ${(props) => props.theme.token.sizeUnits(HEADER_ITEM_SIZE)};
  height: ${(props) => props.theme.token.sizeUnits(HEADER_ITEM_SIZE)};
  left: 0;
`;
