'use client';
import { ElementType } from 'react';

import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '@/shared/ui/vivid-ui/shared';

import { StyledDivider } from './styles';

export type DividerProps = {
  backgroundColor?: string;
  bounds?: boolean;
  visible?: boolean;
};

export type PolymorphicDividerProps<C extends ElementType = 'button'> =
  PolymorphicComponentProps<C, DividerProps>;

const _Divider = ({
  backgroundColor,
  bounds,
  component,
  visible = true,
  ...rest
}: PolymorphicDividerProps) => {
  return (
    <StyledDivider
      $backgroundColor={backgroundColor}
      $bounds={bounds}
      $visible={visible}
      as={component}
      {...rest}
    />
  );
};

export const Divider = createPolymorphicComponent<'div', DividerProps>(
  _Divider,
);
