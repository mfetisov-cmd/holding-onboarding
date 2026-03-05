import { styled } from 'styled-components';

import { StyledFixedRightColumn, StyledImage } from './styles';

const StyledBox = styled(StyledFixedRightColumn)`
  background-color: ${({ theme }) => theme.token.color.c6l};
`;

export const Palms = () => (
  <StyledBox>
    <StyledImage
      alt="palms"
      height={396}
      objectFit="contain"
      src="/images/right_column/palms.webp"
      unoptimized
      width={396}
    />
  </StyledBox>
);
