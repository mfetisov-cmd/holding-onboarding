'use client';

import {
  PropsWithChildren,
  ReactElement,
  RefObject,
  useEffect,
  useState,
} from 'react';

import { keyframes, styled } from 'styled-components';

import { useVisibilityToggle } from '@/shared/lib/hooks/useVisibilityToggle';
import { SideSheetHeader } from '@/shared/ui/components/SideSheet/SideSheetHeader';
import { Box } from '@/shared/ui/vivid-ui/components/Box';
import { Popup } from '@/shared/ui/vivid-ui/components/Popup';
import { useBlockApp } from '@/shared/ui/vivid-ui/components/Popup/hooks';
import { Portal } from '@/shared/ui/vivid-ui/components/Portal';
import { Spacer } from '@/shared/ui/vivid-ui/components/Spacer';
import { useThemeBreakpoints } from '@/shared/ui/vivid-ui/hooks';

export type Props = {
  contentRef?: RefObject<HTMLDivElement | null>;
  disableContentPaddings?: boolean;
  headerActions?: ReactElement<any>;
  // use when you want to implement you own header, eg with steps
  hideHeader?: boolean;
  // used only in chat
  hideSpacer?: boolean;
  // used only in chat
  isContainedBody?: boolean;
  // used only in chat
  isWide?: boolean;
  leftActions?: ReactElement<any>;
  onClose: () => void;
  open?: boolean;
};

const slideLeft = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }`;

const slideRight = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(100%);
    }`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }`;

const StyledDialogContainer = styled.div<{ open?: boolean }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  word-wrap: break-word;
  right: 0;
  top: 0;
  height: 100vh;
  max-height: 100vh;
  padding: ${(props) => props.theme.token.spacingXS};
  z-index: ${(props) => props.theme.token.zIndex.overlay};
  animation: ${(props) => (props.open ? slideLeft : slideRight)} 0.2s ease
    forwards;
`;

const StyledDialogContent = styled.div<{
  $isContainedBody?: boolean;
  $isWide?: boolean;
}>`
  display: flex;
  position: relative;
  flex-grow: 1;
  border-radius: ${(props) => props.theme.token.sizeUnits(8)};
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: ${({ $isContainedBody }) =>
    $isContainedBody ? 'hidden' : 'auto'};
  word-wrap: break-word;
  right: 0;
  top: 0;
  width: ${(props) => (props.$isWide ? '500rem' : '420rem')};
  background-color: ${(props) => props.theme.token.color.c0};
`;

const StyledBackdrop = styled(Box)<{ open?: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${(props) =>
    props.theme.name === 'dark'
      ? 'rgba(255, 255, 255, 0.2)'
      : 'rgba(0, 0, 0, 0.4)'};
  overflow: auto;
  display: flex;
  z-index: ${(props) => props.theme.token.zIndex.overlay};
  animation: ${(props) => (props.open ? fadeIn : fadeOut)} 0.2s ease forwards;
`;

const StyledContent = styled.div<{
  $disableContentPaddings?: boolean;
  $isContainedBody?: boolean;
}>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  height: ${({ $isContainedBody }) => ($isContainedBody ? '100%' : 'auto')};
  overflow-y: ${({ $isContainedBody }) =>
    $isContainedBody ? 'scroll' : 'auto'};
  padding: ${({ $disableContentPaddings, theme: { token } }) =>
    $disableContentPaddings ? '0' : `0 ${token.spacingL} ${token.spacingXL}`};
`;

export const SideSheet = ({
  children,
  contentRef,
  disableContentPaddings,
  headerActions,
  hideHeader,
  hideSpacer,
  isContainedBody,
  isWide,
  leftActions,
  onClose,
  open,
}: PropsWithChildren<Props>) => {
  const breakpoints = useThemeBreakpoints();

  const { blockApp, unblockApp } = useBlockApp();
  const [isRenderChildren, onAnimationEnd] = useVisibilityToggle(open);
  const [mounted, setMounted] = useState(false);

  // Render only on client side
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      blockApp();
    } else {
      unblockApp();
    }

    return unblockApp;
  }, [blockApp, open, unblockApp]);

  if (isRenderChildren === false || !mounted) {
    return null;
  }

  if (breakpoints.isMobile) {
    return (
      <Popup
        closeOnClickOutside
        open={open}
        onAnimationEnd={onAnimationEnd}
        onClose={onClose}
      >
        {children}
      </Popup>
    );
  }

  return (
    <Portal>
      <StyledBackdrop open={open} onClick={onClose} />
      <StyledDialogContainer open={open} onAnimationEnd={onAnimationEnd}>
        <StyledDialogContent
          $isContainedBody={isContainedBody}
          $isWide={isWide}
        >
          {hideHeader ? null : (
            <SideSheetHeader
              leftActions={leftActions}
              rightActions={headerActions}
              onClose={onClose}
            />
          )}
          {hideSpacer ? null : <Spacer size={8} />}
          <StyledContent
            $disableContentPaddings={disableContentPaddings}
            $isContainedBody={isContainedBody}
            ref={contentRef}
          >
            {children}
          </StyledContent>
        </StyledDialogContent>
      </StyledDialogContainer>
    </Portal>
  );
};
