'use client';
import styled from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '@/shared/ui/vivid-ui/shared';

import { TableSegmentContextProvider } from '../TableSegmentContext';

export type TableHeadProps = unknown;

const StyledTableBody = styled(Box)`
  display: table-row-group;
`;

const _TableBody = ({
  children,
  component = 'tbody',
  ...rest
}: PolymorphicComponentProps<'tbody', TableHeadProps>) => {
  return (
    <TableSegmentContextProvider variant="body">
      <StyledTableBody as={component} {...rest}>
        {children}
      </StyledTableBody>
    </TableSegmentContextProvider>
  );
};

export const TableBody = createPolymorphicComponent<'tbody', TableHeadProps>(
  _TableBody,
);
