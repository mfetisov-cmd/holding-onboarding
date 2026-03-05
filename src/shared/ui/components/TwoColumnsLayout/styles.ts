import { CSSProperties } from 'react';

import { css, styled } from 'styled-components';

import { HEADER_HEIGHT_DESKTOP } from '@/screens/onboarding/components/Header/styles';

export const MIN_COLUMN_CONTENT_WIDTH = '318rem';
export const MAX_COLUMN_CONTENT_WIDTH = '572rem';

export const COLUMN_TOP_INDENT_SIZE_UNIT = 29;

export const TwoColumnsLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100dvh;
`;

export const ColumnBottomNavigation = styled.div<{
  $alignSelf?: CSSProperties['alignSelf'];
}>`
  position: sticky;
  bottom: ${(props) => props.theme.token.spacingL};
  display: flex;
  flex-shrink: 0;
  width: 100%;
  min-width: ${MIN_COLUMN_CONTENT_WIDTH};
  max-width: ${MAX_COLUMN_CONTENT_WIDTH};
  align-items: center;
  align-self: ${({ $alignSelf }) => $alignSelf ?? 'start'};
  justify-content: space-between;
  margin-top: ${(props) => props.theme.token.sizeUnits(24)};
  z-index: ${(props) => props.theme.token.zIndex.sticky};
  pointer-events: none;

  a,
  button {
    pointer-events: auto;
  }

  @media (max-width: ${(props) => props.theme.token.breakPoints.tablet}) {
    justify-content: center;
    min-width: unset;
    margin-top: ${(props) => props.theme.token.spacingL}};
  }
`;

export const ColumnsContainer = styled.div`
  display: flex;
  align-items: stretch;
  flex-grow: 1;

  @media (max-width: ${(props) => props.theme.token.breakPoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ColumnContent = styled.div<{
  $justify?: CSSProperties['justifyContent'];
}>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ $justify }) => $justify};
  flex-grow: 1;
`;

type StyledColumnProps = {
  $center?: boolean;
};

const StyledColumn = styled.div<StyledColumnProps>`
  padding: ${({ $center, theme }) =>
    `${theme.token.sizeUnits(
      $center ? 12 : COLUMN_TOP_INDENT_SIZE_UNIT,
    )} ${theme.token.sizeUnits(38)} ${theme.token.sizeUnits(12)}`};
  flex: 1 1 100%;

  @media (max-width: ${(props) => props.theme.token.breakPoints.tablet}) {
    padding: ${({ theme }) =>
      `${theme.token.spacingL} ${theme.token.spacingM}`};
    flex: 0 0 auto;
  }
`;

type FirstColumnProps = StyledColumnProps & {
  $centerText?: boolean;
  $maxWidth?: string;
  $withoutTopIndent?: boolean;
};

const getMainContentTopIndentStyle = ({
  $withoutTopIndent,
}: FirstColumnProps) =>
  $withoutTopIndent
    ? css`
        margin-top: -${HEADER_HEIGHT_DESKTOP}rem;
        padding-top: ${(props) => props.theme.token.spacingL};
      `
    : '';

export const FirstColumn = styled(StyledColumn)<FirstColumnProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.$center ? 'center' : 'stretch')};
  text-align: ${(props) => (props.$centerText ? 'center' : 'initial')};
  flex-basis: 50%;

  @media (max-width: ${(props) => props.theme.token.breakPoints.tablet}) {
    flex-grow: 1;
    width: 100%;
    margin-top: unset;
  }

  ${getMainContentTopIndentStyle}

  ${ColumnContent} {
    width: 100%;
    min-width: ${MIN_COLUMN_CONTENT_WIDTH};
    max-width: ${({ $maxWidth }) => $maxWidth ?? MAX_COLUMN_CONTENT_WIDTH};

    @media (max-width: ${(props) => props.theme.token.breakPoints.tablet}) {
      min-width: unset;
      align-self: center;
    }
  }

  ${ColumnBottomNavigation} {
    max-width: ${({ $maxWidth }) => $maxWidth ?? MAX_COLUMN_CONTENT_WIDTH};

    @media (max-width: ${(props) => props.theme.token.breakPoints.tablet}) {
      align-self: center;
    }
  }
`;

export const SecondColumn = styled(StyledColumn)`
  flex-basis: 50%;
  position: sticky;
  top: ${HEADER_HEIGHT_DESKTOP}rem;
  display: flex;
  flex-direction: column;

  @media (max-width: ${(props) => props.theme.token.breakPoints.tablet}) {
    display: none;
  }
`;
