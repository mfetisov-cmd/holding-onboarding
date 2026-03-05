import { DayPicker, UI } from 'react-day-picker';

import styled, { css } from 'styled-components';

import { customClassNames } from './constants';

const arrowButtonBase = css`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  font-size: 0;
  width: ${({ theme }) => theme.token.sizeUnits(12)};
  height: ${({ theme }) => theme.token.sizeUnits(12)};
  color: ${({ theme }) => theme.token.color.c6};
  top: ${({ theme }) => theme.token.sizeUnits(8)};
  position: absolute;

  &[aria-disabled] {
    color: ${({ theme }) => theme.token.color.c3w};
    cursor: default;
  }
`;

export const NextMonthButton = styled.button`
  right: ${({ theme }) => theme.token.sizeUnits(8)};

  ${arrowButtonBase}
`;

export const PreviousMonthButton = styled.button`
  left: ${({ theme }) => theme.token.sizeUnits(8)};

  ${arrowButtonBase}
`;

export const StyledDayPicker = styled(DayPicker)`
  display: inline-flex;
  position: relative;

  table {
    border-spacing: 0;
  }

  .${customClassNames[UI.Months]} {
    display: inline-flex;
    padding: ${({ theme }) => theme.token.sizeUnits(8)};
    border-radius: ${({ theme }) => theme.token.borderRadiusM};
    background: ${({ theme }) => theme.token.color.c0};
    box-shadow: 0px 1px 16px 0px rgba(0, 0, 0, 0.08);
    gap: ${({ theme }) => theme.token.sizeUnits(16)};
    position: relative;
  }

  .${customClassNames[UI.Month]} {
    width: ${({ theme }) => theme.token.sizeUnits(119)};

    &:not(:first-child):before {
      content: '';
      display: block;
      width: ${({ theme }) => theme.token.sizeUnits(0.5)};
      height: calc(100% - ${({ theme }) => theme.token.sizeUnits(16)});
      background: ${({ theme }) => theme.token.color.c4};
      margin-left: ${({ theme }) => theme.token.sizeUnits(-8)};
      position: absolute;
    }
  }

  .${customClassNames[UI.MonthCaption]} {
    text-align: center;
    margin-bottom: ${({ theme }) => theme.token.sizeUnits(6)};
    padding-top: ${({ theme }) => theme.token.sizeUnits(2)};
  }

  .${customClassNames[UI.CaptionLabel]} {
    font: ${({ theme }) => theme.token.font.labelSAcc};
  }

  .${customClassNames[UI.Day]} {
    width: ${({ theme }) => theme.token.sizeUnits(17)};
    height: ${({ theme }) => theme.token.sizeUnits(16)};
    border-radius: ${({ theme }) => theme.token.borderRadiusS};
    color: ${({ theme }) => theme.token.color.c1};

    &.rdp-range_start:not(.rdp-range_end) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    &.rdp-range_end:not(.rdp-range_start) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    &.rdp-range_middle {
      background: ${({ theme }) => theme.token.color.c6l};
      border-radius: 0;
    }

    &:hover:not([data-selected]):not([data-disabled]) {
      background: ${({ theme }) => theme.token.color.c6l};
    }

    &[data-selected]:not(.rdp-range_middle) {
      background: ${({ theme }) => theme.token.color.c6};
      color: ${({ theme }) => theme.token.color.c0};
    }

    &[data-today]:not([data-selected]) {
      color: ${({ theme }) => theme.token.color.c6};
    }

    &[data-outside] {
      color: ${({ theme }) => theme.token.color.c3};
    }

    &[data-disabled] {
      color: ${({ theme }) => theme.token.color.c3};

      button {
        cursor: default;
      }
    }
  }

  .${customClassNames[UI.DayButton]} {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    color: inherit;
    font: ${({ theme }) => theme.token.font.labelS};
  }

  .${customClassNames[UI.MonthGrid]} {
    width: 100%;
  }

  .${customClassNames[UI.Weekdays]} {
    height: ${({ theme }) => theme.token.sizeUnits(14)};

    th {
      font: ${({ theme }) => theme.token.font.captionS};
      color: ${({ theme }) => theme.token.color.c2};
    }
  }
`;
