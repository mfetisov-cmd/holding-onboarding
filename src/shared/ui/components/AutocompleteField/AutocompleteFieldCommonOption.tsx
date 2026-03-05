import { styled } from 'styled-components';

import {
  ListItem,
  ListItemProps,
} from '@/shared/ui/vivid-ui/components/ListItem';

type Props = {
  onClick: () => void;
} & ListItemProps;

const StyledOption = styled.div`
  padding: 0 ${(props) => props.theme.token.spacingS};
  fill: transparent;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.token.color.c6l};
    fill: ${(props) => props.theme.token.color.c3};
  }

  &:not(:first-child) {
    border-top: 1px solid ${(props) => props.theme.token.color.c4};
  }
`;

export const AutocompleteFieldCommonOption = ({
  onClick,
  ...listItemProps
}: Props) => {
  return (
    <StyledOption onClick={onClick}>
      <ListItem labelPosition="down" {...listItemProps} />
    </StyledOption>
  );
};
