import React, { useContext } from 'react';

import styled, { css } from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
  PrefixType,
} from '@/shared/ui/vivid-ui/shared';

import {
  TableSegmentContext,
  TableSegmentContextValue,
} from '../TableSegmentContext';

export type TableRowProps = {
  isHoverEffectDisabled?: boolean;
};

type StyledTableRowProps = PrefixType<
  TableRowProps & { variant?: TableSegmentContextValue['variant'] },
  '$'
>;

// While row is hovered, hides borders on previous row to avoid lines hanging out of corner
const hideBorderOnPreviousRowWhileHoveredCss = css`
  &:has(+ &:hover) td {
    border-color: transparent;
  }
`;

const getHoverStyles = ({
  $isHoverEffectDisabled,
  $variant,
}: StyledTableRowProps) => {
  if ($variant !== 'body' || $isHoverEffectDisabled) {
    return hideBorderOnPreviousRowWhileHoveredCss;
  }
  return css`
    ${hideBorderOnPreviousRowWhileHoveredCss}

    &:hover > td {
      fill: ${(props) => props.theme.token.color.c6};
      background-color: ${(props) => props.theme.token.color.c6l};
      border-color: transparent;

      &:first-child {
        border-top-left-radius: ${(props) => props.theme.token.borderRadiusM};
        border-bottom-left-radius: ${(props) =>
          props.theme.token.borderRadiusM};
      }

      &:last-child {
        border-top-right-radius: ${(props) => props.theme.token.borderRadiusM};
        border-bottom-right-radius: ${(props) =>
          props.theme.token.borderRadiusM};
      }
    }
  `;
};

const StyledTableRow = styled(Box)<StyledTableRowProps>`
  color: inherit;
  display: table-row;
  vertical-align: middle;
  background-color: inherit;
  font: ${(props) => props.theme.token.font.paragraphM};
  // Disable the focus border for mouse, touch and keyboard users.
  outline: 0;

  ${getHoverStyles}
`;

const TableRowBase = ({
  children,
  component = 'tr',
  isHoverEffectDisabled,
  ...rest
}: PolymorphicComponentProps<'tr', TableRowProps>) => {
  const segmentContext = useContext(TableSegmentContext);

  return (
    <StyledTableRow
      $isHoverEffectDisabled={isHoverEffectDisabled}
      $variant={segmentContext?.variant}
      as={component}
      {...rest}
    >
      {children}
    </StyledTableRow>
  );
};

export const TableRow = createPolymorphicComponent<'tr', TableRowProps>(
  TableRowBase,
);
