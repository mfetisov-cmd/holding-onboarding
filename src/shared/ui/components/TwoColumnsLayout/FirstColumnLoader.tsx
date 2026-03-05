import styled, { useTheme } from 'styled-components';

import { Loader } from '@/shared/ui/vivid-ui/components/Loader';

const LoaderContainer = styled.div`
  align-items: center;
  background: ${(props) => props.theme.token.color.c0}50;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 50%;
  top: 0;
  z-index: ${(props) => props.theme.token.zIndex.overlay};

  @media (max-width: ${(props) => props.theme.token.breakPoints.tablet}) {
    right: 0;
  }
`;

export const FirstColumnLoader = () => {
  const theme = useTheme();

  return (
    <LoaderContainer>
      <Loader color={theme.token.color.c6} size={48} />
    </LoaderContainer>
  );
};
