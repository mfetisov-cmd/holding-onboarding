import React, { ReactNode, useMemo, useRef, useState } from 'react';

import { useTheme } from 'styled-components';

import { Lock24, LockUnlocked24 } from '@/shared/ui/vivid-ui/components/Icons';
import { Column, Row } from '@/shared/ui/vivid-ui/components/Layout';
import { UseOtpInputOptions } from '@/shared/ui/vivid-ui/components/OtpForm';
import { Typography } from '@/shared/ui/vivid-ui/components/Typography';

import { useOtpInput } from '../OtpForm/hooks/useOtpInput';
import {
  Cursor,
  Dot,
  DotsContainer,
  HiddenInput,
  HiddenInputsContainer,
  IconContainer,
  PasswordInputField,
  Wrapper,
} from './styles';

type PasscodeInputProps = UseOtpInputOptions & {
  disabled?: boolean;
  error?: boolean;
  hint?: ReactNode;
  mode?: 'otp' | 'password';
  placeholder?: string;
  success?: boolean;
};

export const PasscodeInput = ({
  disabled,
  error,
  hint,
  inputProps,
  mode = 'otp',
  onChange,
  onSubmit,
  otpLength = 6,
  placeholder = '',
  success,
  value = '',
  withPreview,
}: PasscodeInputProps) => {
  const theme = useTheme();

  const {
    autoFocus,
    handleChange,
    handleKeyDown,
    inputRefs,
    otp,
    restInputProps,
  } = useOtpInput({
    inputProps,
    onChange,
    onSubmit,
    otpLength,
    value,
    withPreview,
  });

  const [isFocused, setIsFocused] = useState(false);
  const blurTimeout = useRef<NodeJS.Timeout | null>(null);

  let activeIndex = otp.findIndex((v) => !v);
  if (activeIndex === -1) {
    activeIndex = otpLength;
  }

  const dotColor = useMemo(() => {
    if (success) {
      return theme.token.color.c9;
    }

    if (error) {
      return theme.token.color.c8;
    }

    return theme.token.color.c6;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, success]);

  const handleFocus = () => {
    if (blurTimeout.current) {
      clearTimeout(blurTimeout.current);
    }
    setIsFocused(true);
  };
  const handleBlur = () => {
    blurTimeout.current = setTimeout(() => setIsFocused(false), 10);
  };

  const focusActiveInput = () => {
    if (disabled) {
      return;
    }
    const targetIndex = activeIndex >= otpLength ? otpLength - 1 : activeIndex;
    inputRefs.current[targetIndex]?.focus();
  };

  return (
    <Column gap={theme.token.sizeUnits(4)}>
      <Wrapper
        $disabled={disabled}
        $error={error}
        $success={success}
        tabIndex={-1}
        onClick={mode === 'otp' ? focusActiveInput : undefined}
      >
        <IconContainer>
          {success ? <LockUnlocked24 /> : <Lock24 />}
        </IconContainer>
        {mode === 'otp' ? (
          <>
            <DotsContainer>
              {Array.from({ length: otpLength }, (_, i) => (
                <Row align="center" key={i}>
                  <Cursor
                    $active={
                      i === activeIndex &&
                      isFocused &&
                      activeIndex !== otpLength
                    }
                  />
                  <Dot $color={!!otp[i] ? dotColor : undefined} />
                  <Cursor
                    $active={
                      i === otpLength - 1 &&
                      activeIndex === otpLength &&
                      isFocused
                    }
                  />
                </Row>
              ))}
            </DotsContainer>
            <HiddenInputsContainer>
              {Array.from({ length: otpLength }, (_, i) => (
                <HiddenInput
                  {...restInputProps}
                  aria-label={`Digit ${i + 1}`}
                  autoFocus={autoFocus && i === 0}
                  disabled={disabled}
                  inputMode="numeric"
                  key={i}
                  ref={(ref) => {
                    inputRefs.current[i] = ref;
                  }}
                  tabIndex={i === 0 ? 0 : -1}
                  type="tel"
                  value={otp[i] || ''}
                  onBlur={handleBlur}
                  onChange={(e) => handleChange(e, i)}
                  onFocus={handleFocus}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                />
              ))}
            </HiddenInputsContainer>
          </>
        ) : (
          <PasswordInputField
            {...restInputProps}
            $error={error}
            $success={success}
            autoComplete="current-password"
            disabled={disabled}
            placeholder={placeholder}
            type="password"
            value={value}
            onChange={(e) => {
              onChange?.(e.target.value);
            }}
          />
        )}
      </Wrapper>
      {hint && (
        <Typography
          color={error ? theme.token.color.c8 : theme.token.color.c2}
          variant="bodyS"
        >
          {hint}
        </Typography>
      )}
    </Column>
  );
};
