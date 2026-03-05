import styled from 'styled-components';

import { PrefixType } from '../../shared';
import { Box } from '../Box';
import { FlexProps } from './Flex';
import { GridProps } from './Grid';

type StyledFlexProps = PrefixType<Omit<FlexProps, 'children'>, '$'>;
type StyledGridPops = PrefixType<GridProps, '$'>;

export const StyledFlex = styled(Box)<StyledFlexProps>`
  position: ${(props) => props.$position};
  display: flex;
  flex-direction: ${(props) => props.$direction || 'row'};
  justify-content: ${(props) => props.$justify || 'flex-start'};
  align-items: ${(props) => props.$align || 'stretch'};
  flex-wrap: ${(props) => props.$wrap || 'nowrap'};
  flex-grow: ${(props) => props.$grow};
  flex-shrink: ${(props) => props.$shrink};
  gap: ${(props) => props.$gap || 0};
  width: ${(props) => props.$width || 'auto'};
  height: ${(props) => props.$height || 'auto'};
  min-height: ${(props) => props.$minHeight};
  max-height: ${(props) => props.$maxHeight};
  min-width: ${(props) => props.$minWidth};
  max-width: ${(props) => props.$maxWidth};
`;

export const StyledGrid = styled(Box)<StyledGridPops>`
  display: grid;
  grid-template-columns: ${(props) => props.$templateColumns || 'none'};
  grid-template-rows: ${(props) => props.$templateRows || 'none'};
  grid-column-gap: ${(props) => props.$columnGap || 0};
  grid-row-gap: ${(props) => props.$rowGap || 0};
  justify-content: ${(props) => props.$justifyContent || 'normal'};
  align-items: ${(props) => props.$alignItems || 'normal'};
  grid-auto-flow: ${(props) => props.$autoFlow || 'row'};
`;
