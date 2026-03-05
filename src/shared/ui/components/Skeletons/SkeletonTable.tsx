'use client';
import { styled } from 'styled-components';

import { Skeleton } from '@/shared/ui/vivid-ui/components/Skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@/shared/ui/vivid-ui/components/Table';

const StyledTableSkeletonRow = styled.div`
  width: 100%;
`;

export const SkeletonTable = ({
  colsCount = 3,
  rowsCount = 3,
}: {
  colsCount?: number;
  rowsCount?: number;
}) => {
  const rows = new Array(rowsCount).fill('row');
  const cols = new Array(colsCount).fill('col');

  return (
    <Table>
      <TableHead>
        <TableRow isHoverEffectDisabled>
          {cols.map((_, colIndex) => (
            <TableCell key={`header-${colIndex}`}>
              <Skeleton
                animated
                component={StyledTableSkeletonRow}
                height={12}
                variant="rounded"
              />
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((_, index) => (
          <TableRow isHoverEffectDisabled key={`row-${index}`}>
            {cols.map((_, colIndex) => (
              <TableCell key={`row-${index}-col-${colIndex}`}>
                <Skeleton
                  animated
                  component={StyledTableSkeletonRow}
                  height={40}
                  variant="rounded"
                />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
