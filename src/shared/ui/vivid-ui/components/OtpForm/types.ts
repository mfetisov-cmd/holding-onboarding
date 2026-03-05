import { HTMLProps, ReactNode } from 'react';

export type OTPFormInputProps = HTMLProps<HTMLInputElement>;

export type UseOtpInputOptions = {
  inputProps?: OTPFormInputProps;
  onChange?: (otp: string) => void;
  onSubmit?: (otp: string) => void;
  otpLength?: number;
  value?: string;
  // Enables last entered digit preview for 500ms
  withPreview?: boolean;
};

export type OTPFormProps = UseOtpInputOptions & {
  disabled?: boolean;
  error?: boolean;
  hint?: ReactNode;
  size?: 'extra-small' | 'medium' | 'small';
  stretch?: boolean;
};
