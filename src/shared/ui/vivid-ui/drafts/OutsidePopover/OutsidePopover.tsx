import { ReactNode, RefObject, useCallback, useRef } from 'react';

import { Placement } from '@popperjs/core';
import { useTheme } from 'styled-components';

import { Paper } from '@/shared/ui/vivid-ui/components/Paper';
import { usePopoverPosition } from '@/shared/ui/vivid-ui/components/Popover/hooks/usePopoverPosition';
import {
  StyledContent,
  StyledPaper,
} from '@/shared/ui/vivid-ui/components/Popover/styles';
import { Portal } from '@/shared/ui/vivid-ui/components/Portal';
import { useOnOutside } from '@/shared/ui/vivid-ui/hooks';

export type OutsidePopoverProps = {
  children: ReactNode;
  isFreeWidth?: boolean;
  noContentPadding?: boolean;
  nonClosingRefList?: RefObject<HTMLElement | null>[];
  onClose?: () => void;
  open?: boolean;
  placement?: Placement;
  positionRef: RefObject<HTMLElement | null>;
};

export const OutsidePopover = ({
  children,
  isFreeWidth = false,
  noContentPadding = false,
  nonClosingRefList = [],
  onClose,
  open = false,
  placement = 'bottom',
  positionRef,
}: OutsidePopoverProps) => {
  const theme = useTheme();

  const popoverRef = useRef<HTMLDivElement | null>(null);

  usePopoverPosition(popoverRef, positionRef, open, placement);

  const handleOutsideClick = useCallback(() => {
    if (open) {
      onClose?.();
    }
  }, [onClose, open]);

  useOnOutside(
    {
      event: 'mousedown',
      onClick: handleOutsideClick,
      target: [...nonClosingRefList, popoverRef],
    },
    [handleOutsideClick, nonClosingRefList, popoverRef],
  );

  if (!open) {
    return null;
  }

  return (
    <Portal>
      <div
        ref={popoverRef}
        style={{
          width: isFreeWidth ? undefined : positionRef.current?.offsetWidth,
          zIndex: theme?.token.zIndex.popover,
        }}
      >
        <Paper component={StyledPaper}>
          <StyledContent $noContentPaddings={noContentPadding}>
            {children}
          </StyledContent>
        </Paper>
      </div>
    </Portal>
  );
};
