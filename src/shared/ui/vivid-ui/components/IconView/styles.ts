import styled from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import { IconViewProps } from '@/shared/ui/vivid-ui/components/IconView/IconView';
import { PrefixType } from '@/shared/ui/vivid-ui/shared';

type StyledProps = PrefixType<
  Pick<
    IconViewProps,
    | 'background'
    | 'backgroundColor'
    | 'backgroundUrl'
    | 'borderRadius'
    | 'color'
    | 'disabled'
    | 'size'
    | 'variant'
  >,
  '$'
>;

export const StyledIconView = styled(Box)<StyledProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  flex-grow: 0;
  width: ${({ $size }) => ($size ? `${$size}rem` : '40rem')};
  height: ${({ $size }) => ($size ? `${$size}rem` : '40rem')};
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  font: ${(props) => props.theme.token.font.h6};
  font-size: 16rem;
  border-radius: ${(props) =>
    props.$borderRadius ??
    (props.$variant === 'circle' ? '50%' : props.theme.token.borderRadiusS)};
  color: ${(props) => props.$color || 'inherit'};
  background-color: ${(props) =>
    props.$disabled
      ? 'transparent'
      : props.$backgroundColor || props.$background || 'none'};
  border: ${(props) =>
    props.$disabled ? `1px solid ${props.theme.token.color.c4}` : 'none'};
  background-image: ${(props) =>
    props.$backgroundUrl ? `url(${props.$backgroundUrl})` : 'none'};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  cursor: ${(props) => (props.as === 'button' ? 'pointer' : 'inherit')};
`;

const SmallIcon = styled.div<{
  $size?: StyledProps['$size'];
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  flex-grow: 0;
  width: ${({ $size }) => ($size && $size > 40 ? '30rem' : '16rem')};
  height: ${({ $size }) => ($size && $size > 40 ? '30rem' : '16rem')};
  border-radius: 50%;
  overflow: hidden;
  background-color: ${(props) => props.theme.token.color.c0};
`;

export const StyledSupIcon = styled(SmallIcon)<{
  $variant: StyledProps['$variant'];
}>`
  position: absolute;
  top: 0;
  right: 0;
  transform: ${(props) =>
    props.$variant === 'circle'
      ? `translate(30%, -30%)`
      : `translate(40%, -40%)`};
`;

export const StyledSubIcon = styled(SmallIcon)<{
  $variant: StyledProps['$variant'];
}>`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: ${(props) =>
    props.$variant === 'circle'
      ? `translate(20%, 20%)`
      : `translate(40%, 40%)`};
`;
