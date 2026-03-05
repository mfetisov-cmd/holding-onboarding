import { useCallback } from 'react';

import { NumberFormatOptions, useFormatter } from 'next-intl';

import { Money } from '@/shared/api/main/generated/google/type/money_pb';
import { moneyToNumber } from '@/shared/lib/utils/convert/google/type/money';
import { CurrencyCodes } from '@/shared/model/constants/CurrencyCodes';

export const DEFAULT_MONEY_FORMAT_OPTIONS: NumberFormatOptions = {
  maximumFractionDigits: 2,
  // minimumFractionDigits: 2,
  style: 'currency',
  // @ts-ignore
  // trailingZeroDisplay: 'stripIfInteger',
};

export const useMoneyFormatter = (
  globalOptions = DEFAULT_MONEY_FORMAT_OPTIONS,
) => {
  const { number } = useFormatter();

  const formatMoney = useCallback(
    (amount?: Money, optionsOverride?: Partial<NumberFormatOptions>) => {
      const options = optionsOverride
        ? { ...globalOptions, ...optionsOverride }
        : globalOptions;
      const amountNumber = amount ? moneyToNumber(amount) : undefined;

      if (typeof amountNumber === 'undefined') {
        return '';
      }

      const defaultMinimumFractionDigits =
        amountNumber === parseInt(`${amountNumber}`) ? 0 : 2;

      const maximumFractionDigitsForCurrency = amount
        ? CurrencyCodes[amount.getCurrencyCode()]
            ?.numberOfDigitsAfterDecimalSeparator
        : undefined;

      const minimumFractionDigits = options.minimumFractionDigits
        ? options.minimumFractionDigits
        : defaultMinimumFractionDigits;

      return number(amountNumber, {
        ...options,
        currency: amount?.getCurrencyCode(),
        // TODO remove after upgrading to node version > 19 which supports 'trailingZeroDisplay'-prop
        minimumFractionDigits:
          typeof maximumFractionDigitsForCurrency !== 'undefined'
            ? Math.min(minimumFractionDigits, maximumFractionDigitsForCurrency)
            : minimumFractionDigits,
      });
    },
    [number, globalOptions],
  );

  return { formatMoney };
};
