import { ReactNode, useMemo } from 'react';

import { styled, useTheme } from 'styled-components';

import { Info24 } from '@/shared/ui/vivid-ui/components/Icons';
import { ListItem } from '@/shared/ui/vivid-ui/components/ListItem';
import {
  PolymorphicTypographyProps,
  Typography,
} from '@/shared/ui/vivid-ui/components/Typography';
import { Size } from '@/shared/ui/vivid-ui/shared';

const StyledContainer = styled.div<{
  $backgroundColor: string;
  $smallPaddings: boolean;
}>`
  padding: ${(props) =>
    `${props.theme.token.sizeUnits(
      props.$smallPaddings ? 0 : 6,
    )} ${props.theme.token.sizeUnits(props.$smallPaddings ? 6 : 8)}`};
  background-color: ${(props) => props.$backgroundColor};
  border-radius: ${(props) => props.theme.token.sizeUnits(6)};
`;

const StyledTypography = styled(Typography)<PolymorphicTypographyProps>`
  display: block;
  margin: ${(props) => props.theme.token.sizeUnits(7)} 0;
`;

export type AlertProps = {
  changeTextColor?: boolean;
  customIcon?: ReactNode;
  size?: Size;
  smallPaddings?: boolean;
  text: string;
  type?: 'default' | 'error' | 'highlighted' | 'warning';
};

export const Alert = ({
  changeTextColor = false,
  customIcon,
  size = 'small',
  smallPaddings = false,
  text,
  type = 'default',
}: AlertProps) => {
  const theme = useTheme();

  const { backgroundColor, color } = useMemo(() => {
    switch (type) {
      case 'error':
        return {
          backgroundColor: theme.token.color.c8t,
          color: theme.token.color.c8,
        };
      case 'warning':
        return {
          backgroundColor: theme.token.color.c7t,
          color: theme.token.color.c7,
        };
      case 'highlighted':
        return {
          backgroundColor: theme.token.color.c6l,
          color: theme.token.color.c6,
        };
      case 'default':
      default:
        return {
          backgroundColor: theme.token.color.c4,
          color: theme.token.color.c6,
        };
    }
  }, [type, theme]);

  return (
    <StyledContainer
      $backgroundColor={backgroundColor}
      $smallPaddings={smallPaddings}
    >
      <ListItem
        leftIcon={customIcon ?? <Info24 color={color} />}
        size={size}
        title={
          <StyledTypography color={changeTextColor ? color : undefined}>
            {text}
          </StyledTypography>
        }
      />
    </StyledContainer>
  );
};
