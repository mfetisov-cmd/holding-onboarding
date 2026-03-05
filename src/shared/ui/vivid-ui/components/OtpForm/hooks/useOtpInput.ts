import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';

import { UseOtpInputOptions } from '../types';
import { usePreviewIndex } from './usePreviewIndex';

export const useOtpInput = ({
  inputProps,
  onChange,
  onSubmit,
  otpLength = 6,
  value,
  withPreview,
}: UseOtpInputOptions) => {
  const [otp, setOtp] = useState<string[]>(
    value ? value.split('') : Array(otpLength).fill(''),
  );
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const { onDigitChange, previewIndex } = usePreviewIndex();

  const {
    autoFocus,
    inputMode = 'numeric',
    type = 'text',
    ...restInputProps
  } = inputProps || {};

  // Focus first input on mount (native autoFocus fails in Portal-mounted components)
  useEffect(() => {
    if (autoFocus) {
      requestAnimationFrame(() => {
        inputRefs.current[0]?.focus();
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reset otp state if component received empty value
  useEffect(() => {
    if (value?.length === 0) {
      setOtp(Array(otpLength).fill(''));
      if (autoFocus) {
        inputRefs.current[0]?.focus();
      }
    }
  }, [value, otpLength, autoFocus]);

  useEffect(() => {
    if (otp.filter((i) => Boolean(i)).length === otpLength) {
      onSubmit?.(otp.join(''));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otp, otpLength]);

  const changeValue = (num: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = num;
    setOtp(newOtp);
    onChange?.(newOtp.join(''));

    if (num !== '' && index !== otpLength - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (withPreview) {
      onDigitChange(index);
    }

    if (e.key === 'Backspace' || e.key === 'Delete') {
      changeValue('', index);

      if (!otp[index] && index !== 0) {
        inputRefs.current[index - 1]?.focus();
        changeValue('', index - 1);
      }
      return;
    }

    // Prevent onChange handling and other handlers which can break update logic
    if (/^\d*$/.test(e.key)) {
      changeValue(e.key, index);
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const nums = e.target.value
      .split('')
      .filter((n) => /^\d*$/.test(n))
      .slice(0, otpLength);

    // User typed non-digit or inserted a string without digits
    if (nums.length === 0) {
      return;
    }

    // User inserted a string containing only one digit
    if (nums.length === 1) {
      changeValue(nums[0], index);
      return;
    }

    // User inserted valid code from clipboard or autocomplete
    setOtp((prevOtp) => {
      let newOtp = [...prevOtp];
      newOtp = newOtp.fill('');
      nums.forEach((num, index) => {
        newOtp[index] = num;
      });
      onChange?.(newOtp.join(''));
      onDigitChange(nums.length - 1);
      inputRefs.current[nums.length - 1]?.focus();
      return newOtp;
    });
  };

  return {
    autoFocus,
    handleChange,
    handleKeyDown,
    inputMode,
    inputRefs,
    otp,
    previewIndex,
    restInputProps,
    type,
  };
};
