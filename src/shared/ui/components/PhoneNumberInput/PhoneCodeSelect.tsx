import React, {
  ChangeEvent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';

import { createQaIdAttribute } from '@utils/qaIds';
import { useTranslations } from 'next-intl';
import { useTheme } from 'styled-components';

import {
  StyledDropList,
  StyledIconView,
  StyledListBox,
  StyledListItemCode,
  StyledListItemCountry,
  StyledListItemTitle,
  StyledSelectBox,
} from '@/shared/ui/components/PhoneNumberInput/styles';
import { DropListOption } from '@/shared/ui/vivid-ui/components/DropList';
import {
  ArrowDownCenter24,
  ArrowUp24,
} from '@/shared/ui/vivid-ui/components/Icons';
import { Input } from '@/shared/ui/vivid-ui/components/Input';
import { AdaptiveSelect } from '@/shared/ui/vivid-ui/components/Select';
import { Spacer } from '@/shared/ui/vivid-ui/components/Spacer';
import { useOnOutside, useThemeBreakpoints } from '@/shared/ui/vivid-ui/hooks';

import { PhoneCodeSelectProps } from './types';

export const PhoneCodeSelect = ({
  codeValue,
  countries,
  country,
  dataQaId,
  disabled,
  error,
  id,
  onSetCodeValue,
  onSetCountry,
  qaId,
  size,
}: PhoneCodeSelectProps) => {
  const t = useTranslations('common');
  const theme = useTheme();
  const optionsListRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const { isDesktop } = useThemeBreakpoints();

  // Filter countries list by manually typed text in code input
  const filteredCountries = useMemo(() => {
    if (!codeValue) return countries;
    return countries.filter(
      (it) =>
        it.phoneCode.includes(codeValue) ||
        it.localizedName.toLowerCase().includes(codeValue.toLowerCase()),
    );
  }, [countries, codeValue]);

  const handleOpen = useCallback(() => {
    if (!disabled) {
      setOpen(true);
    }
  }, [disabled]);

  const handleOutsideListClick = useCallback(() => {
    setOpen(false);
  }, []);

  const handleSelect = useCallback(
    (payload: DropListOption) => {
      setOpen(false);
      onSetCodeValue('');
      onSetCountry(countries.find((it) => it.alpha2code === payload.value));
    },
    [countries, onSetCountry, onSetCodeValue],
  );

  const handleCodeChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onSetCountry(undefined);
      onSetCodeValue(e.currentTarget.value);
    },
    [onSetCountry, onSetCodeValue],
  );

  useOnOutside({
    event: 'mousedown',
    onClick: handleOutsideListClick,
    target: optionsListRef,
  });

  const options = useMemo(
    () =>
      filteredCountries.map((it) => ({
        ...createQaIdAttribute(qaId, it.alpha2code),
        label: it.localizedName,
        labelPosition: 'down' as 'down',
        leftIcon: (
          <StyledIconView background={theme.token.color.c3w}>
            {it.emoji}
          </StyledIconView>
        ),
        size,
        title: it.phoneCode,
        value: it.alpha2code,
      })),
    [filteredCountries, size, theme, qaId],
  );

  const leftIcon = country?.emoji && (
    <StyledIconView
      background={open ? theme.token.color.c3w : theme.token.color.c14}
    >
      {country?.emoji}
    </StyledIconView>
  );

  if (!isDesktop) {
    return (
      <AdaptiveSelect
        {...createQaIdAttribute(dataQaId)}
        error={!!error}
        leftIcon={leftIcon}
        options={options}
        placeholder={t('form.phone_input.code_placeholder')}
        size={size}
        value={codeValue || country?.phoneCode}
        onInput={handleCodeChange}
        onSelect={handleSelect}
      />
    );
  }

  return (
    <StyledSelectBox>
      <div onClick={handleOpen}>
        <Input
          {...createQaIdAttribute(dataQaId)}
          disabled={disabled}
          error={!!error}
          leftIcon={leftIcon}
          placeholder={t('form.phone_input.code_placeholder')}
          rightIcon={
            open ? (
              <ArrowUp24 color={theme.token.color.c3} />
            ) : (
              <ArrowDownCenter24 color={theme.token.color.c3} />
            )
          }
          size={size}
          value={codeValue || country?.phoneCode}
          variant="outlined"
          onFocus={handleOpen}
          onInput={handleCodeChange}
        />
      </div>
      {open && (
        <StyledListBox
          id={`${id}-listbox`}
          aria-labelledby={`${id}-label`}
          ref={optionsListRef}
          role="listbox"
        >
          <Spacer size={2} />
          <StyledDropList
            isDividersVisible
            options={filteredCountries.map((it) => ({
              ...createQaIdAttribute(qaId, it.alpha2code),
              leftIcon: (
                <StyledIconView background={theme.token.color.c3w}>
                  {it.emoji}
                </StyledIconView>
              ),
              title: (
                <StyledListItemTitle>
                  <StyledListItemCode>{it.phoneCode}</StyledListItemCode>{' '}
                  <StyledListItemCountry>
                    {it.localizedName}
                  </StyledListItemCountry>
                </StyledListItemTitle>
              ),
              value: it.alpha2code,
            }))}
            size={size}
            onClick={handleSelect}
          />
        </StyledListBox>
      )}
    </StyledSelectBox>
  );
};
