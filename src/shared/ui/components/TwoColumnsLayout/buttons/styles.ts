import { styled } from 'styled-components';

import { Flex, FlexProps } from '@/shared/ui/vivid-ui/components/Layout';
import { PolymorphicComponentProps } from '@/shared/ui/vivid-ui/shared';

export const StyledBottomNavigationButtons = styled(Flex)<
  PolymorphicComponentProps<'div', FlexProps>
>`
  flex-grow: 1;
  gap: ${(props) =>
    props.direction === 'column'
      ? props.theme.token.spacingXS
      : props.theme.token.spacingM};
  pointer-events: none;

  a,
  button {
    pointer-events: auto;
  }
`;
