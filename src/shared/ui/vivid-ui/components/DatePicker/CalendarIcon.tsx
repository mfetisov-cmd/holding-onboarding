import { MouseEventHandler } from 'react';

import { useTheme } from 'styled-components';

import { IconButton } from '@/shared/ui/components/IconButton';

import { Calendar24 } from '../Icons';

type CalendarIconProps = {
  disabled?: boolean;
  isButton: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  size?: number;
};

export const CalendarIcon = ({
  disabled = false,
  isButton,
  onClick,
  size = 24,
}: CalendarIconProps) => {
  const theme = useTheme();

  return isButton ? (
    <IconButton
      disabled={disabled}
      size="small"
      type="button"
      variant="ghost"
      onClick={onClick}
    >
      <Calendar24 size={size} />
    </IconButton>
  ) : (
    <Calendar24 color={theme.token.color.c2} size={size} />
  );
};
