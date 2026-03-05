import { ChangeEvent, useState } from 'react';

import { useTranslations } from 'next-intl';

import { Input, InputProps } from '@/shared/ui/vivid-ui/components/Input';

import { useCardInputState, validateExpirationDate } from '../utils';

export const ExpirationField = (inputProps: InputProps) => {
  const t = useTranslations('add_money.card_top_up');
  const [data, emitter] = useCardInputState();

  const onChange = (value: string) => {
    if (value.length < 4) {
      emitter.update({
        expirationDateValidationError: null,
        expirationMonth: undefined,
        expirationYear: undefined,
      });
    } else {
      const expirationMonth = value.slice(0, 2);
      const expirationYear = value.slice(2, 4);

      emitter.update({
        expirationDateValidationError: null,
        expirationMonth,
        expirationYear,
      });
    }
  };

  const [inputValue, setInputValue] = useState<string>(() => {
    if (data?.expirationMonth && data?.expirationYear) {
      return formatExpirationDate(
        `${data.expirationMonth}${data.expirationYear}`,
      );
    }

    return '';
  });

  const [isValid, setIsValid] = useState<boolean>(true);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputElement = e.target;
    const start = inputElement.selectionStart;

    const rawValue = inputElement.value;
    const formattedValue = formatExpirationDate(rawValue);

    // Calculate the new cursor position based on deletions
    const diff = formattedValue.length - rawValue.length;

    setInputValue(formattedValue);

    // Restore the caret position
    if (inputElement && start !== null) {
      // The new cursor position adjusts for formatting changes
      setTimeout(() => {
        inputElement.setSelectionRange(start + diff, start + diff);
      }, 0);
    }

    // Pass only the digits without the slash to the parent component
    onChange(formattedValue.replace('/', ''));
    setIsValid(validateExpirationDate(formattedValue));
  };

  const handleBlur = () => {
    // Ensure value has MMYY format, complete with leading zeros if necessary
    let cleaned = inputValue.replace(/\D/g, '');
    if (cleaned.length === 3) {
      cleaned = `0${cleaned}`;
    }
    if (cleaned.length === 2) {
      cleaned += '00';
    }
    const formatted = formatExpirationDate(cleaned);
    setInputValue(formatted);

    onChange(cleaned);
    setIsValid(validateExpirationDate(cleaned));
  };

  const hint = isValid
    ? data?.expirationDateValidationError
    : t('validation.expiration_date_invalid');
  const error = !isValid || Boolean(data?.expirationDateValidationError);

  return (
    <Input
      {...inputProps}
      error={error}
      hint={hint ?? ''}
      inputMode="numeric"
      label="MM/YY"
      maxLength={5}
      size={data.size}
      type="text"
      value={inputValue}
      onBlur={handleBlur}
      onChange={handleInputChange}
    />
  );
};

function formatExpirationDate(value: string) {
  // Remove non-digit characters
  const cleaned = value.replace(/\D/g, '');
  // Limit the length to 4 characters (MMYY)
  const truncated = cleaned.slice(0, 4);

  if (truncated.length <= 2) {
    // Return MM or M
    return truncated;
  }
  // Format as MMYY
  return `${truncated.slice(0, 2)}/${truncated.slice(2, 4)}`;
}
