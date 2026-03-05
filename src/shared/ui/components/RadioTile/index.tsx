'use client';
import styled, { useTheme } from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import { Checkbox } from '@/shared/ui/vivid-ui/components/Checkbox';
import { Typography } from '@/shared/ui/vivid-ui/components/Typography';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '@/shared/ui/vivid-ui/shared';

export type RadioTileProps = {
  label?: string;
  size?: 'medium' | 'small';
  title: string;
};

const StyledRadioTile = styled(Box)<{
  $checked: PolymorphicComponentProps<'input', RadioTileProps>['checked'];
  $disabled?: PolymorphicComponentProps<'input', RadioTileProps>['disabled'];
  $size: PolymorphicComponentProps<'input', RadioTileProps>['size'];
}>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1 1 0;
  gap: ${(props) => props.theme.token.spacingS};
  padding: ${({ $size, theme }) =>
    $size === 'medium'
      ? `${theme.token.sizeUnits(32)} ${theme.token.spacingM} ${
          theme.token.spacingM
        }`
      : theme.token.spacingM};
  border-radius: ${(props) => props.theme.token.borderRadiusM};
  background-color: ${({ $checked, theme }) =>
    $checked ? theme.token.color.c6l : theme.token.color.c5};
  cursor: ${(props) => (props.$disabled ? 'default' : 'pointer')};
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.token.spacingXS};
`;

const RadioTileBase = ({
  checked,
  component = 'input',
  disabled,
  label,
  name,
  onChange,
  size = 'medium',
  title,
  value,
}: PolymorphicComponentProps<'input', RadioTileProps>) => {
  const theme = useTheme();

  return (
    <StyledRadioTile
      $checked={checked}
      $disabled={disabled}
      $size={size}
      as="label"
      htmlFor={(value as string) || undefined}
    >
      <Checkbox
        id={(value as string) || undefined}
        name={name}
        checked={checked}
        component={component}
        size="medium"
        type="radio"
        value={value}
        onChange={onChange}
      />
      <StyledContent>
        <Typography variant="labelSAcc">{title}</Typography>
        {label ? (
          <Typography color={theme.token.color.c2} variant="paragraphXS">
            {label}
          </Typography>
        ) : null}
      </StyledContent>
    </StyledRadioTile>
  );
};

export const RadioTile = createPolymorphicComponent<'input', RadioTileProps>(
  RadioTileBase,
);
