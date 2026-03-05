'use client';
import { useEffect, useState } from 'react';

import { styled } from 'styled-components';

import { useValue } from '@/shared/lib/hooks/useValue';
import { Toast, ToastProps } from '@/shared/ui/components/Toaster/Toast';
import { Portal } from '@/shared/ui/vivid-ui/components/Portal';

const MAX_NOTIFICATIONS_COUNT = 7;
const MAX_NOTIFICATIONS_COUNT_SMALL_SCREEN = 3;

type ToasterState = {
  toasts?: ToastProps[];
};

export const _useToasterState = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useValue<ToasterState>({}, 'toaster-state');
};

const StyledToasterContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: ${(props) => props.theme.token.zIndex.toast};
  padding: ${(props) => props.theme.token.spacingXS};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.token.spacingXS};
`;

const StyledToasterItem = styled.div`
  display: none;

  &:nth-last-child(-n + ${MAX_NOTIFICATIONS_COUNT_SMALL_SCREEN}) {
    display: block;
  }

  @media (min-height: ${(props) => props.theme.token.breakPoints.tablet}) {
    &:nth-last-child(-n + ${MAX_NOTIFICATIONS_COUNT}) {
      display: block;
    }
  }
`;

export const Toaster = () => {
  const [mounted, setMounted] = useState(false);
  const [{ toasts }] = _useToasterState();

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <Portal>
      <StyledToasterContainer>
        {toasts?.map((toast: ToastProps) => (
          <StyledToasterItem key={toast.id}>
            <Toast key={toast.id} {...toast} />
          </StyledToasterItem>
        ))}
      </StyledToasterContainer>
    </Portal>
  ) : null;
};
