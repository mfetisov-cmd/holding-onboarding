import { styled } from 'styled-components';

import {
  StyledFixedRightColumn,
  StyledImage,
} from '@/shared/ui/components/TwoColumnsLayout/RightColumn/styles';

const StyledBox = styled(StyledFixedRightColumn)`
  background: linear-gradient(180deg, #00e05a 34%, #d3f8d9 96%);
`;

export const SmsNotification = () => {
  return (
    <StyledBox>
      <StyledImage
        alt=""
        height={252}
        src="/images/right_column/sms_otp.webp"
        unoptimized
        width={284}
      />
    </StyledBox>
  );
};
