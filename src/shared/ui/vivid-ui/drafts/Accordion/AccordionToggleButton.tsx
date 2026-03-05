import { PropsWithChildren, ReactNode } from 'react';

import { styled } from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import {
  ArrowDownCenter24,
  ArrowUp24,
} from '@/shared/ui/vivid-ui/components/Icons';

import { useAccordion } from './context';

const StyledTextButton = styled(Box)`
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.token.sizeUnits(4)};

  margin: 0;
  padding: 0;
  user-select: none;
  text-align: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
  font: ${({ theme }) => theme.token.font.labelS};

  &:hover,
  &:active,
  &:focus {
    outline: none;
    opacity: 0.8;
  }
`;

const IconContainer = styled.div`
  font-size: 0;
`;

export type AccordionToggleButtonProps = {
  className?: string;
  collapsedIcon?: ReactNode;
  expandedIcon?: ReactNode;
  onClick?: (e: React.MouseEvent) => void;
};

export const AccordionToggleButton = ({
  children,
  className,
  collapsedIcon: collapsedIconProp,
  expandedIcon: expandedIconProp,
  onClick,
}: PropsWithChildren<AccordionToggleButtonProps>) => {
  const { isExpanded, onToggle } = useAccordion();
  const collapsedIcon = collapsedIconProp ?? <ArrowDownCenter24 size={20} />;
  const expandedIcon = expandedIconProp ?? <ArrowUp24 size={20} />;

  const handleClick = (e: React.MouseEvent) => {
    onToggle();
    onClick?.(e);
  };

  return (
    <StyledTextButton className={className} onClick={handleClick}>
      {children}

      <IconContainer>{isExpanded ? expandedIcon : collapsedIcon}</IconContainer>
    </StyledTextButton>
  );
};
