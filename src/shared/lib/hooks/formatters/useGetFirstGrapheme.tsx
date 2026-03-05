import { useMemo } from 'react';

import { useLocale } from 'next-intl';

import { getFirstGrapheme } from '@/shared/lib/utils/getFirstGrapheme';

export const useGetFirstGrapheme = () => {
  const locale = useLocale();

  return useMemo(
    () => ({
      getFirstGrapheme: (str?: string) => getFirstGrapheme({ locale, str }),
    }),
    [locale],
  );
};
