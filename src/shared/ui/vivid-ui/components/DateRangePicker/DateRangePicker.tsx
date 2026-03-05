'use client';

import React, {
  KeyboardEventHandler,
  MouseEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { DateRange } from 'react-day-picker';

import { useMaskito } from '@maskito/react';
import styled, { useTheme } from 'styled-components';

import { IconButton } from '@/shared/ui/components/IconButton';
import { Calendar } from '@/shared/ui/vivid-ui/components/Calendar';
import {
  DATE_FORMAT,
  options as dateOptions,
} from '@/shared/ui/vivid-ui/components/DatePicker/constants';
import { InputContainer } from '@/shared/ui/vivid-ui/components/DatePicker/styles';
import { getIconSize } from '@/shared/ui/vivid-ui/components/DatePicker/utils/getIconSize';
import { Calendar24 } from '@/shared/ui/vivid-ui/components/Icons';
import { Input, InputProps } from '@/shared/ui/vivid-ui/components/Input';
import { CenteredBox } from '@/shared/ui/vivid-ui/components/Layout';
import { Popover } from '@/shared/ui/vivid-ui/components/Popover';
import { Size } from '@/shared/ui/vivid-ui/shared';

import { dateRangeOptions } from './constants';
import {
  createDateRangeFromDates,
  createDateRangeFromEndDate,
  formatDateRange,
  parseDateFromInput,
  parseSingleInputRange,
} from './utils/dateUtils';

const StyledPopover = styled(Popover)`
  height: ${({ theme }) => theme.token.sizeUnits(143)};
`;

type DateFormat =
  | {
      isDisplayFormatShown?: boolean;
      isManualInputDisabled: true;
    }
  | {
      isDisplayFormatShown?: never;
      isManualInputDisabled?: false;
    };

export type DateRangePickerProps = {
  className?: string;
  error?: boolean;
  fullWidth?: boolean;
  iconPosition?: 'left' | 'right';
  isSameDateIntervalAllowed?: boolean;
  isSingleInput?: boolean;
  leftInputProps?: InputProps;
  maxDate?: Date;
  minDate?: Date;
  numberOfMonths?: number;
  onChange?: (range: DateRange | undefined) => void;
  rightInputProps?: InputProps;
  singleInputProps?: InputProps;
  size?: Size;
  value?: DateRange;
} & DateFormat;

export const DateRangePicker = ({
  className,
  error = false,
  fullWidth,
  iconPosition = 'right',
  isDisplayFormatShown,
  isManualInputDisabled,
  isSameDateIntervalAllowed,
  isSingleInput,
  leftInputProps,
  maxDate,
  minDate,
  numberOfMonths = 2,
  onChange,
  rightInputProps,
  singleInputProps,
  size = 'medium',
  value,
}: DateRangePickerProps) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [month, setMonth] = useState(value?.from || new Date());
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const [singleInputValue, setSingleInputValue] = useState('');
  const [fromError, setFromError] = useState(false);
  const [toError, setToError] = useState(false);
  const [singleInputError, setSingleInputError] = useState(false);
  const [activeInput, setActiveInput] = useState<'from' | 'to'>('from');
  const calendarRef = useRef<HTMLDivElement>(null);

  const iconSize = getIconSize(size);

  useEffect(() => {
    const formatted = formatDateRange(value, isDisplayFormatShown);

    setFromValue(formatted.from);

    if (!isOpen && value?.from) {
      setMonth(value.from);
    }

    if (!isSingleInput) {
      setToValue(formatted.to);
      setFromError(false);
      setToError(false);
      return;
    }

    // Don't clear input if user is typing
    // (when formatted value is empty but input has text)
    if (!(formatted.single === '' && singleInputValue.length > 0)) {
      setSingleInputValue(formatted.single);
    }
    setSingleInputError(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const disabledDates = useMemo(() => {
    const matchers = [];

    if (minDate) {
      matchers.push({ before: minDate });
    }

    if (maxDate) {
      matchers.push({ after: maxDate });
    }

    return matchers;
  }, [minDate, maxDate]);

  const isDateRangeValid = useCallback(
    (range: DateRange | undefined): boolean => {
      if (!range) return true;

      const isFromValid =
        !range.from ||
        ((!minDate || range.from >= minDate) &&
          (!maxDate || range.from <= maxDate));

      const isToValid =
        !range.to ||
        ((!minDate || range.to >= minDate) &&
          (!maxDate || range.to <= maxDate));

      return isFromValid && isToValid;
    },
    [minDate, maxDate],
  );

  const fromInputRef = useMaskito({
    options: isManualInputDisabled ? undefined : dateOptions,
  });

  const toInputRef = useMaskito({
    options: isManualInputDisabled ? undefined : dateOptions,
  });

  const singleInputRef = useMaskito({
    options: isManualInputDisabled ? undefined : dateRangeOptions,
  });

  const handleRangeSelect = useCallback(
    (selectedRange: DateRange | undefined, triggerDate: Date) => {
      // If editing "to" and the selected date is after "from", update only "to"
      if (
        activeInput === 'to' &&
        value?.from &&
        value?.to &&
        (triggerDate > value.from ||
          (isSameDateIntervalAllowed && triggerDate >= value.from))
      ) {
        onChange?.({ from: value.from, to: triggerDate });
        setIsOpen(false);
        return;
      }

      // If a full range is already selected, start a new range
      if (value?.from && value?.to) {
        selectedRange = {
          from: triggerDate,
          to: undefined,
        };
      }

      // if from is selected, and to is not - set to equal to triggerDate to allow same date intervals
      if (isSameDateIntervalAllowed && value?.from && !value.to) {
        selectedRange = {
          from: selectedRange?.from,
          to: triggerDate,
        };
      }

      onChange?.(selectedRange);

      if (selectedRange?.from && selectedRange?.to) {
        setIsOpen(false);
      }
    },
    [onChange, setIsOpen, value, isSameDateIntervalAllowed, activeInput],
  );

  const handleFromChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setFromValue(newValue);

      if (newValue === '') {
        onChange?.(undefined);
        setFromError(false);
        return;
      }

      const parsedDate = parseDateFromInput(newValue);

      if (!parsedDate) {
        setFromError(false);
        return;
      }

      const isDateValid =
        (!minDate || parsedDate >= minDate) &&
        (!maxDate || parsedDate <= maxDate);

      if (isDateValid) {
        const newRange = createDateRangeFromDates(parsedDate, value);
        onChange?.(newRange);
        setMonth(parsedDate);
        setFromError(false);
      } else {
        setFromError(true);
      }
    },
    [onChange, value, setFromValue, setMonth, minDate, maxDate],
  );

  const handleToChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setToValue(newValue);

      if (newValue === '') {
        onChange?.({ from: value?.from, to: undefined });
        setToError(false);
        return;
      }

      const parsedDate = parseDateFromInput(newValue);

      if (!parsedDate) {
        setToError(false);
        return;
      }

      const isDateValid =
        (!minDate || parsedDate >= minDate) &&
        (!maxDate || parsedDate <= maxDate);

      if (isDateValid) {
        const newRange = createDateRangeFromEndDate(parsedDate, value);
        onChange?.(newRange);
        setToError(false);
      } else {
        setToError(true);
      }
    },
    [onChange, value, setToValue, minDate, maxDate],
  );

  const handleSingleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setSingleInputValue(newValue);

      if (newValue === '') {
        onChange?.(undefined);
        setSingleInputError(false);
        return;
      }

      const parsedRange = parseSingleInputRange(newValue);

      if (isDateRangeValid(parsedRange)) {
        onChange?.(parsedRange);

        if (parsedRange?.from) {
          setMonth(parsedRange.from);
        }
        setSingleInputError(false);
      } else if (parsedRange) {
        setSingleInputError(true);
      } else {
        setSingleInputError(false);
      }
    },
    [onChange, setSingleInputValue, setMonth, isDateRangeValid],
  );

  const handleCalendarClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  const handleInputKeyDown: KeyboardEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        if (e.key === 'Tab' && !e.shiftKey && isOpen) {
          e.preventDefault();

          // Focus the first focusable element in the calendar
          const firstFocusableElement = calendarRef.current?.querySelector(
            'button, [tabindex]:not([tabindex="-1"])',
          ) as HTMLElement;

          firstFocusableElement?.focus();
        }
      },
      [isOpen],
    );

  const handleInputClick: MouseEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      e.stopPropagation();

      if (isManualInputDisabled) {
        !isOpen && setIsOpen(true);
        return;
      }

      isOpen && setIsOpen(false);
    },
    [isManualInputDisabled, isOpen],
  );

  const calendarContent = (
    <div ref={calendarRef}>
      <Calendar
        autoFocus
        disabled={disabledDates.length > 0 ? disabledDates : undefined}
        min={1}
        mode="range"
        month={month}
        numberOfMonths={numberOfMonths}
        required
        selected={value}
        showOutsideDays={false}
        onMonthChange={setMonth}
        onSelect={handleRangeSelect}
      />
    </div>
  );

  const calendarIcon = isManualInputDisabled ? (
    <Calendar24 color={theme.token.color.c2} size={iconSize} />
  ) : (
    <IconButton
      size="small"
      type="button"
      variant="ghost"
      onClick={handleCalendarClick}
    >
      <Calendar24 size={iconSize} />
    </IconButton>
  );

  const renderInputs = () => {
    if (isSingleInput) {
      const singleInputDefaultPlaceholder =
        !singleInputProps?.placeholder && !singleInputProps?.label
          ? `${DATE_FORMAT.toLowerCase()} – ${DATE_FORMAT.toLowerCase()}`
          : undefined;

      return (
        <InputContainer
          $cursorPointer={isManualInputDisabled}
          className={className}
        >
          <Input
            error={singleInputError}
            fullWidth={fullWidth}
            leftIcon={iconPosition === 'left' ? calendarIcon : undefined}
            placeholder={
              singleInputProps?.placeholder ?? singleInputDefaultPlaceholder
            }
            readOnly={isManualInputDisabled}
            ref={singleInputRef}
            rightIcon={iconPosition === 'right' ? calendarIcon : undefined}
            size={size}
            value={singleInputValue}
            onClick={handleInputClick}
            onInput={
              isManualInputDisabled ? undefined : handleSingleInputChange
            }
            onKeyDown={handleInputKeyDown}
            {...singleInputProps}
          />
        </InputContainer>
      );
    }

    const leftInputDefaultPlaceholder =
      !leftInputProps?.placeholder && !leftInputProps?.label
        ? DATE_FORMAT.toLowerCase()
        : undefined;
    const rightInputDefaultPlaceholder =
      !rightInputProps?.placeholder && !rightInputProps?.label
        ? DATE_FORMAT.toLowerCase()
        : undefined;

    return (
      <CenteredBox gap={theme.token.sizeUnits(4)} width="100%">
        <InputContainer
          $cursorPointer={isManualInputDisabled}
          className={className}
          onClickCapture={() => setActiveInput('from')}
        >
          <Input
            error={fromError || error}
            fullWidth={fullWidth}
            leftIcon={iconPosition === 'left' ? calendarIcon : undefined}
            placeholder={
              leftInputProps?.placeholder ?? leftInputDefaultPlaceholder
            }
            readOnly={isManualInputDisabled}
            ref={fromInputRef}
            rightIcon={iconPosition === 'right' ? calendarIcon : undefined}
            size={size}
            value={fromValue}
            onClick={handleInputClick}
            onInput={isManualInputDisabled ? undefined : handleFromChange}
            onKeyDown={handleInputKeyDown}
            {...leftInputProps}
          />
        </InputContainer>
        <InputContainer
          $cursorPointer={isManualInputDisabled}
          className={className}
          onClickCapture={() => setActiveInput('to')}
        >
          <Input
            error={toError || error}
            fullWidth={fullWidth}
            leftIcon={iconPosition === 'left' ? calendarIcon : undefined}
            placeholder={
              rightInputProps?.placeholder ?? rightInputDefaultPlaceholder
            }
            readOnly={isManualInputDisabled}
            ref={toInputRef}
            rightIcon={iconPosition === 'right' ? calendarIcon : undefined}
            size={size}
            value={toValue}
            onClick={handleInputClick}
            onInput={isManualInputDisabled ? undefined : handleToChange}
            onKeyDown={handleInputKeyDown}
            {...rightInputProps}
          />
        </InputContainer>
      </CenteredBox>
    );
  };

  return (
    <StyledPopover
      content={calendarContent}
      fullWidth={fullWidth}
      isOpen={isOpen}
      noContentPadding
      zIndex={theme.token.zIndex.overlay + 1}
      onIsOpenChange={setIsOpen}
    >
      {renderInputs()}
    </StyledPopover>
  );
};
