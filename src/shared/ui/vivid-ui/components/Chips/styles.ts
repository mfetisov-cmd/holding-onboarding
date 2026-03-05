import styled, { css } from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import { PrefixType } from '@/shared/ui/vivid-ui/shared';

import { ChipsProps } from './Chips';

type StyledChipsProps = PrefixType<ChipsProps, '$'>;

const getSizeStyles = ({ $size }: StyledChipsProps) => {
  switch ($size) {
    case 'large':
      return css`
        padding: ${({ theme }) =>
          `${theme.token.spacingS} ${theme.token.spacingM}`};
        font: ${(props) => props.theme.token.font.paragraphL};
        border-radius: ${(props) => props.theme.token.borderRadiusM};
      `;
    case 'medium':
      return css`
        padding: ${({ theme }) =>
          `${theme.token.spacingXS} ${theme.token.spacingM}`};
        font: ${(props) => props.theme.token.font.paragraphM};
        border-radius: ${(props) => props.theme.token.borderRadiusS};
      `;
    case 'xs':
      return css`
        padding: ${({ theme }) =>
          `${theme.token.spacing2XS} ${theme.token.spacingXS}`};
        font: ${(props) => props.theme.token.font.paragraphXS};
        border-radius: ${(props) => props.theme.token.borderRadiusS};
      `;
    case 'small':
    default:
      return css`
        padding: ${({ theme }) =>
          `${theme.token.spacingXS} ${theme.token.spacingS}`};
        font: ${(props) => props.theme.token.font.paragraphS};
        border-radius: ${(props) => props.theme.token.borderRadiusXS};
      `;
  }
};

const getColors = ({ $selected }: StyledChipsProps) => {
  return css`
    color: ${(props) =>
      $selected ? props.theme.token.color.c11 : props.theme.token.color.c1};
    background-color: ${(props) =>
      $selected ? props.theme.token.color.c18 : 'transparent'};
    border-color: ${(props) =>
      $selected ? props.theme.token.color.c18 : props.theme.token.color.c4};

    &:hover {
      color: ${(props) =>
        $selected ? props.theme.token.color.c11 : props.theme.token.color.c1};

      background: ${(props) =>
        $selected
          ? `linear-gradient(0deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.04)), ${props.theme.token.color.c18}`
          : `linear-gradient(0deg, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.04)), ${props.theme.token.color.c5}`};

      border-color: ${(props) =>
        $selected ? props.theme.token.color.c18 : props.theme.token.color.c5};
    }

    &:focus {
      color: ${(props) => props.theme.token.color.c1};
      background-color: ${(props) => props.theme.token.color.c5};
      border-color: ${(props) => props.theme.token.color.c6};
    }

    &:active {
      border-color: ${(props) =>
        $selected ? props.theme.token.color.c18 : props.theme.token.color.c5};
    }

    &:disabled {
      pointer-events: none;
      background-color: ${(props) => props.theme.token.color.c5};
      border-color: ${(props) => props.theme.token.color.c5};
      color: ${(props) => props.theme.token.color.c3};
    }
  `;
};

export const StyledChips = styled(Box)<StyledChipsProps>`
  margin: 0;
  display: inline-block;
  cursor: pointer;
  border-style: solid;
  border-width: 1px;
  user-select: none;
  pointer-events: ${(props) => (props.$loading ? 'none' : 'auto')};
  outline: none;

  ${getSizeStyles}
  ${getColors}
`;
