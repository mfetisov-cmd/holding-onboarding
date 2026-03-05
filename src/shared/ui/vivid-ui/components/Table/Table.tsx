'use client';
import { CSSProperties } from 'react';

import styled from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '@/shared/ui/vivid-ui/shared';

import { TableContextProvider } from './TableContext';

export { TableBody } from './TableBody';
export { TableCell } from './TableCell';
export { TableFoot } from './TableFoot';
export { TableHead } from './TableHead';
export { TableRow } from './TableRow';

export type TableProps = {
  hasHorizontalPaddings?: boolean;
  tableLayout?: CSSProperties['tableLayout'];
  textAlign?: CSSProperties['textAlign'];
};

const StyledTableContainer = styled(Box)`
  position: relative;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
`;

const StyledTable = styled(Box)<{
  $tableLayout?: CSSProperties['tableLayout'];
}>`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  @media (min-width: ${(props) => props.theme.token.breakPoints.desktopXS}) {
    table-layout: ${(props) => props.$tableLayout};
  }
`;

const _Table = ({
  children,
  component = 'table',
  hasHorizontalPaddings = false,
  tableLayout,
  textAlign = 'left',
  ...rest
}: PolymorphicComponentProps<'table', TableProps>) => {
  return (
    <TableContextProvider value={{ hasHorizontalPaddings, textAlign }}>
      <StyledTableContainer>
        <StyledTable $tableLayout={tableLayout} as={component} {...rest}>
          {children}
        </StyledTable>
      </StyledTableContainer>
    </TableContextProvider>
  );
};

export const Table = createPolymorphicComponent<'table', TableProps>(_Table);
