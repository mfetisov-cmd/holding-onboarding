import { useEffect } from 'react';

import { useSearchParams } from 'next/navigation';

import { setWebClientId } from '@/shared/services/analytics';

// Initialise analytics module with parameters provided via query params
// Must be called on client as soon as possible
export const useInitAnalytics = () => {
  const query = useSearchParams();

  useEffect(() => {
    const wcid = query?.get('wcid');
    if (wcid) {
      setWebClientId(wcid);
    }
  }, [query]);
};
