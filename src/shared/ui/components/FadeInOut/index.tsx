import { ReactElement } from 'react';

import { css, keyframes, styled } from 'styled-components';

const fadeIn = keyframes`
  0% {
    position: absolute;
    display: none;
    opacity: 0;
  }
  50% {
    position: relative;
    opacity: 0;
    display: block;
  }
  100% {
    position: relative;
    opacity: 1;
    display: block;
  }`;

const fadeOut = keyframes`
  0% {
    position: relative;
    display: block;
    opacity: 1;
  }
  50% {
    position: absolute;
    opacity: 0;
    display: none;
  }
  100% {
    position: absolute;
    opacity: 0;
    display: none;
  }
`;

const StyledFadeInContainer = styled.div<{
  $animated?: boolean;
  $durationMS: number;
}>`
  ${({ $animated, $durationMS }) =>
    $animated
      ? css`
          opacity: 0;
          animation: ${fadeIn} ${$durationMS}ms forwards;
        `
      : css``}
`;

const StyledFadeOutContainer = styled.div<{
  $animated?: boolean;
  $durationMS: number;
}>`
  ${({ $animated, $durationMS }) =>
    $animated
      ? css`
          animation: ${fadeOut} ${$durationMS}ms forwards;
        `
      : css``}
`;

export const FadeInOut = ({
  animated,
  durationMS = 1000,
  fadeIn,
  fadeOut,
}: {
  animated?: boolean;
  durationMS?: number;
  fadeIn?: ReactElement<any>;
  fadeOut?: ReactElement<any>;
}) => {
  return (
    <>
      <StyledFadeInContainer $animated={animated} $durationMS={durationMS}>
        {fadeIn}
      </StyledFadeInContainer>
      <StyledFadeOutContainer $animated={animated} $durationMS={durationMS}>
        {fadeOut}
      </StyledFadeOutContainer>
    </>
  );
};
