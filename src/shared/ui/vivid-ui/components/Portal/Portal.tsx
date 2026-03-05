'use client';
import React, { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
  disableScroll?: boolean;
}

export const Portal = ({ children, disableScroll = false }: PortalProps) => {
  const body = useMemo(() => document && document.body, []);
  const el = useMemo(() => document && document.createElement('div'), []);

  useEffect((): (() => void) => {
    if (disableScroll) {
      body.style.overflow = 'hidden';
    }
    body.appendChild(el);
    return () => {
      if (disableScroll) {
        body.style.overflow = 'auto';
      }
      try {
        body.removeChild(el);
      } catch (e) {}
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- disabled while refactoring, delete this comment after consideration if array of dependencies have more than one dependency
  }, []);

  return createPortal(children, el);
};
