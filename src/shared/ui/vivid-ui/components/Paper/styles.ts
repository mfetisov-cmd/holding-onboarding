import styled from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import { PaperProps } from '@/shared/ui/vivid-ui/components/Paper/Paper';
import { PrefixType } from '@/shared/ui/vivid-ui/shared';

export const StyledPaper = styled(Box)<PrefixType<PaperProps, '$'>>`
  border-radius: ${(props) => props.theme.token.borderRadiusM};
  background-color: ${(props) =>
    props.$type === 'light'
      ? props.theme.token.color.c0
      : props.theme.token.color.c5};
  box-shadow: ${(props) =>
    props.$type === 'light' ? '0 10px 30px 0 rgba(0, 0, 0, 0.1)' : 'none'};
  // TODO Remove after @ikorzun solves problem with disappearing box-shadow
  border: ${(props) =>
    props.theme.name === 'light'
      ? 'none'
      : `1px solid ${props.theme.token.color.c5}`};
  overflow: hidden;
`;
