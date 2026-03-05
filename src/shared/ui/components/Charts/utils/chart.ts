import { DateTimeFormatOptions } from 'next-intl';

import { ChartsPeriodSelectValue } from '@/shared/ui/components/Charts/types';

export const X_AXIS_DAY_MONTH_FORMAT_OPTIONS: DateTimeFormatOptions = {
  day: 'numeric',
  month: 'short',
  timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
};

export const X_AXIS_MONTH_FORMAT_OPTIONS: DateTimeFormatOptions = {
  month: 'short',
  timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
};

export function getXAxisFormatOptions(
  period: ChartsPeriodSelectValue,
): DateTimeFormatOptions {
  switch (period) {
    case ChartsPeriodSelectValue.LAST_365_DAYS:
    case ChartsPeriodSelectValue.YEAR_TO_DATE:
      return X_AXIS_MONTH_FORMAT_OPTIONS;
    default:
      return X_AXIS_DAY_MONTH_FORMAT_OPTIONS;
  }
}
