import { FormEventHandler, useMemo, useState } from 'react';
import { DateRange } from 'react-day-picker';

import { useTranslations } from 'next-intl';
import { styled } from 'styled-components';

import { getKeys } from '@/shared/lib/utils/object';
import { Chips } from '@/shared/ui/vivid-ui/components/Chips';
import { DateRangePicker } from '@/shared/ui/vivid-ui/components/DateRangePicker';
import { Spacer } from '@/shared/ui/vivid-ui/components/Spacer';
import { Typography } from '@/shared/ui/vivid-ui/components/Typography';

import { Period } from './types';

const StyledPeriodsList = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.token.spacing2XS};
`;

const HiddenInput = styled.input`
  position: absolute;
  left: -10000rem;
  top: auto;
  width: 1rem;
  height: 1rem;
  overflow: hidden;
`;

const toISOString = (date?: Date) => {
  if (!date) {
    return '';
  }

  return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    .toISOString()
    .split('T')[0];
};

function maxDate(...dates: (Date | undefined)[]) {
  return new Date(
    Math.max(...dates.filter((it) => it != null).map((it) => it!.getTime())),
  );
}

function minDate(...dates: (Date | undefined)[]) {
  return new Date(
    Math.min(...dates.filter((it) => it != null).map((it) => it!.getTime())),
  );
}

type GetDateIntervalParams = {
  from: Date;
  max?: Date;
  min?: Date;
  to: Date;
};

const getDateInterval = ({ from, max, min, to }: GetDateIntervalParams) => ({
  from: toISOString(new Date(Math.max(from.getTime(), min?.getTime() || 0))),
  to: toISOString(new Date(Math.min(to.getTime(), max?.getTime() || 0))),
});

export function getCurrentMonth(min?: Date, max?: Date) {
  const now = new Date();
  const from = new Date(now.getFullYear(), now.getMonth(), 1);
  const to = new Date(now.getFullYear(), now.getMonth() + 1, 0);

  if (min && min > to) {
    return;
  }

  return {
    from: toISOString(maxDate(from, min)),
    to: toISOString(minDate(to, max)),
  };
}

function getPreviousMonth(min?: Date, max?: Date) {
  const now = new Date();
  const from = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const to = new Date(now.getFullYear(), now.getMonth(), 0);

  if (min && min > to) {
    return;
  }

  return getDateInterval({ from, max, min, to });
}

function getPreviousYear(min?: Date, max?: Date) {
  const now = new Date();
  const from = new Date(now.getFullYear() - 1, 0, 1);
  const to = new Date(now.getFullYear(), 0, 0);

  if (min && min > to) {
    return;
  }

  return getDateInterval({ from, max, min, to });
}

function getQuarter(quarter: number, min?: Date, max?: Date) {
  const from = new Date();
  const to = new Date();

  if (quarter === 1) {
    from.setMonth(0, 1);
    to.setMonth(2, 31);
  } else if (quarter === 2) {
    from.setMonth(3, 1);
    to.setMonth(5, 30);
  } else if (quarter === 3) {
    from.setMonth(6, 1);
    to.setMonth(8, 30);
  } else if (quarter === 4) {
    from.setMonth(9, 1);
    to.setMonth(11, 31);
  }

  if (min && min > to) {
    return;
  }

  if (max && from > max) {
    return;
  }

  return getDateInterval({ from, max, min, to });
}

const PRESETS = {
  [Period.current_month]: getCurrentMonth,
  [Period.previous_month]: getPreviousMonth,
  [Period.previous_year]: getPreviousYear,
  [Period.q1]: (min?: Date, max?: Date) => getQuarter(1, min, max),
  [Period.q2]: (min?: Date, max?: Date) => getQuarter(2, min, max),
  [Period.q3]: (min?: Date, max?: Date) => getQuarter(3, min, max),
  [Period.q4]: (min?: Date, max?: Date) => getQuarter(4, min, max),
  // eslint-disable-next-line perfectionist/sort-objects
  all: (min?: Date, max?: Date) => {
    if (min == null) {
      return null;
    }

    const from = min;
    const to = max || new Date();

    return {
      from: toISOString(from),
      to: toISOString(to),
    };
  },
};

type Props = {
  isSameDateIntervalAllowed?: boolean;
  max?: Date;
  min?: Date;
  onChange: (value: { from: string; to: string }) => void;
  value?: {
    from: string;
    to: string;
  };
};

export function PeriodSelect({
  isSameDateIntervalAllowed,
  max,
  min,
  onChange,
  value = { from: '', to: '' },
}: Props) {
  const t = useTranslations('home');
  const [preset, selectPreset] = useState<'' | Period>(() => {
    if (value.from && value.to) {
      for (const key of getKeys(PRESETS)) {
        const range = PRESETS[key](min, max);
        if (range && range.from === value.from && range.to === value.to) {
          return key as Period;
        }
      }
      return '';
    }
    return Period.current_month;
  });
  const [dateRange, setDateRange] = useState<DateRange>(() => {
    if (value.from && value.to) {
      return {
        from: new Date(value.from),
        to: new Date(value.to),
      };
    }

    return {
      from: undefined,
      to: undefined,
    };
  });

  const presets = useMemo(
    () => getKeys(PRESETS).filter((key) => PRESETS[key](min, max) != null),
    [max, min],
  );

  const handleChangePreset: FormEventHandler<HTMLInputElement> = (e) => {
    const target = e.currentTarget;

    selectPreset(target.value as Period);

    const setRange = PRESETS[target.value as keyof typeof PRESETS];
    if (!setRange) {
      return;
    }

    const range = setRange(min, max);
    if (range) {
      onChange(range);
      setDateRange({
        from: range.from ? new Date(range.from) : undefined,
        to: range.to ? new Date(range.to) : undefined,
      });
    }
  };

  const handleChangeDateRange = (range: DateRange | undefined) => {
    if (!range) {
      return;
    }

    selectPreset('');
    setDateRange(range);

    if (range?.from && range?.to) {
      onChange({
        from: toISOString(range.from),
        to: toISOString(range.to),
      });
    }
  };

  return (
    <>
      <Typography variant="labelMAcc">
        {t('accounts.account_id.statement.period.label')}
      </Typography>
      <Spacer size={2} />
      <StyledPeriodsList>
        {presets.map((key) => (
          <Chips
            component="label"
            key={key}
            selected={preset === key}
            size="small"
          >
            {t(`accounts.account_id.statement.period.${key}`)}
            <HiddenInput
              name="period"
              type="radio"
              value={key}
              onChange={handleChangePreset}
            />
          </Chips>
        ))}
      </StyledPeriodsList>
      <Spacer size={3} />
      <DateRangePicker
        isSameDateIntervalAllowed={isSameDateIntervalAllowed}
        leftInputProps={{
          label: t('accounts.account_id.statement.period.from'),
        }}
        maxDate={max}
        minDate={min}
        rightInputProps={{
          label: t('accounts.account_id.statement.period.to'),
        }}
        value={dateRange}
        onChange={handleChangeDateRange}
      />
      <Spacer size={6} />
    </>
  );
}
