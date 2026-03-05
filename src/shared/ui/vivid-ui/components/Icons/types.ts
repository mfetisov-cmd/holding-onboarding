import { ElementType } from 'react';

import { PolymorphicComponentProps } from '@/shared/ui/vivid-ui/shared';

export interface SquareIconProps {
  color?: string;
  size?: number;
}

export interface RectangleIconProps {
  color?: string;
  height?: number;
  width?: number;
}

export type PolymorphicSquareIconProps<C extends ElementType = 'svg'> =
  PolymorphicComponentProps<C, SquareIconProps>;
