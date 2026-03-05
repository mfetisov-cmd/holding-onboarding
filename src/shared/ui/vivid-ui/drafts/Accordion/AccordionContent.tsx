import { PropsWithChildren, ReactNode } from 'react';

import { useAccordion } from './context';
import { StyledAccordionContent } from './styles';

export type AccordionContentProps = {
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
};

export const AccordionContent = ({
  children,
  className,
  fullHeight = false,
}: PropsWithChildren<AccordionContentProps>) => {
  const { isExpanded } = useAccordion();

  return (
    <StyledAccordionContent
      $fullHeight={fullHeight}
      $isExpanded={isExpanded}
      className={className}
    >
      {children}
    </StyledAccordionContent>
  );
};

export default AccordionContent;
