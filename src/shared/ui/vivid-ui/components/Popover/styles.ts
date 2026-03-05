import styled, { css } from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';

export const StyledPopoverContainer = styled.div<{ $fullWidth?: boolean }>`
  position: relative;
  display: ${({ $fullWidth }) => ($fullWidth ? 'block' : 'inline-block')};
  cursor: pointer;

  ${({ $fullWidth }) =>
    $fullWidth &&
    css`
      width: 100%;
    `}
`;

export const StyledContentWrapper = styled(Box)`
  z-index: ${(props) => `${props.theme.token.zIndex.popover}`};
`;

export const StyledPaper = styled(Box)`
  z-index: ${(props) => `${props.theme.token.zIndex.popover}`};
`;

export const StyledContent = styled.div<{ $noContentPaddings?: boolean }>`
  padding: ${(props) =>
    `${props.$noContentPaddings ? 0 : props.theme.token.spacingL}`};
`;
