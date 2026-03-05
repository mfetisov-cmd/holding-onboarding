import React, { HTMLProps, useId } from 'react';

import { styled } from 'styled-components';

import {
  Checkbox,
  CheckboxProps,
} from '@/shared/ui/vivid-ui/components/Checkbox';
import {
  ListItem,
  ListItemProps,
  PolymorphicListItemProps,
} from '@/shared/ui/vivid-ui/components/ListItem';

export type CheckListItemProps = Omit<
  ListItemProps,
  'component' | 'leftIcon' | 'onClick' | 'size'
> & {
  checked?: boolean;
  error?: boolean;
  name?: HTMLProps<HTMLInputElement>['name'];
  noBorder?: boolean;
  onClick: () => void;
  type?: CheckboxProps['type'];
};

const StyledListItem = styled(ListItem)<
  PolymorphicListItemProps<'label'> & { $noBorder?: boolean }
>`
  cursor: pointer;
  user-select: none;
  padding: ${(props) => props.theme.token.spacingM} 0;

  &:not(:first-child) {
    border-top: ${(props) =>
      props.$noBorder ? 'none' : `1px solid ${props.theme.token.color.c17}`};
  }
`;

const StyledRightIcon = styled.span`
  color: ${(props) => props.theme.token.color.c3};
  font: ${(props) => props.theme.token.font.labelS};
`;

export const CheckListItem = ({
  checked,
  error = false,
  name,
  noBorder,
  onClick,
  rightIcon,
  type = 'checkbox',
  ...listItemProps
}: CheckListItemProps) => {
  const id = useId();

  return (
    <StyledListItem
      {...listItemProps}
      $noBorder={noBorder}
      component="label"
      htmlFor={id}
      leftIcon={
        <Checkbox
          id={id}
          name={name}
          checked={checked}
          error={error}
          size="small"
          type={type}
          variant={type === 'radio' ? 'circle' : 'square'}
          onChange={onClick}
        />
      }
      rightIcon={
        rightIcon ? <StyledRightIcon>{rightIcon}</StyledRightIcon> : undefined
      }
      size="small"
    />
  );
};
