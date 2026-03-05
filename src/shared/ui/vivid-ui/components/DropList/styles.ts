import styled, { css } from 'styled-components';

import { Paper, PaperProps } from '@/shared/ui/vivid-ui/components/Paper';
import { PolymorphicComponentProps } from '@/shared/ui/vivid-ui/shared';

export const StyledDropList = styled(Paper)<
  PolymorphicComponentProps<'div', PaperProps> & { $isEmpty?: boolean }
>`
  overflow-y: auto !important;

  ${(props) =>
    props.$isEmpty
      ? css`
          border: none;
        `
      : undefined}
`;

export const StyledOption = styled.button`
  padding: ${({ theme }) => `0 ${theme.token.spacingS}`};
  outline: none;
  border: none;
  color: inherit;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.token.color.c5};
  }
`;

export const StyledDivider = styled.div`
  &:last-child {
    display: none;
  }
`;
