import React, { useEffect } from 'react';

import { useValue } from '@/shared/lib/hooks/useValue';

const HEARTBEAT_TIMEOUT = 1_000;

type TimerProps = {
  instant?: boolean;
  onError?: (error: Error) => void; // Callback function to handle errors
  onTimer: () => Promise<void>; // Promise-based callback function to call when the timer fires
  timeoutMs: number; // Timeout duration in seconds
  timerId: string;
  times?: number;
};

export const Timer: React.FC<TimerProps> = ({
  instant = false,
  onError,
  onTimer,
  timeoutMs,
  timerId,
  times,
}) => {
  const [, emitter] = useValue(
    {
      lastUpdated: Date.now() + (instant ? -timeoutMs : 0),
      runs: 0,
      times: times || Number.POSITIVE_INFINITY,
    },
    timerId,
  );

  useEffect(() => {
    let active = true; // Flag to control the timer lifecycle

    // Function to handle the timer logic
    const handleTimer = async () => {
      const currentTime = Date.now();
      const timeElapsed = currentTime - emitter.get().lastUpdated; // Calculate elapsed time in seconds
      const runs = emitter.get().runs;

      if (timeElapsed >= timeoutMs && runs < emitter.get().times) {
        try {
          emitter.update({
            lastUpdated: currentTime,
            runs: runs + 1,
          }); // Update the last fired time
          await onTimer(); // Execute the timer function
        } catch (error) {
          if (onError) {
            onError(error as Error); // Handle errors
          }
          active = false; // Stop further executions on error
        }
      }

      if (active && runs < emitter.get().times) {
        setTimeout(handleTimer, HEARTBEAT_TIMEOUT); // Check again in one second
      }
    };

    setTimeout(handleTimer, HEARTBEAT_TIMEOUT); // Start checking one second after component mounts

    return () => {
      active = false; // Prevent further executions on component unmount
    };
  }, [times, timerId, onTimer, onError, timeoutMs, emitter]); // Include lastFired to track updates

  return <div />;
};
