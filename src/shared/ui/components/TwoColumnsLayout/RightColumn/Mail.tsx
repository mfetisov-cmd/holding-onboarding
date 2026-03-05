import { styled } from 'styled-components';

import {
  StyledFixedRightColumn,
  StyledImage,
} from '@/shared/ui/components/TwoColumnsLayout/RightColumn/styles';

const StyledBox = styled(StyledFixedRightColumn)`
  background: #f4edff;
`;

export const Mail = () => {
  return (
    <StyledBox>
      <StyledImage
        alt=""
        height={252}
        src="/images/right_column/mail.webp"
        unoptimized
        width={284}
      />
    </StyledBox>
  );
};
