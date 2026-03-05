import styled, { css } from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import { PrefixType } from '@/shared/ui/vivid-ui/shared';

import { OTPFormProps } from './types';

type StyledDigitInputProps = PrefixType<
  Pick<OTPFormProps, 'error' | 'size'> & { stretch?: boolean },
  '$'
>;

export const StyledForm = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: ${(props) => props.theme.token.spacingS};
`;

export const StyledLabel = styled(Box)`
  position: absolute;
  width: 1rem;
  height: 1rem;
  padding: 0;
  margin-left: -1rem;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: none;
`;

export const StyledHint = styled(Box)<{
  $error: boolean;
  children: React.ReactNode;
}>`
  color: ${({ theme }) => theme.token.color.c8};
  white-space: pre-wrap;
`;

const getDigitInputSizeStyles = ({
  $size,
  $stretch,
}: StyledDigitInputProps) => {
  if ($size === 'extra-small') {
    return css`
      width: ${() => ($stretch ? '100%' : '64rem')};
      height: 64rem;
      font: normal 600 32rem/32rem 'Inter', 'Roboto', sans-serif;
    `;
  }
  if ($size === 'medium') {
    return css`
      width: ${() => ($stretch ? '100%' : '60rem')};
      height: 64rem;
      font: normal 600 32rem/32rem 'Inter', 'Roboto', sans-serif;
      color: ${({ theme }) => theme.token.color.c8};

      @media (min-width: ${(props) => props.theme.token.breakPoints.tablet}) {
        height: 88rem;
        font-size: 40rem;
        line-height: 40rem;
        border-radius: ${(props) => props.theme.token.borderRadiusS};
        width: ${() => ($stretch ? '100%' : '86rem')};
      }
    `;
  }
  return css`
    width: ${() => ($stretch ? '100%' : '47rem')};
    height: 76rem;
    font: normal 600 30rem/36rem 'Inter', 'Roboto', sans-serif;
    color: ${({ theme }) => theme.token.color.c8};

    @media (min-width: ${(props) => props.theme.token.breakPoints.tablet}) {
      width: ${() => ($stretch ? '100%' : '60rem')};
      border-radius: ${(props) => props.theme.token.borderRadiusS};
    }
  `;
};

export const StyledDigitInput = styled(Box)<StyledDigitInputProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${({ theme }) => `${theme.token.sizeUnits(10)} 0`};
  ${(props) => getDigitInputSizeStyles(props)}

  border-radius: ${(props) => props.theme.token.borderRadiusS};
  border: 1px solid
    ${(props) => (props.$error ? props.theme.token.color.c8 : 'transparent')};
  outline: none;
  color: ${(props) =>
    props.$error ? props.theme.token.color.c8 : props.theme.token.color.c1};
  caret-color: ${(props) => props.theme.token.color.c6};
  background-color: ${(props) => props.theme.token.color.c5};

  &:focus {
    outline: 1px solid ${(props) => props.theme.token.color.c3};
    background-color: ${(props) => props.theme.token.color.c0};
  }

  &:focus::placeholder {
    color: transparent;
  }
`;
