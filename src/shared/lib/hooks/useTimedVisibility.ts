import { useCallback, useEffect, useRef, useState } from 'react';

import * as ls from '@/shared/lib/utils/localStorage';

export function useTimedPersistedState(
  key: string,
  hideDurationInSeconds = 3600,
) {
  const timer = useRef<NodeJS.Timeout>(undefined);
  const [isVisible, setIsVisible] = useState(false);

  const scheduleTask = (timeout: number, task: () => void) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(task, timeout);

    return () => clearTimeout(timer.current);
  };

  const show = useCallback(() => {
    ls.remove(key);
    setIsVisible(true);
    timer.current = undefined;
  }, [key]);

  const hide = () => {
    const hideDuration = hideDurationInSeconds * 1000;
    const hideUntil = Date.now() + hideDuration;

    ls.set(key, hideUntil.toString());
    setIsVisible(false);
    scheduleTask(hideDuration, show);
  };

  useEffect(() => {
    const hideUntil = ls.get(key);

    if (!hideUntil) {
      setIsVisible(true);
      return;
    } else {
      setIsVisible(false);
    }

    const currentTime = Date.now();
    const timeLeft = parseInt(hideUntil, 10) - currentTime;

    if (timeLeft <= 0) {
      ls.remove(key);
      setIsVisible(true);
      return;
    }

    return scheduleTask(timeLeft, show);
  }, [key, show]);

  return [isVisible, hide] as const;
}
