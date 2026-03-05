import React, {
  ChangeEvent,
  ClipboardEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { createQaIdAttribute } from '@utils/qaIds';
import {
  CountryCode,
  getCountryCallingCode,
  isValidPhoneNumber,
  parsePhoneNumber,
  PhoneNumber,
} from 'libphonenumber-js/max';
import { useTranslations } from 'next-intl';
import { useTheme } from 'styled-components';

import { compareLocalizedCountryCodesEEAFirst } from '@/shared/lib/utils/countries/compareLocalizedCountryCodesEEAFirst';
import { getCountryFlag } from '@/shared/lib/utils/countries/getCountryFlag';
import { getLocalizedCountryCodes } from '@/shared/lib/utils/countries/getLocalizedCountryCodes';
import { PhoneCodeSelect } from '@/shared/ui/components/PhoneNumberInput/PhoneCodeSelect';
import { Input } from '@/shared/ui/vivid-ui/components/Input';
import { Spacer } from '@/shared/ui/vivid-ui/components/Spacer';
import { Typography } from '@/shared/ui/vivid-ui/components/Typography';

import { StyledInputBox, StyledPhoneNumberBox } from './styles';
import {
  Country,
  PhoneNumberInputChangePayload,
  PhoneNumberInputProps,
} from './types';

export type { PhoneNumberInputChangePayload };

export const PhoneNumberInput = ({
  autoFocus,
  country: countryProp,
  dataQaIdCountry,
  dataQaIdNumber,
  disabled,
  error,
  id = 'phone-number',
  locale,
  onChange,
  onCountryChange,
  qaId,
  showErrorSpacer = true,
  size,
  value,
}: PhoneNumberInputProps) => {
  const t = useTranslations('common');
  const theme = useTheme();
  const [country, setCountry] = useState<Country>();
  const [codeValue, setCodeValue] = useState('');
  const [number, setNumber] = useState('');

  const countries: Country[] = useMemo(
    () =>
      getLocalizedCountryCodes(locale)
        .filter((it) => it.alpha2code !== 'XX')
        .sort(compareLocalizedCountryCodesEEAFirst)
        .map((it) => ({
          ...it,
          emoji: getCountryFlag(it.alpha2code),
          phoneCode: `+${getCountryCallingCode(it.alpha2code as CountryCode)}`,
        })),
    [locale],
  );

  // Initialising values on the first render with parsed phone parameters
  useEffect(() => {
    let parsedNumber = {} as PhoneNumber;
    try {
      if (value) {
        parsedNumber = parsePhoneNumber(value);
      }
    } catch (e) {
      // ignore parsing errors and initialize as empty
    }
    const { country, nationalNumber } = parsedNumber;

    if (country || countryProp) {
      setCountry(
        countries.find((it) => it.alpha2code === (country || countryProp)),
      );
    }
    if (nationalNumber) {
      setNumber(nationalNumber);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (onChange) {
      const code = (country?.phoneCode || codeValue || '').replace(
        /[^0-9]/g,
        '',
      );
      const combined = code && number ? `+${code}${number}` : '';
      onChange({
        combined,
        country,
        isValid: isValidPhoneNumber(combined),
        number,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country, number, codeValue]);

  const parseUserValue = useCallback(
    (value: string) => {
      const { country, nationalNumber } = parsePhoneNumber(value);
      if (!country && !nationalNumber) return false;
      if (country) {
        setCountry(countries.find((it) => it.alpha2code === country));
      }
      if (nationalNumber) {
        setNumber(nationalNumber);
      }
      return { country, nationalNumber };
    },
    [countries],
  );

  const handleNumberChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/[^0-9]/g, '');

      // https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/inputType
      // If inputType is undefined we can treat it as "non-user input", e.g. autocomplete or autofill
      // @ts-ignore
      const isAutocomplete = !e.nativeEvent.inputType;
      if (!isAutocomplete) {
        setNumber(value);
        return;
      }

      if (e.target.value[0] === '+') {
        const parsed = parseUserValue(`+${value}`);
        if (parsed) {
          return;
        }
      }

      setNumber(value);
    },
    [parseUserValue],
  );

  const handleNumberPaste = useCallback(
    (e: ClipboardEvent) => {
      e.preventDefault();
      const value = e.clipboardData?.getData('text').replace(/[^0-9+]/g, '');
      if (!value) {
        return;
      }
      if (value[0] === '+') {
        parseUserValue(value);
      } else {
        setNumber(value);
      }
    },
    [parseUserValue],
  );

  const handleCountryChange = useCallback(
    (value?: Country) => {
      onCountryChange?.(value);
      setCountry(value);
    },
    [onCountryChange],
  );

  return (
    <>
      <StyledPhoneNumberBox>
        <PhoneCodeSelect
          id={id}
          codeValue={codeValue}
          countries={countries}
          country={country}
          dataQaId={dataQaIdCountry}
          disabled={disabled}
          error={error}
          qaId={qaId}
          size={size}
          onSetCodeValue={setCodeValue}
          onSetCountry={handleCountryChange}
        />
        <StyledInputBox>
          <Input
            {...createQaIdAttribute(dataQaIdNumber)}
            name="tel"
            autoFocus={autoFocus}
            disabled={disabled}
            error={!!error}
            placeholder={t('form.phone_input.number_placeholder')}
            size={size}
            type="tel"
            value={number}
            onChange={handleNumberChange}
            onPaste={handleNumberPaste}
          />
        </StyledInputBox>
      </StyledPhoneNumberBox>
      {error && (
        <>
          {showErrorSpacer && <Spacer size={2} />}
          <Typography
            color={theme.token.color.c8}
            style={{ textAlign: 'left' }}
            variant="paragraphS"
          >
            {error}
          </Typography>
        </>
      )}
    </>
  );
};
