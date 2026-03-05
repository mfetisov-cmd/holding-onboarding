'use client';
import { forwardRef, ReactNode } from 'react';

import styled from 'styled-components';

import { createPolymorphicComponent } from '../../shared';

export interface BoxProps extends React.HTMLAttributes<Element> {
  children?: ReactNode;
}

const StyledBox = styled.div<BoxProps>``;

export const _Box = forwardRef<Element, BoxProps & { component?: any }>(
  ({ component, ...rest }, ref) => {
    const as = component || 'div';
    return <StyledBox as={as} ref={ref} {...rest} />;
  },
);

_Box.displayName = 'vvdBox';

export const Box = createPolymorphicComponent<
  'div',
  React.ComponentProps<typeof _Box>
>(_Box);
