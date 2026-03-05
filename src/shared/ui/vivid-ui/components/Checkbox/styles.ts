import styled, { css } from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import { PrefixType } from '@/shared/ui/vivid-ui/shared';

import { CommonCheckboxProps } from './Checkbox';

export type StyledCheckboxProps = PrefixType<
  Pick<
    CommonCheckboxProps,
    | 'borderRadius'
    | 'checked'
    | 'disabled'
    | 'indeterminate'
    | 'size'
    | 'variant'
  >,
  '$'
> & {
  $focused?: boolean;
};

const getBorderRadiusForSize = ({
  $borderRadius,
  $size,
  $variant,
}: StyledCheckboxProps) => {
  if ($borderRadius) {
    return css`
      border-radius: ${$borderRadius}rem;
    `;
  }
  if ($variant === 'circle') {
    return css`
      border-radius: 50%;
    `;
  }

  switch ($size) {
    case 'large':
    case 'medium':
      return css`
        border-radius: ${(props) => props.theme.token.borderRadiusS};
      `;
    case 'small': {
      return css`
        border-radius: ${(props) => props.theme.token.borderRadiusXS};
      `;
    }
    case 'xs': {
      return css`
        border-radius: ${(props) => props.theme.token.borderRadius2XS};
      `;
    }
  }
};

const getStyledCheckboxSizeStyle = ({ $size }: StyledCheckboxProps) => {
  let size = 20;

  switch ($size) {
    case 'large':
    case 'medium':
      size = 32;
      break;
    case 'small':
      size = 24;
      break;
    case 'xs':
    default:
      size = 20;
      break;
  }

  return css`
    width: ${size}rem;
    height: ${size}rem;
  `;
};

export const StyledCheckIcon = styled.svg`
  fill: ${(props) => props.theme.token.color.c0};
  pointer-events: none;
  opacity: 0;
`;

const getStyledCheckboxColorStyle = ({
  $checked,
  $disabled,
  $focused,
  $indeterminate,
}: StyledCheckboxProps) => {
  if ($disabled) {
    return css`
      background: ${(props) =>
        $checked ? props.theme.token.color.c6t : props.theme.token.color.c4};
      border-color: ${(props) =>
        $checked ? props.theme.token.color.c6t : props.theme.token.color.c4};
    `;
  }
  if ($checked || $indeterminate) {
    return css`
      background: ${(props) => props.theme.token.color.c6};
      border-color: ${(props) => props.theme.token.color.c6};
    `;
  }
  if ($focused) {
    return css`
      background: ${(props) => props.theme.token.color.c0};
      border-color: ${(props) => props.theme.token.color.c6};
    `;
  }

  return css`
    background: ${(props) => props.theme.token.color.c0};
    border-color: ${(props) => props.theme.token.color.c3};
  `;
};

export const StyledCheckbox = styled(Box)<StyledCheckboxProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-width: 1px;
  border-style: solid;
  cursor: ${(props) => (props.$disabled ? 'default' : 'pointer')};

  ${StyledCheckIcon} {
    opacity: ${(props) => (props.$checked || props.$indeterminate ? 1 : 0)};
  }

  &:has(input:invalid) {
    border-color: ${({ theme }) => theme.token.color.c8};
  }

  ${getStyledCheckboxSizeStyle}
  ${getBorderRadiusForSize}
  ${getStyledCheckboxColorStyle}
`;

export const StyledCheckboxNativeInput = styled(Box)`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  opacity: 0;
  border: none;
  padding: 0;
  margin: 0;
  // fallback for Safari
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:disabled {
    cursor: auto;
  }
`;
