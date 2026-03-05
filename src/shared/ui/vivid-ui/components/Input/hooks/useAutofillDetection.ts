import { RefObject, useEffect, useState } from 'react';

/**
 * IMPORTANT: For the hook to work, you MUST add the following CSS rules:
 *
 * ```css
 * 1. Define keyframes animations
 * @keyframes onAutoFillStart {
 *   0% { opacity: 1; }
 *   100% { opacity: 1; }
 * }
 *
 * @keyframes onAutoFillCancel {
 *   0% { opacity: 1; }
 *   100% { opacity: 1; }
 * }
 *
 * 2. Bind animations to autofill states
 * input:-webkit-autofill {
 *   animation: onAutoFillStart 0.001s;
 * }
 *
 * input:not(:-webkit-autofill) {
 *   animation: onAutoFillCancel 0.001s;
 * }
 * ```
 */
export const useAutofillDetection = (
  inputRef: RefObject<HTMLInputElement | null>,
) => {
  const [isAutoFilled, setIsAutoFilled] = useState(false);

  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;

    const checkAutofill = () => {
      const isWebkitAutoFilled = input.matches?.(':-webkit-autofill') || false;
      setIsAutoFilled(isWebkitAutoFilled);
    };

    checkAutofill();

    const handleAutofillAnimation = (e: AnimationEvent) => {
      if (e.animationName === 'onAutoFillStart') {
        setIsAutoFilled(true);
      } else if (e.animationName === 'onAutoFillCancel') {
        setIsAutoFilled(false);
      }
    };

    input.addEventListener('animationstart', handleAutofillAnimation);

    return () => {
      input.removeEventListener('animationstart', handleAutofillAnimation);
    };
  }, [inputRef]);

  return isAutoFilled;
};
