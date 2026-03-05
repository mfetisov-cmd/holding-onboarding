import { PropsWithChildren, ReactNode } from 'react';

import { AccordionProvider } from './context';
import { StyledAccordionContainer } from './styles';

export type AccordionProps = {
  children: ReactNode;
  className?: string;
  defaultExpanded?: boolean;
  isExpanded?: boolean;
};

export const Accordion = ({
  children,
  className,
  defaultExpanded = false,
  isExpanded,
}: PropsWithChildren<AccordionProps>) => {
  return (
    <AccordionProvider
      defaultExpanded={defaultExpanded}
      isExpanded={isExpanded}
    >
      <StyledAccordionContainer className={className}>
        {children}
      </StyledAccordionContainer>
    </AccordionProvider>
  );
};
