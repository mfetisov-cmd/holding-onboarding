import { ReactNode } from 'react';

import { styled, useTheme } from 'styled-components';

import {
  CommonImage,
  CommonImageName,
} from '@/shared/ui/components/CommonImage';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@/shared/ui/vivid-ui/components/Table';
import { Typography } from '@/shared/ui/vivid-ui/components/Typography';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.token.sizeUnits(40)};
  gap: ${(props) => props.theme.token.spacingL};
`;

type Props = {
  colSpan?: number;
  description: ReactNode;
  variant?: 'body' | 'row' | 'table';
};

export const TableEmpty = ({ colSpan = 1, description, variant }: Props) => {
  const theme = useTheme();

  let content = (
    <TableRow isHoverEffectDisabled>
      <TableCell colSpan={colSpan} noBorder>
        <StyledContent>
          <CommonImage image={CommonImageName.done_dots} size={150} />
          <Typography color={theme.token.color.c2}>{description}</Typography>
        </StyledContent>
      </TableCell>
    </TableRow>
  );

  if (variant === 'row') {
    return content;
  }

  content = <TableBody>{content}</TableBody>;

  if (variant === 'body') {
    return content;
  }

  return <Table>{content}</Table>;
};
