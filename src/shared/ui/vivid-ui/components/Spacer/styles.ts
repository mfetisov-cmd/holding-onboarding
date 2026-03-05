import styled from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import { PrefixType } from '@/shared/ui/vivid-ui/shared';

import { SpacerProps } from './Spacer';

type StyledSpacerProps = PrefixType<SpacerProps, '$'>;

export const StyledVerticalSpacer = styled(Box)<StyledSpacerProps>`
  display: block;
  flex-shrink: 0;
  border: none;
  outline: none;
  pointer-events: none;
  height: ${(props) => props.theme.token.sizeUnits(2 * props.$size)};
  width: 100%;
`;

export const StyledHorizontalSpacer = styled(Box)<StyledSpacerProps>`
  display: inline;
  flex-shrink: 0;
  border: none;
  outline: none;
  pointer-events: none;
  width: ${(props) => props.theme.token.sizeUnits(2 * props.$size)};
  height: 1rem;
`;
