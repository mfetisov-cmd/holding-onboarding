import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{
  $disabled?: boolean;
  $error?: boolean;
  $success?: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  height: ${(props) => props.theme.token.sizeUnits(32)};
  padding: 0 ${(props) => props.theme.token.sizeUnits(12)};
  border-radius: ${(props) => props.theme.token.sizeUnits(6)};
  background: ${(props) => props.theme.token.color.c0};
  border: 1px solid ${(props) => props.theme.token.color.c4};
  transition: border-color 0.2s;

  ${(props) =>
    props.$error &&
    css`
      border-color: ${props.theme.token.color.c8};
    `}
  ${(props) =>
    props.$success &&
    css`
      border-color: ${props.theme.token.color.c9};
    `}
  ${(props) =>
    props.$disabled &&
    css`
      opacity: 0.6;
      pointer-events: none;
    `}
`;

export const IconContainer = styled.div`
  margin-right: ${(props) => props.theme.token.sizeUnits(9)};
  display: flex;
  align-items: center;
`;

export const DotsContainer = styled.div`
  display: flex;
  flex: 1;
  gap: ${(props) => props.theme.token.sizeUnits(6)};
`;

export const Dot = styled.div<{
  $color?: string;
}>`
  width: ${(props) => props.theme.token.sizeUnits(8)};
  height: ${(props) => props.theme.token.sizeUnits(8)};
  border-radius: 50%;
  background: ${(props) => props.$color ?? props.theme.token.color.c4};
  transition: background 0.2s;
`;

export const Cursor = styled.div<{ $active: boolean }>`
  width: ${(props) => props.theme.token.sizeUnits(1)};
  height: ${(props) => props.theme.token.sizeUnits(16)};
  background: transparent;
  border-radius: ${(props) => props.theme.token.sizeUnits(0.5)};
  margin: 0 ${(props) => props.theme.token.sizeUnits(1)};

  ${(props) =>
    props.$active &&
    css`
      background: ${props.theme.token.color.c6};
      animation: blink 1s steps(1) infinite;
      @keyframes blink {
        0%,
        50% {
          opacity: 1;
        }
        51%,
        100% {
          opacity: 0;
        }
      }
    `}
`;

export const HiddenInputsContainer = styled.div`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;

export const HiddenInput = styled.input`
  border: 0;
  height: 0;
  margin: 0;
  padding: 0;
  width: 0;
`;

export const PasswordInputField = styled.input<{
  $error?: boolean;
  $success?: boolean;
}>`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  font: ${(props) => props.theme.token.font.h7};
  caret-color: ${(props) => props.theme.token.color.c6};
  ${(props) =>
    props.$error &&
    css`
      color: ${props.theme.token.color.c8};
    `}
  ${(props) =>
    props.$success &&
    css`
      color: ${props.theme.token.color.c9};
    `}

  &::placeholder {
    color: ${(props) => props.theme.token.color.c3};
  }
`;
