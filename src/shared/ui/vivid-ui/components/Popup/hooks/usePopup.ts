import {
  MouseEvent,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';

import { useKeydownHandler } from '@/shared/ui/vivid-ui/hooks';

import { usePopupContext } from '../context';

const noop = () => {};

export const useBlockApp = (appRootSelector = 'body') => {
  const blockApp = useCallback(() => {
    document
      .querySelector(appRootSelector)
      ?.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'hidden';
  }, [appRootSelector]);

  const unblockApp = useCallback(() => {
    document.querySelector(appRootSelector)?.removeAttribute('aria-hidden');
    document.body.style.overflow = '';
  }, [appRootSelector]);

  return { blockApp, unblockApp };
};

interface UsePopupProps {
  onClose?: () => void;
  onOpen?: () => void;
  open?: boolean;
}

export const usePopup = ({
  onClose = noop,
  onOpen = noop,
  open,
}: UsePopupProps) => {
  const popupId = useId();
  const {
    addPopup,
    appRootSelector,
    refActivePopupID,
    refPopupIDs,
    removePopup,
  } = usePopupContext();
  const { blockApp, unblockApp } = useBlockApp(appRootSelector);
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLElement | null>(null);

  const openPopup = useCallback(
    (event?: MouseEvent) => {
      if (isOpen) {
        return;
      }

      addPopup(popupId);
      setIsOpen(true);
      blockApp();
      onOpen();

      triggerRef.current = event?.currentTarget as HTMLElement;
    },
    [addPopup, blockApp, isOpen, onOpen, popupId],
  );

  const closePopup = useCallback(() => {
    if (!isOpen) {
      return;
    }

    removePopup(popupId);
    setIsOpen(false);

    if (!refPopupIDs || refPopupIDs?.current.length === 0) {
      /* Unblock if it last popup */
      unblockApp();
    }
    onClose();

    triggerRef.current?.focus();
  }, [isOpen, onClose, popupId, refPopupIDs, removePopup, unblockApp]);

  useEffect(() => {
    if (open === undefined || open === isOpen) {
      return;
    }

    if (open) {
      openPopup();
    } else {
      closePopup();
    }
  }, [open, openPopup, closePopup, isOpen]);

  useKeydownHandler('Escape', () => {
    if (popupId === refActivePopupID?.current) {
      closePopup();
    }
  });

  return { closePopup, isOpen, openPopup };
};
