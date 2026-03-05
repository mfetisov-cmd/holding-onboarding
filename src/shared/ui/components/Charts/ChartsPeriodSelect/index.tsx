import { useCallback, useMemo } from 'react';

import { useTranslations } from 'next-intl';

import { ChartsPeriodSelectValue } from '@/shared/ui/components/Charts/types';
import {
  Select,
  SelectOption,
  SelectProps,
} from '@/shared/ui/vivid-ui/components/Select';

type ChartsPeriodSelectProps = Omit<SelectProps, 'options'> & {
  onPeriodChange: (period: ChartsPeriodSelectValue) => void;
};

export const ChartsPeriodSelect = ({
  onPeriodChange,
  value,
  ...selectProps
}: ChartsPeriodSelectProps) => {
  const t = useTranslations('home.home_page.widgets.charts.period_select');

  const handlePeriodSelect = useCallback(
    (value: SelectOption) => {
      onPeriodChange(value.value as ChartsPeriodSelectValue);
    },
    [onPeriodChange],
  );

  const selectOptions = useMemo(
    () => [
      {
        title: t('last_x_days', { count: 7 }),
        value: ChartsPeriodSelectValue.LAST_7_DAYS,
      },
      {
        title: t('last_x_days', { count: 30 }),
        value: ChartsPeriodSelectValue.LAST_30_DAYS,
      },
      {
        title: t('last_x_days', { count: 90 }),
        value: ChartsPeriodSelectValue.LAST_90_DAYS,
      },
      {
        title: t('last_x_days', { count: 365 }),
        value: ChartsPeriodSelectValue.LAST_365_DAYS,
      },
      {
        title: t('week_to_date'),
        value: ChartsPeriodSelectValue.WEEK_TO_DATE,
      },
      {
        title: t('month_to_date'),
        value: ChartsPeriodSelectValue.MONTH_TO_DATE,
      },
      {
        title: t('quarter_to_date'),
        value: ChartsPeriodSelectValue.QUARTER_TO_DATE,
      },
      {
        title: t('year_to_date'),
        value: ChartsPeriodSelectValue.YEAR_TO_DATE,
      },
    ],
    [t],
  );

  const selectValue = useMemo(
    () => selectOptions.find((option) => option.value === value),
    [selectOptions, value],
  );

  return (
    <Select
      options={selectOptions}
      size="small"
      value={selectValue}
      onSelect={handlePeriodSelect}
      {...selectProps}
    />
  );
};
