'use client';

import { ReactNode, useMemo } from 'react';

import styled, { useTheme } from 'styled-components';

import {
  Typography,
  TypographyProps,
} from '@/shared/ui/vivid-ui/components/Typography';
import { PolymorphicComponentProps } from '@/shared/ui/vivid-ui/shared';

type StyledCaptionProps = TypographyProps & {
  $backgroundColor: string;
  $color: string;
};

const StyledCaption = styled(Typography)<
  PolymorphicComponentProps<'p', StyledCaptionProps>
>`
  display: inline-block;
  padding: ${({ theme }) =>
    `${theme.token.sizeUnits(3)} ${theme.token.sizeUnits(4)}`};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ $color }) => $color};
  border-radius: ${({ theme }) => theme.token.borderRadiusXS};
`;

export enum StatusLabelType {
  ACCENT = 'accent',
  NEGATIVE = 'negative',
  NEUTRAL = 'neutral',
  POSITIVE = 'positive',
  WARNING = 'warning',
}

type StatusLabelProps = {
  children: ReactNode;
  className?: string;
  status?: StatusLabelType;
};

export const StatusLabel = ({
  children,
  className,
  status,
}: StatusLabelProps) => {
  const theme = useTheme();

  const backgroundColor = useMemo(() => {
    switch (status) {
      case StatusLabelType.POSITIVE:
        return theme.token.color.c9;
      case StatusLabelType.NEGATIVE:
        return theme.token.color.c8;
      case StatusLabelType.WARNING:
        return theme.token.color.c7;
      case StatusLabelType.NEUTRAL:
        return theme.token.color.c5;
      case StatusLabelType.ACCENT:
        return theme.token.color.c13;
      default:
        return theme.token.color.c7t;
    }
  }, [status, theme]);

  const color = useMemo(() => {
    switch (status) {
      case StatusLabelType.POSITIVE:
      case StatusLabelType.NEGATIVE:
      case StatusLabelType.WARNING:
      case StatusLabelType.ACCENT:
        return theme.token.color.c0;
      case StatusLabelType.NEUTRAL:
        return theme.token.color.c2;
      default:
        return theme.token.color.c1;
    }
  }, [status, theme]);

  return (
    <StyledCaption
      $backgroundColor={backgroundColor}
      $color={color}
      className={className}
      variant="captionS"
    >
      {children}
    </StyledCaption>
  );
};
