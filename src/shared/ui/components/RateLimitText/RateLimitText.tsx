import { useRateLimitMessage } from './useRateLimitMessage';

export const RateLimitText = ({ rateLimitDate }: { rateLimitDate: Date }) => {
  const rateLimitTimeText = useRateLimitMessage(rateLimitDate);

  return <>{rateLimitTimeText}</>;
};
