'use client';
import { ElementType, ReactNode } from 'react';

import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
  Size,
} from '@/shared/ui/vivid-ui/shared';

import {
  StyledListItem,
  StyledListItemContent,
  StyledListItemHint,
  StyledListItemIcon,
  StyledListItemLabel,
  StyledListItemTitle,
} from './styles';

export type ListItemProps = {
  contentGap?: string;
  disabled?: boolean;
  hint?: ReactNode;
  label?: ReactNode;
  labelPosition?: 'down' | 'up';
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  size?: Size;
  title?: ReactNode;
};

export type PolymorphicListItemProps<C extends ElementType = 'li'> =
  PolymorphicComponentProps<C, ListItemProps>;

const _ListItem = ({
  component = 'li',
  contentGap,
  disabled,
  hint,
  label,
  labelPosition = 'up',
  leftIcon,
  rightIcon,
  size = 'large',
  title,
  ...rest
}: PolymorphicListItemProps) => {
  return (
    <StyledListItem
      $disabled={disabled}
      $size={size}
      as={component}
      {...{ ...rest, disabled }}
    >
      {leftIcon && <StyledListItemIcon>{leftIcon}</StyledListItemIcon>}
      <StyledListItemContent $contentGap={contentGap} $size={size}>
        {title && (
          <StyledListItemTitle $labelPosition={labelPosition} $size={size}>
            {title}
          </StyledListItemTitle>
        )}
        {label && (
          <StyledListItemLabel $labelPosition={labelPosition} $size={size}>
            {label}
          </StyledListItemLabel>
        )}
        {hint && (
          <StyledListItemHint $labelPosition={labelPosition} $size={size}>
            {hint}
          </StyledListItemHint>
        )}
      </StyledListItemContent>
      {rightIcon && <StyledListItemIcon>{rightIcon}</StyledListItemIcon>}
    </StyledListItem>
  );
};

export const ListItem = createPolymorphicComponent<'li', ListItemProps>(
  _ListItem,
);
