import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import { ModalOverlay } from '@/shared/ui/components/ModalOverlay';

const StyledDialogContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  overflow: auto;
  z-index: 10;
  background-color: ${(props) => props.theme.token.color.c0};
`;

export const FullScreenDialog = ({ children }: PropsWithChildren) => {
  return (
    <ModalOverlay disablePortal>
      <StyledDialogContainer>{children}</StyledDialogContainer>
    </ModalOverlay>
  );
};
