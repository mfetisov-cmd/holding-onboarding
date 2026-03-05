import styled, { css } from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import { PrefixType } from '@/shared/ui/vivid-ui/shared';

import { SwitchProps } from './Switch';

type StyledSwitchProps = PrefixType<Pick<SwitchProps, 'size'>, '$'> & {
  $checked?: boolean;
  $disabled?: boolean;
  $focused?: boolean;
};

const getStyledSwitchSizeStyle = ({ $size }: StyledSwitchProps) => {
  switch ($size) {
    case 'large':
      return css`
        width: 52rem;
        height: 32rem;
      `;
    case 'medium':
      return css`
        width: 40rem;
        height: 26rem;
      `;
    case 'small':
    default:
      return css`
        width: 32rem;
        height: 14rem;
      `;
  }
};

const getStyledSwitchColorStyle = ({
  $checked,
  $disabled,
  $focused,
}: StyledSwitchProps) => {
  if ($disabled) {
    return css`
      background: ${(props) =>
        $checked ? props.theme.token.color.c6t : props.theme.token.color.c4};
      border-color: ${(props) =>
        $checked ? props.theme.token.color.c6t : props.theme.token.color.c4};
    `;
  }
  if ($checked) {
    return css`
      background: ${(props) => props.theme.token.color.c6};
      border-color: ${(props) => props.theme.token.color.c6};
    `;
  }
  if ($focused) {
    return css`
      background: ${(props) => props.theme.token.color.c3};
      border-color: ${(props) => props.theme.token.color.c6};
    `;
  }

  return css`
    background: ${(props) => props.theme.token.color.c3};
    border-color: ${(props) => props.theme.token.color.c3};
  `;
};

export const StyledSwitch = styled(Box)<StyledSwitchProps>`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-width: 1px;
  border-style: solid;
  border-radius: 32rem;
  cursor: ${(props) => (props.$disabled ? 'default' : 'pointer')};
  pointer-events: ${(props) => (props.$disabled ? 'none' : 'auto')};

  ${getStyledSwitchSizeStyle}
  ${getStyledSwitchColorStyle}
`;

export const StyledSwitchNativeInput = styled(Box)<StyledSwitchProps>`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }
`;

const getStyledCheckCircleSizeStyle = ({
  $checked,
  $size,
}: StyledSwitchProps) => {
  switch ($size) {
    case 'large':
      return css`
        width: 28rem;
        height: 28rem;
        transform: ${$checked
          ? 'translate(-1rem, -50%)'
          : 'translate(-21rem, -50%)'};
      `;
    case 'medium':
      return css`
        width: 22rem;
        height: 22rem;
        transform: ${$checked
          ? 'translate(-1rem, -50%)'
          : 'translate(-15rem, -50%)'};
      `;
    case 'small':
    default:
      return css`
        width: 20rem;
        height: 20rem;
        box-shadow: 0 1px 2px rgba(33, 34, 36, 0.17);
        transform: ${$checked
          ? 'translate(1rem, -50%)'
          : 'translate(-12rem, -50%)'};
      `;
  }
};

export const StyledCheckCircle = styled(Box)<StyledSwitchProps>`
  display: block;
  position: absolute;
  border-radius: 28rem;
  top: 50%;
  right: 0;
  transition: transform 0.3s linear;
  background-color: ${(props) => props.theme.token.color.c12};
  border: ${(props) =>
    props.theme.name === 'dark'
      ? `1rem solid ${props.theme.token.color.c17}`
      : undefined};

  ${getStyledCheckCircleSizeStyle}
`;
