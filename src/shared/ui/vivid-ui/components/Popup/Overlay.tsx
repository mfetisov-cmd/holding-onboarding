'use client';
import { AnimationProps } from 'framer-motion';

import { PolymorphicComponentProps } from '@/shared/ui/vivid-ui/shared';

import { StyledDialogContainer, StyledPopupOverlay } from './styles';

export const Overlay = ({
  animate,
  children,
  exit,
  initial,
  onClick,
  testId,
  transition,
  zIndex,
}: PolymorphicComponentProps<'div', { testId?: string; zIndex?: number }> &
  AnimationProps) => {
  return (
    <>
      <StyledDialogContainer
        data-testid={testId ? `${testId}-dialog` : ''}
        role="dialog"
      />
      <StyledPopupOverlay
        $zIndex={zIndex}
        animate={animate}
        data-testid={testId ? `${testId}-overlay` : ''}
        exit={exit}
        initial={initial}
        transition={transition}
        onClick={onClick}
      />
      {children}
    </>
  );
};
