'use client';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

import { Placement } from '@popperjs/core';
import { useTheme } from 'styled-components';

import { getEffectiveZIndex } from '@/shared/lib/utils/getEffectiveZIndex';
import { Paper } from '@/shared/ui/vivid-ui/components/Paper';

import { useOnOutside } from '../../hooks';
import { Box } from '../Box';
import { Portal } from '../Portal';
import { Typography } from '../Typography';
import { usePopoverPosition } from './hooks/usePopoverPosition';
import { StyledContent, StyledPaper, StyledPopoverContainer } from './styles';

export interface PopoverProps {
  children: ReactNode;
  className?: string;
  content: ReactNode;
  fullWidth?: boolean;
  isOpen?: boolean;
  noContentPadding?: boolean;
  onIsOpenChange?: (value: boolean) => void;
  placement?: Placement;
  title?: string;
  trigger?: 'click' | 'hover';
  /**
   * [EXPERIMENTAL FEATURE]
   * @TODO
   *
   * Enables a temporary, naive z-index check that prevents the popover from closing
   * if the clicked element visually overlaps the popover with a higher z-index.
   *
   * This logic is incomplete and may cause unexpected behavior in complex stacking contexts.
   *
   * See Slack discussion for more details: https://projectx019.slack.com/archives/C060NRZJZM1/p1737103684093039
   * Ticket reference: https://vividmoney.atlassian.net/browse/SME-2915
   *
   * NOTE: This is a provisional solution and requires further investigation and refactoring.
   */
  useExperimentalZIndexCheck?: boolean;
  zIndex?: number;
}

const handleOutsideClickWithZIndexCheck_EXPERIMENTAL = (
  event: MouseEvent,
  popoverZ: number,
  onClose: () => void,
) => {
  const { clientX, clientY } = event;
  const topElem = document.elementFromPoint(
    clientX,
    clientY,
  ) as HTMLElement | null;

  if (!topElem) {
    onClose();
    return;
  }

  const topElemZ = getEffectiveZIndex(topElem);

  if (topElemZ > popoverZ) {
    // the element "on top" of the popover is not closed
    return;
  }

  onClose();
};

export const Popover: React.FC<PopoverProps> = ({
  children,
  className,
  content,
  fullWidth,
  isOpen: isOpenProp,
  noContentPadding,
  onIsOpenChange,
  placement = 'bottom',
  title,
  trigger = 'click',
  useExperimentalZIndexCheck,
  zIndex,
}) => {
  const theme = useTheme();
  const [isOpen, _setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSetIsOpen = useCallback(
    (value: boolean) => {
      _setIsOpen(value);
      onIsOpenChange?.(value);
    },
    [_setIsOpen, onIsOpenChange],
  );

  useEffect(() => {
    return () => {
      timeoutRef.current && clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (typeof isOpenProp !== 'undefined') {
      handleSetIsOpen(isOpenProp);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpenProp]);

  usePopoverPosition(popoverRef, triggerRef, isOpen, placement);

  useOnOutside({
    event: 'mousedown',
    onClick: (event) => {
      if (useExperimentalZIndexCheck)
        return handleOutsideClickWithZIndexCheck_EXPERIMENTAL(
          event,
          zIndex ?? theme.token.zIndex.popover,
          () => handleSetIsOpen(false),
        );

      handleSetIsOpen(false);
    },
    target: [triggerRef, popoverRef],
  });

  const getMouseEventHandlers = () => {
    if (trigger === 'hover') {
      return {
        onMouseEnter: () => {
          timeoutRef.current && clearTimeout(timeoutRef.current);
          handleSetIsOpen(true);
        },
        onMouseLeave: () => {
          timeoutRef.current = setTimeout(() => handleSetIsOpen(false), 100);
        },
      };
    }
    return {};
  };

  return (
    <StyledPopoverContainer {...getMouseEventHandlers()} $fullWidth={fullWidth}>
      <Box
        ref={triggerRef}
        onClick={
          trigger === 'click' ? () => handleSetIsOpen(!isOpen) : undefined
        }
      >
        {children}
      </Box>
      {isOpen && (
        <Portal>
          <div
            className={className}
            ref={popoverRef}
            style={{ zIndex: zIndex || theme?.token.zIndex.popover }}
          >
            <Paper component={StyledPaper}>
              <StyledContent $noContentPaddings={noContentPadding}>
                {title && <Typography variant="h4">{title}</Typography>}
                {content}
              </StyledContent>
            </Paper>
          </div>
        </Portal>
      )}
    </StyledPopoverContainer>
  );
};
