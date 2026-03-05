'use client';
import { PropsWithChildren, useEffect, useRef } from 'react';

import { useTranslations } from 'next-intl';
import { styled, useTheme } from 'styled-components';

import { Logger } from '@/shared/lib/logger';
import { getNextErrorDigest } from '@/shared/lib/utils/getNextErrorDigest';
import { ErrorType, EventType, sendEvent } from '@/shared/services/analytics';
import {
  CommonImage,
  CommonImageName,
} from '@/shared/ui/components/CommonImage';
import { Box } from '@/shared/ui/vivid-ui/components/Box';
import { Spacer } from '@/shared/ui/vivid-ui/components/Spacer';
import { Typography } from '@/shared/ui/vivid-ui/components/Typography';

import { useLocalizedMessageError } from './hooks/useLocalizedMessageError';

const StyledErrorContainer = styled(Box)`
  margin: 0 auto;
  width: 100%;
  padding: ${(props) => props.theme.token.spacingM};
  max-width: 500rem;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export type PageErrorProps = PropsWithChildren<{
  error?: Error & { digest?: string };
  message?: string;
  title?: string;
}>;

export const PageError = ({
  children,
  error,
  message,
  title,
}: PageErrorProps) => {
  const sent = useRef(false);
  const theme = useTheme();
  const t = useTranslations('common.errors');
  const localizedMessage = useLocalizedMessageError(error);

  useEffect(() => {
    if (!sent.current && error) {
      sent.current = true;
      console.error(error);
      sendEvent(EventType.EVENT_TYPE_VIEW_ERROR, undefined, {
        error_msg: error.message,
        error_type: ErrorType.FULL_SCREEN,
      });
      Logger.error(error);
    }
  }, [error]);

  return (
    <StyledErrorContainer>
      <CommonImage image={CommonImageName.reject} size={188} />
      <Spacer size={6} />
      <Typography variant="h6">{title ?? t('sww_title')}</Typography>
      <Spacer size={3} />
      <Typography variant="paragraphS">
        {message || localizedMessage || t('sww_message')}
      </Typography>
      {message || localizedMessage ? null : (
        <>
          <Spacer size={1} />
          <Typography color={theme?.token.color.c3} variant="paragraphS">
            {t('error_code')} {`${error?.digest || getNextErrorDigest(error)}`}
          </Typography>
        </>
      )}
      <Spacer size={3} />
      {children}
    </StyledErrorContainer>
  );
};
