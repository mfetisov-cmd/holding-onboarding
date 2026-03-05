import styled, { css } from 'styled-components';

export const InputContainer = styled.div<{ $cursorPointer?: boolean }>`
  width: 100%;

  ${({ $cursorPointer }) =>
    $cursorPointer &&
    css`
      cursor: pointer;

      * {
        cursor: pointer !important;
      }
    `}
`;
