import styled from 'styled-components';

import {
  CommonImage,
  CommonImageName,
} from '@/shared/ui/components/CommonImage';
import { StyledFixedRightColumn } from '@/shared/ui/components/TwoColumnsLayout/RightColumn/styles';

const StyledBox = styled(StyledFixedRightColumn)`
  background: ${(props) => props.theme.token.color.c4};
`;

export const Success = () => {
  return (
    <StyledBox>
      <CommonImage
        alt=""
        height={336}
        image={CommonImageName.success}
        width={336}
      />
    </StyledBox>
  );
};
