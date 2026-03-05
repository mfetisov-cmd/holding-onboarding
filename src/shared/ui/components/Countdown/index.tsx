import { useEffect, useState } from 'react';

type Props = {
  onFinish?: () => void;
  timeout?: Date | number;
};

const msToTime = (ms: number) => ({
  minutes: Math.floor(ms / (1000 * 60)),
  seconds: Math.floor((ms / 1000) % 60),
});

export const Countdown = ({ onFinish, timeout = 0 }: Props) => {
  const [ms, setMs] = useState(+timeout - +new Date());

  useEffect(() => {
    let timeLeft = +timeout - +new Date();
    if (timeLeft <= 0) {
      setMs(0);
      return;
    }

    let timeoutId: NodeJS.Timeout;

    const startCountdown = () => {
      timeoutId = setTimeout(() => {
        timeLeft -= timeLeft % 1000 || 1000;
        setMs(timeLeft);

        if (timeLeft > 0) {
          startCountdown();
        }
      }, timeLeft % 1000 || 1000);
    };

    startCountdown();

    return () => clearTimeout(timeoutId);
  }, [timeout]);

  useEffect(() => {
    if (ms <= 0) {
      onFinish?.();
    }
  }, [ms, onFinish]);

  const { minutes, seconds } = msToTime(ms > 0 ? ms : 0);

  return (
    <>
      {minutes > 9 ? '' : '0'}
      {minutes}:{seconds > 9 ? '' : '0'}
      {seconds}
    </>
  );
};
