'use client';
import styled from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '@/shared/ui/vivid-ui/shared';

import { TableSegmentContextProvider } from '../TableSegmentContext';

export type TableHeadProps = unknown;

const StyledTableFoot = styled(Box)`
  display: table-footer-group;
`;

const _TableFoot = ({
  children,
  component = 'tfoot',
  ...rest
}: PolymorphicComponentProps<'tfoot', TableHeadProps>) => {
  return (
    <TableSegmentContextProvider variant="footer">
      <StyledTableFoot as={component} {...rest}>
        {children}
      </StyledTableFoot>
    </TableSegmentContextProvider>
  );
};

export const TableFoot = createPolymorphicComponent<'tfoot', TableHeadProps>(
  _TableFoot,
);
