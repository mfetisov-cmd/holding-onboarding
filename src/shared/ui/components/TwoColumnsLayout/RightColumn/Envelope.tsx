import { styled } from 'styled-components';

import {
  StyledFixedRightColumn,
  StyledImage,
} from '@/shared/ui/components/TwoColumnsLayout/RightColumn/styles';

const StyledBox = styled(StyledFixedRightColumn)`
  background: linear-gradient(180deg, #007eff 34%, #dcecff 96%);
`;

export const Envelope = () => {
  return (
    <StyledBox>
      <StyledImage
        alt=""
        height={248}
        src="/images/right_column/envelope.webp"
        unoptimized
        width={335}
      />
    </StyledBox>
  );
};
