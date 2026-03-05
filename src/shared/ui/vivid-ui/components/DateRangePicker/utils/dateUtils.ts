import { DateRange } from 'react-day-picker';

import { addDays, format, isAfter, isBefore, isValid, parse } from 'date-fns';

import {
  DATE_FORMAT,
  DISPLAY_DATE_FORMAT,
  DISPLAY_DATE_FORMAT_WITH_YEAR,
} from '@/shared/ui/vivid-ui/components/DatePicker/constants';

import { DATE_RANGE_SEPARATOR } from '../constants';

export const formatDateRangeDisplay = (
  value: DateRange | undefined,
): { from: string; single: string; to: string } => {
  if (!value?.from) {
    return { from: '', single: '', to: '' };
  }

  const fromYear = value.from.getFullYear();
  const toYear = value?.to?.getFullYear();

  // If it's the same year and it's the current year
  const isSameYear = fromYear === toYear;

  let fromFormatted: string;
  let toFormatted: string;

  if (isSameYear) {
    // Both in same year: "Jan 24 – Feb 7, 2025"
    fromFormatted = format(value.from, DISPLAY_DATE_FORMAT);
    toFormatted = value?.to
      ? format(value.to, DISPLAY_DATE_FORMAT_WITH_YEAR)
      : format(value.from, DISPLAY_DATE_FORMAT_WITH_YEAR);
  } else {
    // Different years: "Dec 24, 2024 – Jan 7, 2025"
    fromFormatted = format(value.from, DISPLAY_DATE_FORMAT_WITH_YEAR);
    toFormatted = value?.to
      ? format(value.to, DISPLAY_DATE_FORMAT_WITH_YEAR)
      : '';
  }

  const singleFormatted = value?.to
    ? `${fromFormatted}${DATE_RANGE_SEPARATOR}${toFormatted}`
    : fromFormatted;

  return {
    from: fromFormatted,
    single: singleFormatted,
    to: toFormatted,
  };
};

export const formatDateRange = (
  value: DateRange | undefined,
  isDisplayFormatShown: boolean = false,
): { from: string; single: string; to: string } => {
  if (isDisplayFormatShown) {
    return formatDateRangeDisplay(value);
  }

  const fromFormatted = value?.from ? format(value.from, DATE_FORMAT) : '';
  const toFormatted = value?.to ? format(value.to, DATE_FORMAT) : '';

  const singleFormatted = value?.to
    ? `${fromFormatted}${DATE_RANGE_SEPARATOR}${toFormatted}`
    : fromFormatted;

  return {
    from: fromFormatted,
    single: singleFormatted,
    to: toFormatted,
  };
};

export const parseDateFromInput = (inputValue: string): Date | null => {
  const isCompleteMask = inputValue.length === DATE_FORMAT.length;

  if (!isCompleteMask) {
    return null;
  }

  const parsedDate = parse(inputValue, DATE_FORMAT, new Date());

  if (!isValid(parsedDate)) {
    return null;
  }

  return parsedDate;
};

export const createDateRangeFromDates = (
  newDate: Date,
  existingRange?: DateRange,
): DateRange => {
  if (!existingRange?.to) {
    return { from: newDate, to: existingRange?.to };
  }

  if (isAfter(newDate, existingRange.to)) {
    return { from: existingRange.to, to: newDate };
  }

  return { from: newDate, to: existingRange.to };
};

export const createDateRangeFromEndDate = (
  newDate: Date,
  existingRange?: DateRange,
): DateRange => {
  if (!existingRange?.from) {
    return { from: existingRange?.from, to: newDate };
  }

  if (isBefore(newDate, existingRange.from)) {
    return {
      from: addDays(new Date(+newDate - (+existingRange.from - +newDate)), 1),
      to: newDate,
    };
  }

  return { from: existingRange.from, to: newDate };
};

export const parseSingleInputRange = (
  inputValue: string,
): DateRange | undefined => {
  if (inputValue === '') {
    return;
  }

  const parts = inputValue.split(DATE_RANGE_SEPARATOR);

  if (parts.length === 2) {
    return parseDoubleRangeInput(parts);
  }

  if (parts.length === 1) {
    return parseSingleRangeInput(parts);
  }

  return;
};

const parseDoubleRangeInput = (parts: string[]): DateRange | undefined => {
  const fromPart = parts[0]?.trim();
  const toPart = parts[1]?.trim();

  const isValidLength =
    fromPart &&
    toPart &&
    fromPart.length === DATE_FORMAT.length &&
    toPart.length === DATE_FORMAT.length;

  if (!isValidLength) {
    return;
  }

  const fromDate = parse(fromPart, DATE_FORMAT, new Date());
  const toDate = parse(toPart, DATE_FORMAT, new Date());

  if (!isValid(fromDate) || !isValid(toDate)) {
    return;
  }

  if (isBefore(fromDate, toDate)) {
    return { from: fromDate, to: toDate };
  }

  return { from: toDate, to: fromDate };
};

const parseSingleRangeInput = (parts: string[]): DateRange | undefined => {
  const singlePart = parts[0]?.trim();

  if (!singlePart || singlePart.length !== DATE_FORMAT.length) {
    return;
  }

  const date = parse(singlePart, DATE_FORMAT, new Date());

  if (!isValid(date)) {
    return;
  }

  return { from: date, to: undefined };
};
