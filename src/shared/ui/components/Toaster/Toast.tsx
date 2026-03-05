import React, { useMemo } from 'react';

import { keyframes, styled, useTheme } from 'styled-components';

import { useCountdown } from '@/shared/lib/hooks/useCountdown';
import { IconButton } from '@/shared/ui/components/IconButton';
import { useToaster } from '@/shared/ui/components/Toaster';
import {
  Attention24,
  Checkbox24,
  CloseCircle24,
} from '@/shared/ui/vivid-ui/components/Icons';
import {
  ListItem,
  ListItemProps,
} from '@/shared/ui/vivid-ui/components/ListItem';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const StyledToast = styled.div<{ $isHidden?: boolean }>`
  padding: ${(props) =>
    `${props.theme.token.spacingS} ${props.theme.token.spacingM}`};
  background-color: ${(props) => props.theme.token.color.c12};
  border-radius: ${(props) => props.theme.token.borderRadiusM};
  width: 100%;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.08);
  transition: transform 0.3s;
  animation: ${fadeIn} 0.3s forwards;
`;

const DEFAULT_TIMEOUT_S_SUCCESS = 3;
// Impossible to read error message during 3 sec
const DEFAULT_TIMEOUT_S_ERROR = 7;

export type ToastProps = {
  id: string;
  severity: 'error' | 'success';
  timeoutS?: number;
} & Omit<ListItemProps, 'labelPosition' | 'rightIcon' | 'size'>;

export const Toast = ({
  id,
  leftIcon,
  severity,
  timeoutS,
  ...restListItemProps
}: ToastProps) => {
  const theme = useTheme();
  const { dismiss } = useToaster();

  const endDate = useMemo(() => {
    const delay =
      timeoutS ||
      (severity === 'success'
        ? DEFAULT_TIMEOUT_S_SUCCESS
        : DEFAULT_TIMEOUT_S_ERROR);

    return new Date(new Date().getTime() + delay * 1000);
  }, [timeoutS, severity]);

  useCountdown({ endDate, onFinish: () => dismiss(id) });

  const icon = useMemo(() => {
    if (leftIcon) {
      return leftIcon;
    }

    switch (severity) {
      case 'error':
        return <Attention24 color={theme.token.color.c8} />;
      case 'success':
        return <Checkbox24 color={theme.token.color.c9} />;
    }
  }, [theme, severity, leftIcon]);

  return (
    <StyledToast>
      <ListItem
        {...restListItemProps}
        labelPosition="down"
        leftIcon={icon}
        rightIcon={
          <IconButton size="small" variant="ghost" onClick={() => dismiss(id)}>
            <CloseCircle24 size={16} />
          </IconButton>
        }
        size="small"
      />
    </StyledToast>
  );
};
