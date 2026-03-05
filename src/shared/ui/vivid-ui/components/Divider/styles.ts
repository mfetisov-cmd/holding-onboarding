import styled from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import { PrefixType } from '@/shared/ui/vivid-ui/shared';

import { DividerProps } from './Divider';

type StyledDividerProps = PrefixType<DividerProps, '$'>;

export const StyledDivider = styled(Box)<StyledDividerProps>`
  display: block;
  border: none;
  outline: none;
  pointer-events: none;
  height: 1px;
  background-color: ${(props) =>
    props.$visible
      ? props.$backgroundColor || props.theme.token.color.c17
      : 'transparent'};
  margin: ${(props) => (props.$bounds ? '0 16rem' : '0')};
`;
