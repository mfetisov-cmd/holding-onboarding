'use client';
import React, { CSSProperties, ElementType, useMemo } from 'react';

import styled from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import { Token } from '@/shared/ui/vivid-ui/components/DefaultThemeProvider';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
  PrefixType,
} from '@/shared/ui/vivid-ui/shared';

export type TypographyProps = {
  align?: CSSProperties['textAlign'];
  color?: string;
  cursor?: CSSProperties['cursor'];
  variant?: keyof Token['font'];
  whiteSpace?: CSSProperties['whiteSpace'];
  wordBreak?: CSSProperties['wordBreak'];
};

type StyledTypographyProps = PrefixType<TypographyProps, '$'>;

const ElementTypeDictionary: Record<keyof Token['font'], React.ElementType> = {
  bodyL: 'p',
  bodyLAcc: 'p',
  bodyM: 'p',
  bodyMAcc: 'p',
  bodyS: 'p',
  bodySAcc: 'p',
  bodyXS: 'p',
  captionCaps: 'span',
  captionM: 'span',
  captionMAcc: 'span',
  captionS: 'span',
  captionSAcc: 'span',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  h7: 'h6',
  labelL: 'label',
  labelLAcc: 'label',
  labelM: 'label',
  labelMAcc: 'label',
  labelS: 'label',
  labelSAcc: 'label',
  paragraphL: 'p',
  paragraphLAcc: 'p',
  paragraphM: 'p',
  paragraphMAcc: 'p',
  paragraphS: 'p',
  paragraphSAcc: 'p',
  paragraphXS: 'p',
  paragraphXSAcc: 'p',
};

const LetterSpacingDictionary: Partial<Record<keyof Token['font'], string>> = {
  captionCaps: '0.03em',
  captionM: '-0.01em',
  captionMAcc: '-0.01em',
  captionS: '-0.01em',
  captionSAcc: '0.02em',
  h1: '-0.01em',
  h2: '-0.01em',
  h3: '-0.01em',
};

export const StyledTypography = styled(Box)<StyledTypographyProps>`
  margin: 0;
  padding: 0;
  text-align: ${(props) => props.$align ?? 'inherit'};
  color: ${(props) => props.$color || 'inherit'};
  font-size: 16rem;
  font: ${(props) =>
    props.$variant ? props.theme.token.font[props.$variant] : 'inherit'};
  text-transform: ${(props) =>
    props.$variant === 'captionCaps' ? 'uppercase' : 'none'};
  letter-spacing: ${(props) =>
    props.$variant
      ? LetterSpacingDictionary[props.$variant] || 'normal'
      : 'normal'};
  cursor: ${(props) => props.$cursor ?? 'inherit'};
  white-space: ${(props) => props.$whiteSpace};
  word-break: ${(props) => props.$wordBreak};
`;

export type PolymorphicTypographyProps<C extends ElementType = 'span'> =
  PolymorphicComponentProps<C, TypographyProps>;

const PrivateTypography = ({
  align,
  children,
  color,
  // pass component if you don't want it to be auto-selected with getComponent(variant) above
  component,
  cursor,
  variant,
  whiteSpace,
  wordBreak,
  ...rest
}: PolymorphicTypographyProps) => {
  const as = useMemo(() => {
    if (component) {
      return component;
    }
    return variant ? ElementTypeDictionary[variant] : 'span';
  }, [component, variant]);

  return (
    <StyledTypography
      $align={align}
      $color={color}
      $cursor={cursor}
      $variant={variant}
      $whiteSpace={whiteSpace}
      $wordBreak={wordBreak}
      as={as}
      {...rest}
    >
      {children}
    </StyledTypography>
  );
};

export const Typography = createPolymorphicComponent<'span', TypographyProps>(
  PrivateTypography,
);
