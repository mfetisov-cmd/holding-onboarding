import { styled } from 'styled-components';

import { StyledTextButton } from '@/shared/ui/components/TextButton';
import { Plus24 } from '@/shared/ui/vivid-ui/components/Icons';
import {
  ListItem,
  ListItemProps,
} from '@/shared/ui/vivid-ui/components/ListItem';

type Props = {
  onClick: () => void;
} & ListItemProps;

const StyledAction = styled(StyledTextButton)`
  width: 100%;
  padding: 0 ${(props) => props.theme.token.spacingS};
  border-radius: ${(props) => props.theme.token.borderRadiusXS};
  fill: ${(props) => props.theme.token.color.c3};
  background-color: ${(props) => props.theme.token.color.c5};

  &:hover {
    background-color: ${(props) => props.theme.token.color.c6l};
    color: ${(props) => props.theme.token.color.c6};
    fill: ${(props) => props.theme.token.color.c6};
  }
`;

export const AutocompleteFieldCommonAction = ({
  onClick,
  ...listItemProps
}: Props) => {
  return (
    <StyledAction as="button" onClick={onClick}>
      <ListItem {...listItemProps} rightIcon={<Plus24 />} />
    </StyledAction>
  );
};
