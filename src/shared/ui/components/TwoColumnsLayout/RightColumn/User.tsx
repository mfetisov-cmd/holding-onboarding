import { styled } from 'styled-components';

import {
  CommonImage,
  CommonImageName,
} from '@/shared/ui/components/CommonImage';
import { StyledFixedRightColumn } from '@/shared/ui/components/TwoColumnsLayout/RightColumn/styles';

const StyledBox = styled(StyledFixedRightColumn)`
  background: ${({ theme }) => theme.token.color.c4};
`;

export const User = () => {
  return (
    <StyledBox>
      <CommonImage
        alt=""
        height={320}
        image={CommonImageName.user}
        width={320}
      />
    </StyledBox>
  );
};
