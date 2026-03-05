/* eslint-disable react-hooks/rules-of-hooks */
import React, { PropsWithChildren, ReactNode, useRef, useState } from 'react';

import { Placement } from '@popperjs/core';

import { useVisibilityToggle } from '@/shared/lib/hooks/useVisibilityToggle';
import { usePopoverPosition } from '@/shared/ui/vivid-ui/components/Popover/hooks/usePopoverPosition';
import { Portal } from '@/shared/ui/vivid-ui/components/Portal';
import { createPolymorphicComponent } from '@/shared/ui/vivid-ui/shared';

import {
  Container,
  NoWrapText,
  StyledTooltip,
  StyledTooltipArrow,
} from './tooltip.styles';

// Tooltips should be shown after some delay, to avoid useless showing while user moves cursor over multiple elements with tooltips
const TOOLTIP_SHOW_DELAY_MS = 500;

const ContentWrapper = ({ children }: PropsWithChildren) => {
  if (React.isValidElement(children)) {
    return children;
  }

  return <NoWrapText variant="paragraphXS">{children}</NoWrapText>;
};

export type TooltipProps = {
  children?: ReactNode;
  component?: React.ElementType;
  content?: ReactNode;
  placement?: Placement;
  // useful when tooltip is placed insed popups and sidesheets with higher zIndex
  zIndex?: number;
};

const _Tooltip = ({
  children,
  component,
  content,
  placement = 'top',
  zIndex,
  ...rest
}: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const arrowRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isRenderChildren, onAnimationEnd] = useVisibilityToggle(isOpen);

  usePopoverPosition(
    popoverRef,
    triggerRef,
    isRenderChildren,
    placement,
    arrowRef,
  );

  const onMouseEnter = () => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(
      () => setIsOpen(true),
      TOOLTIP_SHOW_DELAY_MS,
    );
  };
  const onMouseLeave = () => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsOpen(false), 100);
  };

  return (
    <Container
      {...rest}
      as={component}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Container ref={triggerRef}>{children}</Container>
      {content && isRenderChildren && (
        <Portal>
          <StyledTooltip
            $zIndex={zIndex}
            open={isOpen}
            ref={popoverRef}
            onAnimationEnd={onAnimationEnd}
          >
            <ContentWrapper>{content}</ContentWrapper>
            <StyledTooltipArrow data-popper-arrow ref={arrowRef} />
          </StyledTooltip>
        </Portal>
      )}
    </Container>
  );
};

export const Tooltip = createPolymorphicComponent<'div', TooltipProps>(
  _Tooltip,
);
