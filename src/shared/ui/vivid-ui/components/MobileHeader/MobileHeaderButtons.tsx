import styled, { useTheme } from 'styled-components';

import {
  Button,
  ButtonProps,
  PolymorphicButtonProps,
} from '@/shared/ui/vivid-ui/components/Button';
import {
  ArrowLeft24,
  Check24,
  Close24,
  Pin24,
} from '@/shared/ui/vivid-ui/components/Icons';
import { PolymorphicComponentProps } from '@/shared/ui/vivid-ui/shared';

const StyledButton = styled(Button)<
  PolymorphicComponentProps<'button', ButtonProps>
>`
  min-width: ${(props) => props.theme.token.sizeUnits(20)};
  width: ${(props) => props.theme.token.sizeUnits(20)};
  height: ${(props) => props.theme.token.sizeUnits(20)};
  padding: 0;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: ${(props) => props.backgroundColor ?? props.theme.token.color.c4};
  &:hover {
    background: ${(props) =>
      props.backgroundColor ?? props.theme.token.color.c4};
  }
`;

/**
 * A component representing a back button within the mobile header.
 * It is typically used for navigating back to the previous screen.
 */
export const MobileHeaderBack = (props: PolymorphicButtonProps) => {
  return (
    <StyledButton size="xs" {...props}>
      <ArrowLeft24 size={22} />
    </StyledButton>
  );
};

/**
 * A component representing a close button within the mobile header.
 * It is typically used for closing a modal or overlay.
 */
export const MobileHeaderClose = (props: PolymorphicButtonProps) => {
  return (
    <StyledButton size="xs" {...props}>
      <Close24 size={20} />
    </StyledButton>
  );
};

export const MobileHeaderApply = (props: PolymorphicButtonProps) => {
  const theme = useTheme();
  return (
    <StyledButton backgroundColor={theme.token.color.c6} size="xs" {...props}>
      <Check24 color={theme.token.color.c0} size={20} />
    </StyledButton>
  );
};

/**
 * A component representing a menu button within the mobile header.
 * It is typically used for opening a menu or navigation drawer.
 */
export const MobileHeaderMenu = (props: PolymorphicButtonProps) => {
  const theme = useTheme();

  return (
    <StyledButton backgroundColor="transparent" size="xs" {...props}>
      <Pin24 color={theme.token.color.c6} />
    </StyledButton>
  );
};
