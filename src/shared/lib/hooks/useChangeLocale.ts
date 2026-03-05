import { useCallback, useMemo, useState } from 'react';

import { useLocale, useTranslations } from 'next-intl';

import { LOCALES } from '@/shared/model/constants/locale';
import { usePathname } from '@/shared/services/navigation';

type LOCALE = (typeof LOCALES)[number];

export const useChangeLocale = () => {
  const t = useTranslations('common.locale');
  const pathname = usePathname();
  const locale = useLocale();
  const [loading, setLoading] = useState<LOCALE>();

  const changeLocale = useCallback(
    (locale: LOCALE) => {
      setLoading(locale);
      // Setting next.js locale cookie so on page reload bff receives actual locale
      document.cookie = `NEXT_LOCALE=${locale}; path=/`;
      window.location.replace(`/${locale}${pathname}${window.location.search}`);
    },
    [pathname],
  );

  const locales = useMemo(
    () =>
      LOCALES.map((it) => ({
        active: it === locale,
        code: it,
        loading: it === loading,
        title: t(it),
      })),
    [locale, loading, t],
  );

  return useMemo(
    () => ({
      changeLocale,
      locale: locales.find((it) => it.active),
      locales,
    }),
    [changeLocale, locales],
  );
};
