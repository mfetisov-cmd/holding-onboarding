import styled, { css } from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import { PrefixType } from '@/shared/ui/vivid-ui/shared';

import { FilterChipsProps } from './FilterChips';

type StyledChipsProps = PrefixType<FilterChipsProps, '$'>;

const getSizeStyles = ({ $size }: StyledChipsProps) => {
  switch ($size) {
    case 'large':
      return css`
        padding: ${({ theme }) =>
          `${theme.token.spacingS} ${theme.token.spacingM}`};
        font: ${(props) => props.theme.token.font.labelL};
      `;
    case 'medium':
      return css`
        padding: ${({ theme }) =>
          `${theme.token.spacingXS} ${theme.token.spacingM}`};
        font: ${(props) => props.theme.token.font.labelM};
      `;
    case 'xs':
      return css`
        padding: ${({ theme }) =>
          `${theme.token.spacing2XS} ${theme.token.spacingXS}`};
        font: ${(props) => props.theme.token.font.labelS};
      `;
    case 'small':
    default:
      return css`
        padding: ${({ theme }) =>
          `${theme.token.spacingXS} ${theme.token.spacingS}`};
        font: ${(props) => props.theme.token.font.captionS};
      `;
  }
};

const getSelectedColors = () => {
  return css`
    color: ${(props) => props.theme.token.color.c1};
    background-color: ${(props) => props.theme.token.color.c0};
    border-color: ${(props) => props.theme.token.color.c5};

    &:hover {
        background-color: linear-gradient(0deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.02) 100%), ${(
          props,
        ) => props.theme.token.color.c6l}};
      border-color: ${(props) => props.theme.token.color.c5};
    }

    &:focus,
    &:active {
      border-color: ${(props) => props.theme.token.color.c6};
    }

    &:disabled {
      cursor: not-allowed;
      pointer-events: none;
      color: ${(props) => props.theme.token.color.c3};
    }
  `;
};

const getDefaultColors = () => {
  return css`
    color: ${(props) => props.theme.token.color.c1};
    background-color: ${(props) => props.theme.token.color.c5};
    border-color: ${(props) => props.theme.token.color.c5};

    &:hover {
        background-color: linear-gradient(0deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.08) 100%), ${(
          props,
        ) => props.theme.token.color.c5}};
      border-color: ${(props) => props.theme.token.color.c5};
    }

    &:focus,
    &:active {
      border-color: ${(props) => props.theme.token.color.c6};
    }

    &:disabled {
      cursor: not-allowed;
      pointer-events: none;
      color: ${(props) => props.theme.token.color.c3};
    }
  `;
};

export const StyledChips = styled(Box)<StyledChipsProps>`
  margin: 0;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  border-style: solid;
  border-width: 1px;
  user-select: none;
  pointer-events: ${(props) => (props.$loading ? 'none' : 'auto')};
  outline: none;
  border-radius: ${(props) => props.theme.token.sizeUnits(50)};

  ${getSizeStyles}
  ${(props) => (props.$selected ? getSelectedColors() : getDefaultColors())};
`;
