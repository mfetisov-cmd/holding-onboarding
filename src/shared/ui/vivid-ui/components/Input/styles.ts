import styled, { css } from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import { PrefixType } from '@/shared/ui/vivid-ui/shared';

import { InputProps } from './Input';

type StyledInputProps = PrefixType<
  Pick<InputProps, 'backgroundColor' | 'error' | 'label' | 'size'>,
  '$'
>;

export const getStyledInputSizeStyle = ({ $size }: StyledInputProps) => {
  if ($size === 'large') {
    return css`
      font: ${(props) => props.theme.token.font.labelM};
    `;
  }
  return css`
    font: ${(props) => props.theme.token.font.labelS};
  `;
};

export const StyledInput = styled(Box)<StyledInputProps>`
  display: block;
  text-align: left;
  width: 100%;
  border: none;
  outline: none;
  background: inherit;
  color: inherit;
  caret-color: ${(props) => props.theme.token.color.c6};
  padding: 0;

  ${getStyledInputSizeStyle}

  ${(props) =>
    props.theme.name === 'dark'
      ? css`
          &::-webkit-calendar-picker-indicator {
            filter: invert(1);
          }
        `
      : undefined}

  &:disabled, &::placeholder {
    color: ${(props) => props.theme.token.color.c2};
  }

  &:disabled::placeholder,
  &:focus::placeholder {
    color: ${(props) => props.theme.token.color.c3};
  }

  // CSS animations for useAutofillDetection hook
  @keyframes onAutoFillStart {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes onAutoFillCancel {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  // autofill styles fix
  &:-webkit-autofill {
    animation: onAutoFillStart 0.001s;
    -webkit-box-shadow: 0 0 0 50px
      ${({ $backgroundColor, theme }) =>
        $backgroundColor || theme.token.color.c5}
      inset;
    -webkit-text-fill-color: ${(props) => props.theme.token.color.c1};
  }

  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 50px ${(props) => props.theme.token.color.c0}
      inset;
    -webkit-text-fill-color: ${(props) => props.theme.token.color.c1};
  }

  &:not(:-webkit-autofill) {
    animation: onAutoFillCancel 0.001s;
  }

  &:read-only {
    caret-color: transparent;
    cursor: default;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
