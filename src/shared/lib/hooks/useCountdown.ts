import { useEffect, useMemo, useState } from 'react';

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;

export type HookProps = {
  endDate: Date | string;
  onFinish?: () => void;
};

export type HookReturnValue = {
  days: number;
  hours: number;
  // is countdown date in the past
  isExpired: boolean;
  minutes: number;
  seconds: number;
};

export const useCountdown = ({
  endDate,
  onFinish,
}: HookProps): HookReturnValue => {
  const [now, setNow] = useState(() => new Date().getTime());

  const d = useMemo(
    () => (typeof endDate === 'string' ? new Date(endDate) : endDate),
    [endDate],
  );

  const countdownDate = d.getTime();
  const distance = Math.abs(now - countdownDate);
  const isExpired = now > countdownDate;

  useEffect(() => {
    const timeout = setInterval(() => setNow(new Date().getTime()), second);
    return () => {
      clearInterval(timeout);
    };
  }, []);

  useEffect(() => {
    if (isExpired) {
      onFinish?.();
    }
  }, [isExpired, onFinish]);

  return {
    days: Math.floor(distance / day),
    hours: Math.floor((distance % day) / hour),
    isExpired,
    minutes: Math.floor((distance % hour) / minute),
    seconds: Math.floor((distance % minute) / second),
  };
};
