import { ChangeEvent } from 'react';

import { createQaIdAttribute } from '@/shared/lib/utils/qaIds';
import { Ids } from '@/shared/model/constants/e2e/ids';
import { PasswordInput } from '@/shared/ui/components/PasswordInput';
import { OtpForm } from '@/shared/ui/vivid-ui/components/OtpForm';

import { CredType } from './types';

const PASSCODE_LENGTH = 6;

type PasswordInputProps = {
  disabled?: boolean;
  error?: string;
  label?: string;
  onChange: (upd: string) => void;
  onSubmit?: (upd: string) => void;
  placeholder?: string;
  type: CredType;
  value: string;
};

export const CredInput = ({
  disabled,
  error,
  label,
  onChange,
  onSubmit,
  placeholder,
  type,
  value,
}: PasswordInputProps) => {
  if (type === 'password') {
    return (
      <PasswordInput
        {...createQaIdAttribute(Ids.LOGIN__PASSWORD_FORM__INPUT)}
        disabled={disabled}
        error={!!error}
        hint={error}
        // Password
        label={label}
        // Enter password
        placeholder={placeholder}
        size="medium"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />
    );
  }

  if (type === 'passcode') {
    return (
      <OtpForm
        {...createQaIdAttribute(Ids.LOGIN__PASSCODE_FORM__INPUTS)}
        component="div"
        disabled={disabled}
        error={!!error}
        hint={error}
        inputProps={{
          autoComplete: 'off',
          autoFocus: true,
          type: 'password',
        }}
        otpLength={PASSCODE_LENGTH}
        size="medium"
        stretch
        value={value}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    );
  }

  return <></>;
};
