import { styled } from 'styled-components';

import { StyledFixedRightColumn } from '@/shared/ui/components/TwoColumnsLayout/RightColumn/styles';

const StyledImage = styled(StyledFixedRightColumn)`
  object-fit: cover;
`;

export const ImageColumn = () => {
  return <StyledImage as="img" src="/images/onboarding/bg-small.webp" />;
};
