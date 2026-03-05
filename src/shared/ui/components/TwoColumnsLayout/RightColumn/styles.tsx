import Image from 'next/image';
import { styled } from 'styled-components';

export const StyledFixedRightColumn = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${(props) => props.theme.token.breakPoints.tablet}) {
    display: none;
  }
`;

export const StyledBottomContentBox = styled.div<{
  $withoutXPaddings?: boolean;
}>`
  padding: ${({ $withoutXPaddings, theme }) =>
    `${theme.token.spacingM} ${
      $withoutXPaddings ? 0 : theme.token.spacingM
    } ${theme.token.sizeUnits(32)}`};
  max-width: ${(props) => props.theme.token.sizeUnits(175)};
  text-align: center;
`;

export const StyledImage = styled(Image)<{
  height: number;
  paddingRight?: number;
  paddingTop?: number;
  width: number;
}>`
  height: ${({ height }) => `${height}rem`};
  width: ${({ width }) => `${width}rem`};
  padding-top: ${({ paddingTop }) => paddingTop && `${paddingTop}rem`};
  padding-right: ${({ paddingRight }) => paddingRight && `${paddingRight}rem`};
`;
