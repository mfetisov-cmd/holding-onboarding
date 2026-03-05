import { useEffect, useState } from 'react';

import { Duration } from 'google-protobuf/google/protobuf/duration_pb';

import { useDurationFormatter } from '@/shared/lib/utils/convert/google/protobuf/duration';

export const useRateLimitMessage = (untilDate?: Date) => {
  const durationFormatter = useDurationFormatter(true);
  const [, setTimes] = useState(0);

  const now = Date.now();
  const dateDiff = (untilDate?.getTime() ?? now) - now;

  // trigger rerender every 300ms while dateDiff is positive
  useEffect(() => {
    if (dateDiff > 0) {
      setTimeout(() => {
        setTimes((prev) => prev + 1);
      }, 300);
    }
  }, [dateDiff]);

  if (dateDiff <= 0) {
    return undefined;
  }

  const duration = new Duration();
  duration.setSeconds(dateDiff / 1000);

  return durationFormatter(duration);
};
