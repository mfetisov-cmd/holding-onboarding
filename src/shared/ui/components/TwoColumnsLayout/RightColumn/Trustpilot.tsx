import Image from 'next/image';
import { styled } from 'styled-components';

import { StyledFixedRightColumn } from './styles';

const GreenBox = styled(StyledFixedRightColumn)`
  background: #04da8d;
  flex-direction: column;
  gap: ${(props) => props.theme.token.spacingS};
`;

export const Trustpilot = () => {
  return (
    <GreenBox>
      <Image
        alt="Trustpilot logo"
        height={80}
        priority
        src="/images/customer-feedback/trustpilot.svg"
        width={330}
      />
    </GreenBox>
  );
};


