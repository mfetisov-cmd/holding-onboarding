import styled from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import { PrefixType } from '@/shared/ui/vivid-ui/shared';

import type { StackProps } from './Stack';

type StyledStackProps = PrefixType<StackProps, '$'>;

export const StyledHStack = styled(Box)<StyledStackProps>`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.token.sizeUnits(props.$gap ?? 0)};
`;

export const StyledVStack = styled(Box)<StyledStackProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.token.sizeUnits(props.$gap ?? 0)};
`;
