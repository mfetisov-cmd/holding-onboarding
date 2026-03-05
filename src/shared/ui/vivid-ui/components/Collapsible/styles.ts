import { ReactNode } from 'react';

import { styled } from 'styled-components';

import { ArrowForwardCenter24 } from '@/shared/ui/vivid-ui/components/Icons';
import { PolymorphicComponentProps } from '@/shared/ui/vivid-ui/shared';

export type Animation = {
  duration?: number;
  ease?: string;
};

export type CollapsibleProps = {
  animation?: Animation;
  onChangeCallback?: (isOpen: boolean) => void;
  targetElement: ReactNode;
  triggerElement: ReactNode;
};

export const DEFAULT_AIMATION = {
  duration: 0.2,
  ease: 'ease-in-out',
};

export const CollapsibleWrapper = styled.div<{ $isOpen: boolean }>`
  display: grid;
  grid-template-rows: ${(props) => (props.$isOpen ? '1fr' : '0fr')};
  visibility: ${(props) => (props.$isOpen ? 'visible' : 'hidden')};
  transition: all ${() => DEFAULT_AIMATION.duration}s
    ${() => DEFAULT_AIMATION.ease};
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
`;

export const CollapsibleHeader = styled.div<{
  onClick: (e: MouseEvent) => void;
}>`
  padding: ${(props) =>
    `${props.theme?.token.spacingM} ${props.theme?.token.spacingL}`};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid ${(props) => props.theme?.token.color.c4};
`;

export const StyledTriggerButton = styled.button<{
  onClick: (e: MouseEvent) => void;
}>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CollapsibleInner = styled.div`
  overflow: hidden;
`;

export const StyledArrowIcon = styled(ArrowForwardCenter24)<
  PolymorphicComponentProps<'svg', { $isOpen: boolean; color: string }>
>`
  transform: rotate(${(props) => (props.$isOpen ? '-90deg' : '90deg')});
  transition: transform 0.2s ease-in-out;
`;
