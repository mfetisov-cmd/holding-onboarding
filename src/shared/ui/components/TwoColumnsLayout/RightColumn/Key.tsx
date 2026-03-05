import { styled } from 'styled-components';

import {
  StyledFixedRightColumn,
  StyledImage,
} from '@/shared/ui/components/TwoColumnsLayout/RightColumn/styles';

const StyledBox = styled(StyledFixedRightColumn)`
  background: linear-gradient(45deg, #faf0ed 51%, #f5e4f1 76%, #ae92f0 105%);
`;

export const Key = () => {
  return (
    <StyledBox>
      <StyledImage
        alt=""
        height={252}
        src="/images/right_column/key.webp"
        unoptimized
        width={284}
      />
    </StyledBox>
  );
};
