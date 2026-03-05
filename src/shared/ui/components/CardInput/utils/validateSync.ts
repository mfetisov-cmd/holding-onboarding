import { useTranslations } from 'next-intl';

import { useValueStorage } from '@/app/config/ValueStorageProvider';
import { getOrCreateValueEmitter } from '@/shared/lib/emitter/value';

import { isLuhnValid } from './luhn';
import { CardInputState, defaultCardInputState } from './useCardInputState';
import { validateExpirationDate } from './validateExpirationDate';

const validateCardholderName = (
  cardHolderName: string | undefined,
  t: ReturnType<typeof useTranslations>,
) => {
  if (!cardHolderName) {
    return t('card_holder_name_required');
  }

  if (cardHolderName.length < 2) {
    return t('card_holder_name_too_short');
  }

  return null;
};

const validateCvv = (
  cvv: string | undefined,
  t: ReturnType<typeof useTranslations>,
) => {
  if (!cvv) {
    return t('cvv_required');
  }

  if (cvv.length < 3) {
    return t('cvv_too_short');
  }

  return null;
};

const validateDate = (
  expirationMonth: string | undefined,
  expirationYear: string | undefined,
  t: ReturnType<typeof useTranslations>,
) => {
  if (!expirationMonth && !expirationYear) {
    return t('expiration_date_required');
  }

  if (!expirationMonth || !expirationYear) {
    return t('expiration_date_incomplete');
  }

  if (!validateExpirationDate(`${expirationMonth}${expirationYear}`)) {
    return t('expiration_date_invalid');
  }

  return null;
};

const validatePan = (
  pan: string | undefined,
  t: ReturnType<typeof useTranslations>,
) => {
  if (!pan) {
    return t('pan_required');
  }

  if (!isLuhnValid(pan)) {
    return t('pan_invalid');
  }

  return null;
};

export const useCardSyncValidation = () => {
  const storage = useValueStorage();
  const emitter = getOrCreateValueEmitter<CardInputState>(
    { id: 'CardInputState', initialValue: defaultCardInputState },
    storage,
  );
  const t = useTranslations('add_money.card_top_up.validation');

  return () => {
    const data = emitter.get();
    const validationResult = {
      cardHolderNameValidationError: data.hideCardholderName
        ? undefined
        : validateCardholderName(data.cardHolderName, t),
      cvvValidationError: validateCvv(data.cvv, t),
      expirationDateValidationError: validateDate(
        data.expirationMonth,
        data.expirationYear,
        t,
      ),
      panValidationError: validatePan(data.cardNumber, t),
    };
    emitter.update(validationResult);

    return Object.values(validationResult).every((error) => !error);
  };
};
