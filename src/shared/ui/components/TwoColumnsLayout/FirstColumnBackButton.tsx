import { styled } from 'styled-components';

import { PolymorphicButtonProps } from '@/shared/ui/vivid-ui/components/ButtonV2';

import { BackButton } from './buttons';

const BackButtonContainer = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.token.breakPoints.tablet}) {
    position: absolute;
    display: block;
    left: ${(props) => props.theme.token.sizeUnits(-26)};
    top: 0;
  }
`;

export const FirstColumnBackButton = ({
  onClick,
}: Pick<PolymorphicButtonProps, 'onClick'>) => {
  return (
    <BackButtonContainer>
      <BackButton onClick={onClick} />
    </BackButtonContainer>
  );
};
