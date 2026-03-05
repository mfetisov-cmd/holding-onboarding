import { styled } from 'styled-components';

import { Divider } from '@/shared/ui/vivid-ui/components/Divider';

// Divider with padding equals to IconView + Gap
const StyledListItemShortDivider = styled.div`
  padding-left: ${({ theme: { token } }) => token.sizeUnits(26)};
`;

export const ListItemShortDivider = () => {
  return (
    <StyledListItemShortDivider>
      <Divider />
    </StyledListItemShortDivider>
  );
};
