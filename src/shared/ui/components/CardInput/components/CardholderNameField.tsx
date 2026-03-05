import { ChangeEvent, useEffect, useState } from 'react';

import { useTranslations } from 'next-intl';

import { Input } from '@/shared/ui/vivid-ui/components/Input';

import { useCardInputState } from '../utils';

export const CardholderNameField = () => {
  const [data, emitter] = useCardInputState();

  const t = useTranslations('add_money.card_top_up');

  const [inputValue, setInputValue] = useState<string>(
    () => data.cardHolderInitialName ?? '',
  );

  useEffect(() => {
    emitter.update({
      cardHolderName: inputValue,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [isValid, setIsValid] = useState<boolean>(true);

  const handleInputChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);

    emitter.update({
      cardHolderName: value,
      cardHolderNameValidationError: null,
    });

    if (value.length === 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  if (data.hideCardholderName) {
    return null;
  }

  const error = !isValid || Boolean(data?.cardHolderNameValidationError);
  const hint = isValid
    ? data?.cardHolderNameValidationError
    : t('validation.card_holder_name_too_short');

  return (
    <Input
      autoComplete="cc-name"
      error={error}
      hint={hint ?? ''}
      label={t('cardholder_name_label')}
      size={data.size}
      type="text"
      value={inputValue}
      x-autocompletetype="cc-name"
      onChange={handleInputChange}
    />
  );
};
