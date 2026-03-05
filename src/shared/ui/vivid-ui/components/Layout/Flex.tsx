import { CSSProperties, ElementType, PropsWithChildren } from 'react';

import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '../../shared';
import { StyledFlex } from './styles';

export interface FlexProps extends PropsWithChildren {
  align?: CSSProperties['alignItems'];
  direction?: CSSProperties['flexDirection'];
  gap?: CSSProperties['gap'];
  grow?: CSSProperties['flexGrow'];
  height?: CSSProperties['height'];
  justify?: CSSProperties['justifyContent'];
  maxHeight?: CSSProperties['maxHeight'];
  maxWidth?: CSSProperties['maxWidth'];
  minHeight?: CSSProperties['minHeight'];
  minWidth?: CSSProperties['minWidth'];
  position?: CSSProperties['position'];
  shrink?: CSSProperties['flexShrink'];
  width?: CSSProperties['width'];
  wrap?: CSSProperties['flexWrap'];
}

export type PolymorphicFlexProps<C extends ElementType = 'div'> =
  PolymorphicComponentProps<C, FlexProps>;

const _Flex = ({
  align,
  direction,
  gap,
  grow,
  height,
  justify,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  position,
  shrink,
  width,
  wrap,
  ...rest
}: PolymorphicFlexProps) => (
  <StyledFlex
    $align={align}
    $direction={direction}
    $gap={gap}
    $grow={grow}
    $height={height}
    $justify={justify}
    $maxHeight={maxHeight}
    $maxWidth={maxWidth}
    $minHeight={minHeight}
    $minWidth={minWidth}
    $position={position}
    $shrink={shrink}
    $width={width}
    $wrap={wrap}
    {...rest}
  />
);

export const Flex = createPolymorphicComponent<'div', FlexProps>(_Flex);
