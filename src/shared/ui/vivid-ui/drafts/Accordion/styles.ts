import { css, styled } from 'styled-components';

export const StyledAccordionContainer = styled.div`
  width: 100%;
  border-radius: ${({ theme }) => theme.token.borderRadiusS};
`;

const expandedStyles = css<StyledProps>`
  max-height: ${({ $fullHeight, theme }) =>
    $fullHeight ? undefined : theme.token.sizeUnits(250)};
  overflow: visible;
  opacity: 1;
  visibility: visible;
`;

const collapsedStyles = css`
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
`;

type StyledProps = {
  $fullHeight: boolean;
  $isExpanded: boolean;
};

export const StyledAccordionContent = styled.div<StyledProps>`
  ${({ $isExpanded }) => ($isExpanded ? expandedStyles : collapsedStyles)};
  transition: max-height 0.3s ease-in-out, opacity 0.2s ease-in-out,
    visibility 0.2s ease-in-out;
`;
