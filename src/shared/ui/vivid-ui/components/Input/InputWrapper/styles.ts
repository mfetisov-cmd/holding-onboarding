import styled, { css } from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import { PrefixType } from '@/shared/ui/vivid-ui/shared';

import { InputWrapperProps } from './InputWrapper';

export type StyledInputWrapperProps = PrefixType<InputWrapperProps, '$'>;

/*
Input Wrapper
 */
const getStyledInputWrapperSizeStyle = ({
  $borderRadius,
  $size,
  $variant,
}: StyledInputWrapperProps) => {
  // no need to set border-radius for 'standard' inputs
  if ($variant === 'standard') {
    return;
  }
  if ($borderRadius !== undefined) {
    return css`
      border-radius: ${$borderRadius};
    `;
  }
  switch ($size) {
    case 'large':
      return css`
        border-radius: ${(props) => props.theme.token.borderRadiusM};
      `;
    case 'medium':
      return css`
        border-radius: ${(props) => props.theme.token.borderRadiusS};
      `;
    case 'small':
    default:
      return css`
        border-radius: ${(props) => props.theme.token.borderRadiusXS};
      `;
  }
};

const getStyledInputWrapperBorderColorStyle = ({
  $borderColor,
  $disabled,
  $error,
  $focused,
  $variant,
}: StyledInputWrapperProps) => {
  if ($disabled) {
    return css`
      border-color: ${(props) => $borderColor || props.theme.token.color.c3w};
    `;
  }
  if ($error) {
    return css`
      border-color: ${(props) => props.theme.token.color.c8};
    `;
  }
  if ($focused && $variant === 'standard') {
    return css`
      border-color: ${(props) =>
        $borderColor === 'transparent'
          ? $borderColor
          : props.theme.token.color.c6};
    `;
  }
  return css`
    border-color: ${(props) =>
      $focused || $variant === 'standard' || props.theme.name === 'dark'
        ? $borderColor || props.theme.token.color.c4
        : 'transparent'};
  `;
};

export const StyledInputWrapper = styled(Box)<StyledInputWrapperProps>`
  text-align: left;
  border-style: ${(props) =>
    props.$variant === 'outlined' ? 'solid' : 'none'};
  border-bottom-style: solid;
  border-width: 1px;
  overflow: hidden;

  background-color: ${(props) =>
    props?.$backgroundColor
      ? props.$backgroundColor
      : props.$disabled || props.$focused || props.$variant === 'standard'
      ? props.theme.token.color.c0
      : props.theme.token.color.c5};

  ${getStyledInputWrapperSizeStyle}
  ${getStyledInputWrapperBorderColorStyle}
`;

export const StyledInputWrapperContainer = styled(Box)<{
  $fullWidth?: boolean;
}>`
  position: relative;
  width: ${(props) => (props.$fullWidth ? '100%' : undefined)};
`;

/*
Hint
 */
export const StyledInputWrapperHint = styled.div<StyledInputWrapperProps>`
  padding: ${(props) => props.theme.token.spacingXS} 0 0
    ${(props) => props.theme.token.spacingS};
  text-align: left;
  font: ${(props) => props.theme.token.font.paragraphS};
  color: ${(props) =>
    props.$error ? props.theme.token.color.c8 : props.theme.token.color.c2};
`;

const getLabelContainerHeight = ({ $size }: StyledInputWrapperProps) => {
  // corresponds with label line-height
  if ($size === 'large') {
    return `1.1em`;
  }
  return `0.9em`;
};

export const StyledInputWrapperLabelContainer = styled.div<StyledInputWrapperProps>`
  position: relative;
  height: ${getLabelContainerHeight};
`;

export const StyledInputWrapperLabel = styled.div<StyledInputWrapperProps>`
  color: ${(props) => (props.$error ? props.theme.token.color.c8 : 'inherit')};
  white-space: nowrap;
  min-height: ${getLabelContainerHeight};
`;

const LABEL_UP_CSS = css`
  transform: translateY(0) translateX(-10%) scale(0.8);
`;

export const StyledInputWrapperUpLabel = styled(StyledInputWrapperLabel)<
  StyledInputWrapperProps & { $up: boolean }
>`
  position: absolute;
  transition: transform 0.25s;
  font: ${(props) =>
    props.$size === 'large'
      ? props.theme.token.font.labelM
      : props.theme.token.font.labelS};

  ${(props) =>
    props.$up
      ? LABEL_UP_CSS
      : css`
          transform: translateY(
              ${props.$variant === 'outlined'
                ? 'calc(4rem + 0.5em)'
                : 'calc(6rem + 1em)'}
            )
            scale(1);
        `};
`;

export const StyledListItemContainer = styled.label<StyledInputWrapperProps>`
  cursor: text;
  display: block;
  padding: ${({ $variant, theme }) =>
    $variant === 'outlined' ? `0 ${theme.token.spacingS}` : '0'};

  &:has(input:focus) ${StyledInputWrapperUpLabel} {
    ${LABEL_UP_CSS}
  }
`;
