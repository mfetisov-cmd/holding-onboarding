import { DateTimeFormatOptions, useFormatter } from 'next-intl';

export const DEFAULT_DATE_FORMAT_OPTIONS: DateTimeFormatOptions = {
  day: '2-digit',
  hour12: false,
  month: 'short',
  year: 'numeric',
};

export const DATE_WITH_TIMEZONE_FORMAT_OPTIONS: DateTimeFormatOptions = {
  day: '2-digit',
  hour12: false,
  month: 'short',
  timeZone: new Intl.DateTimeFormat().resolvedOptions().timeZone,
  year: 'numeric',
};

export const useDateFormatter = (
  options = DEFAULT_DATE_FORMAT_OPTIONS,
): [format: (date?: Date | number) => string] => {
  const { dateTime } = useFormatter();

  const handleFormat = (date?: Date | number) => {
    if (!date) {
      return '';
    }
    return dateTime(date, options);
  };

  return [handleFormat];
};

export const useLongMonthFormatter = () => {
  return useDateFormatter({
    month: 'long',
  });
};
