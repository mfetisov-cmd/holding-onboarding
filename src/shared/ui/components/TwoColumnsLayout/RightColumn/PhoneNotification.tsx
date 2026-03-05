import Image from 'next/image';
import { styled } from 'styled-components';

import { Column } from '@/shared/ui/vivid-ui/components/Layout';

import { StyledFixedRightColumn } from './styles';

const StyledBox = styled(StyledFixedRightColumn)`
  background: linear-gradient(180deg, #7e47ff 33.99%, #f5e4f1 95.72%);
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding-top: 130rem;
`;

const ImageContainer = styled(Column)`
  position: relative;
  height: 100%;
  width: 60%;
`;

export const PhoneNotification = () => {
  return (
    <StyledBox>
      <ImageContainer>
        <Image
          alt="phone notification"
          fill
          objectFit="contain"
          objectPosition="bottom"
          src="/images/right_column/phone_notification.webp"
          unoptimized
        />
      </ImageContainer>
    </StyledBox>
  );
};
