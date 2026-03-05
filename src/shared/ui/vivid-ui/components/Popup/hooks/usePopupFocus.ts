import React, { MutableRefObject, useCallback, useEffect, useRef } from 'react';

const FOCUSABLE_ELEMENTS_SELECTOR =
  'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]';

export const usePopupFocus = (
  contentRef: MutableRefObject<HTMLDivElement | null>,
  isOpen: boolean,
) => {
  const refFocusableElements = useRef<HTMLElement[] | null>(null);
  const refFirstElement = useRef<HTMLElement | null>(null);
  const refLastElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    refFocusableElements.current = Array.from<HTMLElement>(
      contentRef.current?.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR) ?? [],
    ).filter((el) => el.tabIndex >= 0);

    refFirstElement.current = refFocusableElements.current[0];
    refLastElement.current =
      refFocusableElements.current[refFocusableElements.current.length - 1];
  });

  // Disables default browser Tab keydown focusing if there are no focusable elements inside popup.
  // Otherwise, the browser will focus on the element outside the popup.
  useEffect(() => {
    const onDocumentTabKeyDown = (evt: KeyboardEvent) => {
      if (
        evt.key === 'Tab' &&
        !refFocusableElements.current?.length &&
        isOpen
      ) {
        evt.preventDefault();
      }
    };
    document.addEventListener('keydown', onDocumentTabKeyDown);
    return () => {
      document.removeEventListener('keydown', onDocumentTabKeyDown);
    };
  }, [isOpen]);

  const onPopupTabKeyDown = useCallback((evt: React.KeyboardEvent) => {
    if (evt.key !== 'Tab') return;

    switch (true) {
      case refFocusableElements.current?.length === 1:
        evt.preventDefault();
        break;
      case evt.shiftKey && document.activeElement === refFirstElement.current:
        evt.preventDefault();
        refLastElement.current?.focus();
        break;
      case !evt.shiftKey && document.activeElement === refLastElement.current:
        evt.preventDefault();
        refFirstElement.current?.focus();
        break;
    }
  }, []);

  return { onPopupTabKeyDown, refFocusableElements };
};
