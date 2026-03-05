import { ComponentProps } from 'react';
import { DayPicker } from 'react-day-picker';

import { getDefaultOptions } from 'date-fns';

import {
  ArrowBackCenter24,
  ArrowForwardCenter24,
} from '@/shared/ui/vivid-ui/components/Icons';

import { customClassNames } from './constants';
import {
  NextMonthButton,
  PreviousMonthButton,
  StyledDayPicker,
} from './styles';

import 'react-day-picker/style.css';

export type CalendarProps = ComponentProps<typeof DayPicker>;

const components: CalendarProps['components'] = {
  NextMonthButton: (props) => (
    <NextMonthButton {...props}>
      <ArrowForwardCenter24 color="currentColor" />
    </NextMonthButton>
  ),
  PreviousMonthButton: (props) => (
    <PreviousMonthButton {...props}>
      <ArrowBackCenter24 color="currentColor" />
    </PreviousMonthButton>
  ),
};

export const Calendar = (props: CalendarProps) => {
  return (
    <StyledDayPicker
      classNames={customClassNames}
      components={components}
      locale={getDefaultOptions().locale}
      navLayout="around"
      showOutsideDays
      {...props}
    />
  );
};
