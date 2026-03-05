import { ElementType } from 'react';

import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '../../shared';
import { StyledGrid } from './styles';

export interface GridProps {
  alignItems?: 'center' | 'end' | 'start' | 'stretch';
  autoFlow?: 'column dense' | 'column' | 'row dense' | 'row';
  columnGap?: string;

  justifyContent?:
    | 'center'
    | 'end'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'start'
    | 'stretch';
  rowGap?: string;
  templateColumns?: string;
  templateRows?: string;
}

export type PolymorphicGridProps<C extends ElementType = 'div'> =
  PolymorphicComponentProps<C, GridProps>;

const _Grid = ({
  alignItems,
  autoFlow,
  columnGap,
  justifyContent,
  rowGap,
  templateColumns,
  templateRows,
  ...rest
}: PolymorphicGridProps) => (
  <StyledGrid
    $alignItems={alignItems}
    $autoFlow={autoFlow}
    $columnGap={columnGap}
    $justifyContent={justifyContent}
    $rowGap={rowGap}
    $templateColumns={templateColumns}
    $templateRows={templateRows}
    {...rest}
  />
);

export const Grid = createPolymorphicComponent<'div', GridProps>(_Grid);
