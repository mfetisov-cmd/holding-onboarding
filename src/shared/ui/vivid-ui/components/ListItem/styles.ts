import styled, { css } from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import { PrefixType } from '@/shared/ui/vivid-ui/shared';

import { ListItemProps } from './ListItem';

type StyledListItemProps = PrefixType<
  Pick<ListItemProps, 'contentGap' | 'disabled' | 'labelPosition' | 'size'>,
  '$'
>;

const getListItemSizeStyles = ({ $size }: StyledListItemProps) => {
  switch ($size) {
    case 'large':
      return css`
        min-height: 64rem;
      `;
    case 'medium':
      return css`
        min-height: 56rem;
      `;
    case 'small':
    default:
      return css`
        min-height: 48rem;
      `;
  }
};

export const StyledListItem = styled(Box)<StyledListItemProps>`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.token.spacingS};
  width: 100%;
  list-style: none;
  text-align: left;
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'all')};
  filter: ${({ $disabled }) =>
    $disabled ? 'grayscale(1) opacity(0.6)' : 'none'};

  ${getListItemSizeStyles}
`;

export const StyledListItemContent = styled.span<StyledListItemProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$contentGap ?? props.theme.token.spacing2XS};
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

const getTitleSizeStyle = ({ $size }: StyledListItemProps) => {
  switch ($size) {
    case 'large':
      return css`
        font: ${(props) => props.theme.token.font.paragraphL};
      `;
    case 'medium':
      return css`
        font: ${(props) => props.theme.token.font.paragraphM};
      `;
    case 'small':
    default:
      return css`
        font: ${(props) => props.theme.token.font.paragraphS};
      `;
  }
};

export const StyledListItemTitle = styled.span<StyledListItemProps>`
  width: 100%;
  ${getTitleSizeStyle}
  order: ${(props) => (props.$labelPosition === 'up' ? 1 : 0)};
`;

export const StyledListItemLabel = styled.span<StyledListItemProps>`
  width: 100%;
  color: ${(props) => props.theme.token.color.c2};
  font: ${(props) =>
    props.$size === 'large'
      ? props.theme.token.font.captionM
      : props.theme.token.font.captionS};
  order: ${(props) => (props.$labelPosition === 'up' ? 0 : 1)};
`;

export const StyledListItemHint = styled.span<StyledListItemProps>`
  width: 100%;
  color: ${(props) => props.theme.token.color.c2};
  font: ${(props) =>
    props.$size === 'large'
      ? props.theme.token.font.captionM
      : props.theme.token.font.captionS};
  order: 2;
`;

export const StyledListItemIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  flex-shrink: 0;
`;
