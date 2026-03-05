'use client';

import {
  KeyboardEventHandler,
  MouseEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { useMaskito } from '@maskito/react';
import { format, isValid, parse } from 'date-fns';
import { useTheme } from 'styled-components';

import { Calendar } from '@/shared/ui/vivid-ui/components/Calendar';
import { getIconSize } from '@/shared/ui/vivid-ui/components/DatePicker/utils/getIconSize';
import {
  Input,
  PolymorphicInputProps,
} from '@/shared/ui/vivid-ui/components/Input';
import { Popover } from '@/shared/ui/vivid-ui/components/Popover';
import { Size } from '@/shared/ui/vivid-ui/shared';

import { CalendarIcon } from './CalendarIcon';
import { DATE_FORMAT, options } from './constants';
import { InputContainer } from './styles';

type DateFormat =
  | {
      dateFormat: string;
      isManualInputDisabled: true;
    }
  | {
      dateFormat?: never;
      isManualInputDisabled?: false;
    };

export type DatePickerProps = Omit<
  PolymorphicInputProps,
  'max' | 'min' | 'onChange' | 'onError' | 'rightIcon' | 'value'
> & {
  maxDate?: Date;
  minDate?: Date;
  onChange?: (date: Date | undefined) => void;
  onError?: (hasError: boolean) => void;
  size?: Size;
  value?: Date;
} & DateFormat;

export const DatePicker = ({
  className,
  dateFormat = DATE_FORMAT,
  disabled,
  fullWidth,
  isManualInputDisabled,
  label,
  maxDate,
  minDate,
  onChange,
  onError,
  placeholder,
  size = 'medium',
  value,
  ...inputProps
}: DatePickerProps) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [month, setMonth] = useState(value || new Date());
  const [hasError, setHasError] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);
  const inputRef = useMaskito({
    options: isManualInputDisabled ? undefined : options,
  });

  const iconSize = getIconSize(size);

  const handleErrorChange = useCallback(
    (hasError: boolean) => {
      setHasError(hasError);
      onError?.(hasError);
    },
    [onError],
  );

  useEffect(() => {
    if (value) {
      setInputValue(format(value, dateFormat));
      setMonth(value);
    } else {
      setInputValue('');
    }
    handleErrorChange(false);
  }, [value, handleErrorChange, dateFormat]);

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

  const handleDateSelect = useCallback(
    (selectedDate: Date | undefined) => {
      if (selectedDate) {
        setInputValue(format(selectedDate, dateFormat));
        onChange?.(selectedDate);
      } else {
        setInputValue('');
        onChange?.(undefined);
      }
      setIsOpen(false);
    },
    [onChange, dateFormat],
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInputValue(newValue);

      if (newValue === '') {
        onChange?.(undefined);
        handleErrorChange(false);
        return;
      }

      const isCompleteMask = newValue.length === DATE_FORMAT.length;

      if (!isCompleteMask) {
        handleErrorChange(false);
        return;
      }

      const parsedDate = parse(newValue, DATE_FORMAT, new Date());

      if (!isValid(parsedDate)) {
        handleErrorChange(true);
        return;
      }

      const isDateInRange =
        (!minDate || parsedDate >= minDate) &&
        (!maxDate || parsedDate <= maxDate);

      if (isDateInRange) {
        onChange?.(parsedDate);
        setMonth(parsedDate);
        handleErrorChange(false);
      } else {
        handleErrorChange(true);
      }
    },
    [onChange, minDate, maxDate, handleErrorChange],
  );

  const handleCalendarClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      e.stopPropagation();
      setIsOpen((prev) => !prev);
    },
    [],
  );

  const handleInputClick: MouseEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      if (isManualInputDisabled) {
        !isOpen && setIsOpen(true);
        return;
      }

      isOpen && setIsOpen(false);
    },
    [disabled, isManualInputDisabled, isOpen],
  );

  const handleInputFocus = useCallback(() => {
    if (disabled) {
      return;
    }

    if (!isOpen && isManualInputDisabled) {
      setIsOpen(true);
    }
  }, [disabled, isManualInputDisabled, isOpen]);

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

  const calendarContent = (
    <div ref={calendarRef}>
      <Calendar
        autoFocus
        disabled={disabledDates.length > 0 ? disabledDates : undefined}
        fixedWeeks={true}
        mode="single"
        month={month}
        selected={value}
        onMonthChange={setMonth}
        onSelect={handleDateSelect}
      />
    </div>
  );

  const inputDefaultPlaceholder =
    !placeholder && !label ? dateFormat?.toLowerCase() : undefined;

  return (
    <Popover
      content={calendarContent}
      fullWidth={fullWidth}
      isOpen={isOpen}
      noContentPadding
      zIndex={theme.token.zIndex.overlay + 1}
      onIsOpenChange={setIsOpen}
    >
      <InputContainer
        $cursorPointer={isManualInputDisabled}
        className={className}
      >
        <Input
          disabled={disabled}
          error={hasError}
          fullWidth={fullWidth}
          label={label}
          placeholder={placeholder ?? inputDefaultPlaceholder}
          readOnly={isManualInputDisabled}
          ref={inputRef}
          rightIcon={
            <CalendarIcon
              disabled={disabled}
              isButton={!isManualInputDisabled}
              size={iconSize}
              onClick={handleCalendarClick}
            />
          }
          size={size}
          value={inputValue}
          onClick={handleInputClick}
          onFocus={handleInputFocus}
          onInput={isManualInputDisabled ? undefined : handleInputChange}
          onKeyDown={handleInputKeyDown}
          {...inputProps}
        />
      </InputContainer>
    </Popover>
  );
};
