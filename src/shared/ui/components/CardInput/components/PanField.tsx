import { ChangeEvent, useState } from 'react';

import { useTranslations } from 'next-intl';

import { getCardDescriptor } from '@/shared/lib/utils/card/getCardDescriptor';
import { Input } from '@/shared/ui/vivid-ui/components/Input';

import { cleanProposed, isLuhnValid, useCardInputState } from '../utils';
import { CardBrandIcons } from './CardBrandIcons';

const calculateNewCursorPosition = (
  cursorPosition: number,
  prevFormatted: string,
  newFormatted: string,
) => {
  let newCursorPos = cursorPosition;

  // Adjust for any added/removed spaces while typing
  if (prevFormatted.length < newFormatted.length) {
    if (newFormatted[cursorPosition - 1] === ' ') {
      newCursorPos += 1;
    }
  } else if (prevFormatted.length > newFormatted.length) {
    if (prevFormatted[cursorPosition - 1] === ' ') {
      newCursorPos -= 1;
    }
  }

  return newCursorPos;
};

type PanFieldProps = {
  withCardBrandIcon: boolean;
};

export const PanField = ({ withCardBrandIcon }: PanFieldProps) => {
  const t = useTranslations('add_money.card_top_up');
  const [data, emitter] = useCardInputState();

  const [inputValue, setInputValue] = useState<string>(data?.cardNumber ?? '');
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputElement = e.target;
    const rawValue = cleanProposed(inputElement.value);

    // Capture the current cursor position
    const cursorPosition = inputElement.selectionStart || 0;

    // Limit to 16 digits
    const truncatedValue = rawValue.slice(0, 16);

    // Save the position of spaces in the unformatted value
    const prevFormattedValue = formatCardNumber(inputValue);

    // Update the state
    setInputValue(truncatedValue);
    emitter.update({
      cardBrand: getCardDescriptor(truncatedValue)?.brand,
      cardNumber: truncatedValue,
      panValidationError: null,
    });

    // Validate using Luhn algorithm
    if (truncatedValue.length === 16) {
      setIsValid(isLuhnValid(truncatedValue));
    } else {
      setIsValid(true); // Reset validation if input is less than 16 digits
    }

    // Wait for the state update to apply, then set the correct cursor position
    setTimeout(() => {
      const newFormattedValue = formatCardNumber(truncatedValue);

      // Calculate the new cursor position after formatting
      const newCursorPosition = calculateNewCursorPosition(
        cursorPosition,
        prevFormattedValue,
        newFormattedValue,
      );
      inputElement.setSelectionRange(newCursorPosition, newCursorPosition);
    }, 0);
  };

  const formatCardNumber = (value: string) => {
    // Group the digits in sets of 4 separated by spaces
    return value.replace(/(\d{4})(?=\d)/g, '$1 ');
  };

  const hint = isValid ? data?.panValidationError : t('validation.pan_invalid');
  const error = !isValid || Boolean(data?.panValidationError);

  return (
    <Input
      autoComplete="cc-number"
      error={error}
      hint={hint ?? ''}
      inputMode="numeric"
      label={t('card_number_label')}
      rightIcon={
        withCardBrandIcon && <CardBrandIcons cardBrand={data?.cardBrand} />
      }
      size={data.size}
      type="text"
      value={formatCardNumber(inputValue)}
      x-autocompletetype="cc-number"
      onChange={handleInputChange}
    />
  );
};
