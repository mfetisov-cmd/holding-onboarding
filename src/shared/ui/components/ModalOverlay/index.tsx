import styled from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import { Portal } from '@/shared/ui/vivid-ui/components/Portal';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '@/shared/ui/vivid-ui/shared';

type ModalProps = { disablePortal?: boolean };

const StyledModal = styled(Box)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${(props) =>
    props.theme.name === 'dark'
      ? 'rgba(255, 255, 255, 0.2)'
      : 'rgba(0, 0, 0, 0.4)'};
  overflow: auto;
  display: flex;
  z-index: ${(props) => props.theme.token.zIndex.overlay};
`;

const _ModalOverlay = ({
  children,
  component,
  disablePortal,
  ...rest
}: PolymorphicComponentProps<'div', ModalProps>) => {
  if (disablePortal) {
    return (
      <StyledModal as={component} {...rest}>
        {children}
      </StyledModal>
    );
  }

  return (
    <Portal>
      <StyledModal as={component} {...rest}>
        {children}
      </StyledModal>
    </Portal>
  );
};

export const ModalOverlay = createPolymorphicComponent<'div', ModalProps>(
  _ModalOverlay,
);
