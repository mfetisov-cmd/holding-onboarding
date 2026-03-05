'use client';
import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';

import { Prompt, PromptProps } from './Prompt';

export type PromptContentProps = Omit<
  PromptProps,
  'onClose' | 'onSubmit' | 'open'
>;
export type PromptResultStatus = 'cancel' | 'discard' | 'submit';
export type PromptContextType = {
  prompt: (
    props: PromptContentProps,
  ) => Promise<{ status: PromptResultStatus }>;
};
const PromptContext = createContext({} as PromptContextType);

const defaultProps: PromptContentProps = { title: '' };

export const PromptProvider = ({ children }: PropsWithChildren) => {
  const resolver = useRef<
    ((result: { status: PromptResultStatus }) => void) | null
  >(null);
  const [content, setContent] = useState<null | PromptContentProps>(null);

  const prompt = useCallback((props: PromptContentProps) => {
    return new Promise<{ status: PromptResultStatus }>((resolve) => {
      setContent(props);
      resolver.current = resolve;
    });
  }, []);

  const handleClose = useCallback(() => {
    if (resolver.current) {
      resolver.current({ status: 'cancel' });
    }
    setContent(null);
  }, []);

  const handleDiscard = useCallback(() => {
    if (resolver.current) {
      resolver.current({ status: 'discard' });
    }
    setContent(null);
  }, []);

  const handleSubmit = useCallback(() => {
    if (resolver.current) {
      resolver.current({ status: 'submit' });
    }
    setContent(null);
  }, []);

  const contextValue = useMemo(() => ({ prompt }), [prompt]);

  return (
    <PromptContext.Provider value={contextValue}>
      {children}
      <Prompt
        {...defaultProps}
        {...content}
        open={content != null}
        onClose={handleClose}
        onDiscard={handleDiscard}
        onSubmit={handleSubmit}
      />
    </PromptContext.Provider>
  );
};

export const usePrompt = () => useContext(PromptContext);
