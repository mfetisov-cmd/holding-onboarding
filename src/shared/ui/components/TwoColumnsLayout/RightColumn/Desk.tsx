import { styled } from 'styled-components';

import { StyledFixedRightColumn } from '@/shared/ui/components/TwoColumnsLayout/RightColumn/styles';

const StyledImage = styled(StyledFixedRightColumn)`
  object-fit: cover;
`;

export const Desk = () => {
  return (
    <StyledImage alt="desk" as="img" src="/images/right_column/desk.webp" />
  );
};
