import { styled } from 'styled-components';

import {
  StyledFixedRightColumn,
  StyledImage,
} from '@/shared/ui/components/TwoColumnsLayout/RightColumn/styles';

const StyledBox = styled(StyledFixedRightColumn)`
  background: linear-gradient(180deg, #7e47ff 34%, #f5e4f1 96%);
`;

export const Referral = () => {
  return (
    <StyledBox>
      <StyledImage
        alt="balloons image"
        height={580}
        src="/images/right_column/referral.webp"
        width={580}
      />
    </StyledBox>
  );
};
