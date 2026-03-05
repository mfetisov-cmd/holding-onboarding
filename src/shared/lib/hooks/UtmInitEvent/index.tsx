'use client';

import { useEffect, useRef } from 'react';

import { useSearchParams } from 'next/navigation';

import { Logger } from '@/shared/lib/logger';
import {
  UTM_CAMPAIGN,
  UTM_MEDIUM,
  UTM_SOURCE,
} from '@/shared/services/urls/urlParams';

export const UtmInitEvent = () => {
  const params = useSearchParams();
  const utmSource = params?.get(UTM_SOURCE);
  const utmMedium = params?.get(UTM_MEDIUM);
  const utmCampaign = params?.get(UTM_CAMPAIGN);

  const running = useRef(false);
  useEffect(() => {
    if (!running.current) {
      running.current = true;
      if (utmSource || utmMedium || utmCampaign) {
        Logger.warn('User page opened with utm params', {
          document: {
            utm_campaign: utmCampaign,
            utm_medium: utmMedium,
            utm_source: utmSource,
          },
        });
      }
    }
  }, [utmSource, utmMedium, utmCampaign]);
  return <div />;
};
