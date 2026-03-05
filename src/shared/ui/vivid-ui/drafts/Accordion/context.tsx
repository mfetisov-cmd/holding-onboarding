import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

export type AccordionContextType = {
  isExpanded: boolean;
  onToggle: () => void;
};

const initAccordionContext: AccordionContextType = {
  isExpanded: false,
  onToggle: () => {},
};

export const AccordionContext =
  createContext<AccordionContextType>(initAccordionContext);

type AccordionProviderProps = {
  children: ReactNode;
  defaultExpanded?: boolean;
  isExpanded?: boolean;
};

export const AccordionProvider = ({
  children,
  defaultExpanded = false,
  isExpanded: externalIsExpanded,
}: AccordionProviderProps) => {
  const [isExpanded, setIsExpanded] = useState(
    externalIsExpanded ?? defaultExpanded,
  );

  const onToggle = useCallback(() => setIsExpanded((prev) => !prev), []);

  useEffect(() => {
    if (externalIsExpanded !== undefined) {
      setIsExpanded(externalIsExpanded);
    }
  }, [externalIsExpanded]);

  return (
    <AccordionContext.Provider value={{ isExpanded, onToggle }}>
      {children}
    </AccordionContext.Provider>
  );
};

export const useAccordion = () => {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error('useAccordion must be used within an AccordionProvider');
  }

  return context;
};
