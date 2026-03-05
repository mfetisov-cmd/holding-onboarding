import { useState } from 'react';

import copy from 'copy-to-clipboard';

export const useCopy = (
  timeoutMs = 3000,
): [copied: boolean, handleCopy: (value: string) => void] => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (value: string) => {
    copy(value);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, timeoutMs);
  };

  return [copied, handleCopy];
};
