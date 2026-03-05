'use client';
import { CSSProperties, useContext } from 'react';

import styled, { css } from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import {
  TableContext,
  TableContextValue,
} from '@/shared/ui/vivid-ui/components/Table/TableContext/TableContext';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
  PrefixType,
} from '@/shared/ui/vivid-ui/shared';

import {
  TableSegmentContext,
  TableSegmentContextValue,
} from '../TableSegmentContext';

export type TableCellProps = {
  disabled?: boolean;
  noBorder?: boolean;
  textAlign?: CSSProperties['textAlign'];
  width?: number;
};

type StyledTableCellProps = PrefixType<
  TableContextValue & Partial<TableSegmentContextValue> & TableCellProps,
  '$'
>;

const getStyledTableCellTextStyles = ({
  $disabled,
  $textAlign,
  $variant,
}: StyledTableCellProps) => {
  if ($variant === 'header') {
    return css`
      padding-top: ${(props) => props.theme.token.spacingS};
      padding-bottom: ${(props) => props.theme.token.spacingS};
      font: ${(props) => props.theme.token.font.captionCaps};
      font-weight: 400;
      color: ${(props) => props.theme.token.color.c2};
      text-align: ${$textAlign};
      text-transform: uppercase;
    `;
  }

  return css`
    font: ${(props) => props.theme.token.font.labelS};
    color: ${(props) =>
      $disabled ? props.theme.token.color.c3 : props.theme.token.color.c1};
    text-align: ${$textAlign};
    height: ${(props) => props.theme.token.sizeUnits(32)};
  `;
};

const StyledTableCell = styled(Box)<StyledTableCellProps>`
  white-space: nowrap;
  width: ${(props) => (props.$width ? `${props.$width}rem` : undefined)};

  border-style: ${(props) => (props.$noBorder ? 'none' : 'solid')};
  border-color: ${(props) => props.theme.token.color.c17};
  border-width: 0;
  border-bottom-width: 1px;

  &:first-child {
    padding-left: ${({ theme: { token } }) => token.spacingS};
  }

  &:last-child {
    padding-right: ${({ theme: { token } }) => token.spacingS};
  }

  &:not(:first-child):not(:last-child) {
    padding: ${(props) => `0 ${props.theme.token.spacingM}`};
  }

  ${getStyledTableCellTextStyles};
`;

const TableCellBase = ({
  children,
  component = 'td',
  disabled = false,
  noBorder = false,
  textAlign,
  width,
  ...rest
}: PolymorphicComponentProps<'td', TableCellProps>) => {
  const { hasHorizontalPaddings, textAlign: contextAlign } =
    useContext(TableContext);

  const segmentContext = useContext(TableSegmentContext);
  const isBorderHidden = noBorder || segmentContext?.variant === 'footer';

  return (
    <StyledTableCell
      $disabled={disabled}
      $hasHorizontalPaddings={hasHorizontalPaddings}
      $noBorder={isBorderHidden}
      $textAlign={textAlign || contextAlign}
      $variant={segmentContext?.variant}
      $width={width}
      as={component}
      {...rest}
    >
      {children}
    </StyledTableCell>
  );
};

export const TableCell = createPolymorphicComponent<'td', TableCellProps>(
  TableCellBase,
);
