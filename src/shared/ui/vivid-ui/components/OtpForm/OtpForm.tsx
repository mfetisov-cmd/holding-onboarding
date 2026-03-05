'use client';
import { ElementType } from 'react';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '@/shared/ui/vivid-ui/shared';

import { Spacer } from '../Spacer';
import { Typography } from '../Typography';
import { useOtpInput } from './hooks/useOtpInput';
import {
  StyledDigitInput,
  StyledForm,
  StyledHint,
  StyledLabel,
} from './styles';
import { OTPFormProps } from './types';

export type PolymorphicOTPFormProps<C extends ElementType = 'form'> =
  PolymorphicComponentProps<C, OTPFormProps>;

const OTPFormBase = ({
  component = 'form',
  disabled = false,
  error,
  hint,
  inputProps,
  onChange,
  onSubmit,
  otpLength = 6,
  size = 'small',
  stretch,
  value,
  withPreview,
  ...rest
}: PolymorphicOTPFormProps) => {
  const {
    autoFocus,
    handleChange,
    handleKeyDown,
    inputMode,
    inputRefs,
    otp,
    previewIndex,
    restInputProps,
    type,
  } = useOtpInput({
    inputProps,
    onChange,
    onSubmit,
    otpLength,
    value,
    withPreview,
  });

  return (
    <>
      <StyledForm as={component} {...rest}>
        {Array.from({ length: otpLength }, (_, index) => (
          <Box key={index}>
            <StyledLabel as="label" htmlFor={`otp_${index}`}>
              OTP Digit {index + 1}
            </StyledLabel>
            <StyledDigitInput
              {...restInputProps}
              id={`otp_${index}`}
              $error={error}
              $size={size}
              $stretch={stretch}
              as="input"
              autoFocus={autoFocus && index === 0}
              disabled={disabled}
              inputMode={inputMode}
              ref={(ref: HTMLInputElement) => {
                inputRefs.current[index] = ref;
              }}
              // Prevent using type=password because of browser password suggestion. There is no other way: https://stackoverflow.com/q/2530
              type={type === 'password' ? 'text' : type}
              value={
                type === 'password' && otp[index] && previewIndex !== index
                  ? '•'
                  : otp[index]
              }
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          </Box>
        ))}
      </StyledForm>
      {hint ? (
        <>
          <Spacer size={4} variant="vertical" />
          <StyledHint $error={!!error}>
            <Typography variant="paragraphS">{hint}</Typography>
          </StyledHint>
        </>
      ) : undefined}
    </>
  );
};

export const OtpForm = createPolymorphicComponent<'form', OTPFormProps>(
  OTPFormBase,
);
