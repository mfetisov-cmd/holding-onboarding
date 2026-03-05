'use client';
import { cloneElement, type JSX, useEffect, useRef } from 'react';

import { createQaIdAttribute } from '@utils/qaIds';
import { AnimatePresence, AnimationProps } from 'framer-motion';

import { Ids } from '@/shared/model/constants/e2e/ids';
import { useThemeBreakpoints } from '@/shared/ui/vivid-ui/hooks';
import { PolymorphicComponentProps, Size } from '@/shared/ui/vivid-ui/shared';

import { Portal } from '../Portal';
import { useBlockApp, usePopup, usePopupFocus } from './hooks';
import { Overlay } from './Overlay';
import { PopupHeader, PopupHeaderProps } from './PopupHeader';
import { StyledPopup, StyledPopupContent } from './styles';

export interface PopupTriggerProps {
  onClick: () => void;
}

export interface PopupProps {
  closeOnClickOutside?: boolean;
  fullScreen?: boolean;
  leftActions?: PopupHeaderProps['leftActions'];
  onClose?: () => void;
  onOpen?: () => void;
  open?: boolean;
  paddingSize?: Size;
  showCloseBtn?: PopupHeaderProps['showCloseBtn'];
  testId?: string;
  trigger?: JSX.Element;
  zIndex?: number;
}

export const Popup = ({
  children,
  closeOnClickOutside = true,
  fullScreen,
  leftActions,
  onClose,
  onOpen,
  open,
  paddingSize = 'medium',
  showCloseBtn = false,
  testId,
  trigger,
  zIndex,
  ...rest
}: PolymorphicComponentProps<'div', PopupProps>) => {
  const breakpoints = useThemeBreakpoints();
  const { closePopup, isOpen, openPopup } = usePopup({ onClose, onOpen, open });
  const { blockApp, unblockApp } = useBlockApp();
  const popupContainerRef = useRef<HTMLDivElement>(null);
  const { onPopupTabKeyDown } = usePopupFocus(popupContainerRef, isOpen);

  const onOverlayClick = () => {
    if (closeOnClickOutside) {
      closePopup();
    }
  };

  useEffect(() => {
    if (isOpen) {
      blockApp();
    } else {
      unblockApp();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- disabled while refactoring, delete this comment after consideration if array of dependencies have more than one dependency
  }, [isOpen]);

  // eslint-disable-next-line react-hooks/exhaustive-deps -- disabled while refactoring, delete this comment after consideration if array of dependencies have more than one dependency
  useEffect(() => unblockApp, []);

  let popupAnimation: AnimationProps = {};
  let overlayAnimation: AnimationProps = {};

  if (breakpoints.isMobile) {
    const transition: AnimationProps['transition'] = {
      damping: 48,
      stiffness: 460,
      type: 'spring',
    };

    popupAnimation = {
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: '20%' },
      initial: { opacity: 0, y: '20%' },
      transition,
    };
    overlayAnimation = {
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      initial: { opacity: 0 },
      transition,
    };
  }

  return (
    <>
      {trigger
        ? cloneElement<PopupTriggerProps>(trigger, { onClick: openPopup })
        : null}
      <AnimatePresence>
        {isOpen && (
          <Portal>
            <Overlay
              {...createQaIdAttribute(Ids.COMMON__POPUP__OVERLAY)}
              zIndex={zIndex}
              {...overlayAnimation}
              testId={testId}
              onClick={onOverlayClick}
            >
              <StyledPopup
                {...rest}
                {...popupAnimation}
                $fullScreen={fullScreen}
                $zIndex={zIndex}
                data-testid={testId ? `${testId}-popup` : ''}
                ref={popupContainerRef}
                onKeyDown={onPopupTabKeyDown}
              >
                <PopupHeader
                  closePopup={closePopup}
                  leftActions={leftActions}
                  showCloseBtn={showCloseBtn}
                  testId={testId}
                />
                <StyledPopupContent
                  $fullScreen={fullScreen}
                  $paddingSize={paddingSize}
                >
                  {children}
                </StyledPopupContent>
              </StyledPopup>
            </Overlay>
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
};
