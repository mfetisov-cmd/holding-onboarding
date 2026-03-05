import { styled } from 'styled-components';

import {
  CommonImage,
  CommonImageName,
} from '@/shared/ui/components/CommonImage';
import { StyledFixedRightColumn } from '@/shared/ui/components/TwoColumnsLayout/RightColumn/styles';

const StyledBox = styled(StyledFixedRightColumn)`
  background: #f8edff;
`;

export const UserFaceMatch = () => {
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
