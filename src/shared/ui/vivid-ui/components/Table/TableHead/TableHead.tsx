import React from 'react';

import styled from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '@/shared/ui/vivid-ui/shared';

import { TableSegmentContextProvider } from '../TableSegmentContext';

export type TableHeadProps = unknown;

const StyledTableHead = styled(Box)`
  display: table-header-group;
`;

const _TableHead = ({
  children,
  component = 'thead',
  ...rest
}: PolymorphicComponentProps<'thead', TableHeadProps>) => {
  return (
    <TableSegmentContextProvider variant="header">
      <StyledTableHead as={component} {...rest}>
        {children}
      </StyledTableHead>
    </TableSegmentContextProvider>
  );
};

export const TableHead = createPolymorphicComponent<'thead', TableHeadProps>(
  _TableHead,
);
