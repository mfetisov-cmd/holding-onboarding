import styled, { css } from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import { PrefixType } from '@/shared/ui/vivid-ui/shared';

import { ButtonProps, ButtonVariant } from './index';

type StyledButtonProps = PrefixType<ButtonProps, '$'>;

const getSizeStyles = ({ $size }: StyledButtonProps) => {
  switch ($size) {
    case 'large':
      return css`
        min-height: 64rem;
        padding: ${({ theme }) => `0 ${theme.token.spacingXL}`};
        font: ${(props) => props.theme.token.font.labelL};
        border-radius: ${(props) => props.theme.token.borderRadiusM};
      `;
    case 'medium':
      return css`
        min-height: 56rem;
        padding: ${({ theme }) => `0 ${theme.token.spacingL}`};
        font: ${(props) => props.theme.token.font.labelM};
        border-radius: ${(props) => props.theme.token.borderRadiusM};
      `;
    case 'small':
      return css`
        min-height: 44rem;
        padding: ${({ theme }) => `0 ${theme.token.spacingM}`};
        font: ${(props) => props.theme.token.font.labelS};
        border-radius: ${(props) => props.theme.token.borderRadiusS};
      `;
    case 'xs':
    default:
      return css`
        min-height: 32rem;
        padding: ${({ theme }) => `0 ${theme.token.spacingS}`};
        font: ${(props) => props.theme.token.font.captionS};
        border-radius: ${(props) => props.theme.token.borderRadiusS};
      `;
  }
};

const getColorStyles = ({
  backgroundColor,
  color,
  variant,
}: {
  backgroundColor: string;
  color: string;
  variant: ButtonVariant;
}) => {
  return css`
    color: ${color};
    background-color: ${backgroundColor};
    border-color: ${backgroundColor};

    &:hover {
      background: ${variant === 'primary'
        ? `linear-gradient(0deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.08) 100%), ${backgroundColor}`
        : `linear-gradient(0deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.08) 100%), ${backgroundColor}`};
    }

    &:focus-visible {
      background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.08) 0%,
          rgba(0, 0, 0, 0.08) 100%
        ),
        ${backgroundColor};
    }

    &:active {
      background: ${backgroundColor};
    }
  `;
};

const getTypeStyles = ({
  $backgroundColor,
  $borderColor,
  $color,
  $variant,
}: StyledButtonProps) => {
  switch ($variant) {
    case 'primary':
      return css`
        font-weight: 500;

        &:focus-visible {
          outline-offset: -2px;
          outline: 2px solid ${$backgroundColor || '#4800be'};
        }

        &:active {
          outline: none;
        }

        &[disabled],
        &:disabled {
          pointer-events: none;
          background-color: ${(props) => props.theme.token.color.c5};
          border-color: ${(props) => props.theme.token.color.c5};
          color: ${(props) => props.theme.token.color.c3};
        }

        ${(props) =>
          getColorStyles({
            backgroundColor: $backgroundColor || props.theme.token.color.c6,
            color: $color || props.theme.token.color.c11,
            variant: $variant,
          })}
      `;
    case 'secondary':
      return css`
        &:focus-visible {
          outline: none;
          border: 1px solid ${(props) => props.theme.token.color.c1};
        }

        &[disabled],
        &:disabled {
          pointer-events: none;
          background-color: ${(props) => props.theme.token.color.c5};
          border-color: ${(props) => props.theme.token.color.c5};
          color: ${(props) => props.theme.token.color.c3};
        }

        ${(props) =>
          getColorStyles({
            backgroundColor: $backgroundColor || props.theme.token.color.c5,
            color: $color || props.theme.token.color.c1,
            variant: $variant,
          })}
      `;
    case 'ghost':
    default:
      return css`
        color: ${(props) => $color || props.theme.token.color.c6};
        background-color: transparent;
        border-color: ${(props) =>
          $borderColor || $color || props.theme.token.color.c6};

        &:hover {
          background: ${(props) =>
            $backgroundColor || props.theme.token.color.c6t};
        }

        &:active {
          background: linear-gradient(
              0deg,
              rgba(125, 51, 246, 0.12),
              rgba(125, 51, 246, 0.12)
            ),
            ${(props) => props.theme.token.color.c6t};
        }

        &:focus-visible {
          color: ${(props) => props.theme.token.color.c1};
          outline: none;
          border: 1px solid
            ${(props) => $borderColor || props.theme.token.color.c1};
        }

        &[disabled],
        &:disabled {
          pointer-events: none;
          border-color: ${(props) => props.theme.token.color.c3};
          color: ${(props) => props.theme.token.color.c3};
        }
      `;
  }
};

export const StyledButton = styled(Box)<StyledButtonProps>`
  box-sizing: border-box;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-style: solid;
  border-width: 1px;
  user-select: none;
  text-align: center;
  width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
  min-width: ${(props) => props.$minWidth || '160rem'};
  pointer-events: ${(props) => (props.$loading ? 'none' : 'auto')};

  &[disabled],
  &:disabled {
    pointer-events: none;
  }

  ${getSizeStyles}
  ${getTypeStyles}
  ${(props) =>
    props.$rounded
      ? css`
          border-radius: ${props.theme.token.borderRadiusRounded};
        `
      : ''}
`;

export const StyledButtonContent = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
