import { styled } from 'styled-components';

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.token.spacingS};
  text-align: center;
  width: 95%;
  text-wrap: pretty;
`;
export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.token.spacingXS};
  width: 100%;
  margin-top: ${(props) => props.theme.token.sizeUnits(16)};
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${(props) => props.theme.token.breakPoints.tablet}) {
    width: ${(props) => props.theme.token.sizeUnits(224)};
  }
`;

export const StyledImageContainer = styled.div`
  padding-bottom: ${(props) => props.theme.token.sizeUnits(12)};
`;
