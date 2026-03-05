'use client';
import { ReactNode, useEffect, useMemo, useState } from 'react';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styled, { createGlobalStyle } from 'styled-components';

import * as ls from '@/shared/lib/utils/localStorage';
import { Link, usePathname } from '@/shared/services/navigation';
import { GET_THE_APP_LINK, ONBOARDING } from '@/shared/services/urls';
import { ActionButton } from '@/shared/ui/components/ActionButton';
import { TextButton } from '@/shared/ui/components/TextButton';
import { Box } from '@/shared/ui/vivid-ui/components/Box';
import { Close24 } from '@/shared/ui/vivid-ui/components/Icons';
import { Spacer } from '@/shared/ui/vivid-ui/components/Spacer';
import { useThemeBreakpoints } from '@/shared/ui/vivid-ui/hooks';

import { SafeHtml } from '../SafeHtml';

const GlobalStyle = createGlobalStyle`
  html, body {
    overflow: hidden;
  }
`;

const StyledPlaceholderBox = styled(Box)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.token.sizeUnits(20)};
  background: ${({ theme }) => theme.token.color.c0};
  z-index: 1000000;
`;

const StyledPlaceholderContent = styled(Box)`
  max-width: 500rem;
  text-align: center;
  text-wrap: pretty;
`;

const StyledCloseButton = styled(Box)`
  position: absolute;
  top: ${(props) => props.theme.token.sizeUnits(12)};
  right: ${(props) => props.theme.token.sizeUnits(12)};
  font-size: 0;
`;

const LS_KEY = 'mobile-placeholder-hidden';

type Props = {
  children?: ReactNode;
  getTheAppCtaKey?: string;
  isCloseButtonDisabled?: boolean;
  textKey?: string;
  titleKey?: string;
};

export const MobilePlaceholder = ({
  children,
  getTheAppCtaKey,
  isCloseButtonDisabled,
  textKey,
  titleKey,
}: Props) => {
  const pathname = usePathname();
  const t = useTranslations('common');
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (!ls.get(LS_KEY)) {
      setHidden(false);
    }
  }, []);

  const handleClose = () => {
    setHidden(true);
    ls.set(LS_KEY, 'true');
  };

  const breakpoints = useThemeBreakpoints();

  const isOnboarding = pathname.startsWith(ONBOARDING);

  const titleHtml = useMemo(() => {
    if (titleKey) {
      return t.raw(titleKey);
    }
    return isOnboarding
      ? t.raw('mobile_placeholder_onboarding.title')
      : t.raw('mobile_placeholder.title');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, titleKey]);

  const textHtml = useMemo(() => {
    if (textKey) {
      return t.raw(textKey);
    }
    return isOnboarding
      ? t.raw('mobile_placeholder_onboarding.text')
      : t.raw('mobile_placeholder.text');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, textKey]);

  if (breakpoints.isMobile && (!hidden || isCloseButtonDisabled)) {
    return (
      <>
        <GlobalStyle />
        {children}
        <StyledPlaceholderBox>
          {isCloseButtonDisabled ? null : (
            <StyledCloseButton>
              <TextButton onClick={handleClose}>
                <Close24 size={32} />
              </TextButton>
            </StyledCloseButton>
          )}
          <StyledPlaceholderContent>
            <Image
              alt=""
              height={200}
              priority
              src="/images/common/mobile_placeholder.webp"
              width={200}
            />
            <Spacer size={6} />
            <SafeHtml html={titleHtml} variant="h5" />
            <Spacer size={4} />
            <SafeHtml html={textHtml} variant="paragraphL" />
            {getTheAppCtaKey ? (
              <>
                <Spacer size={8} />
                <ActionButton
                  component={Link}
                  fullWidth
                  href={GET_THE_APP_LINK}
                  rel="noopener noreferrer nofollow"
                  size="small"
                  target="_blank"
                >
                  {t(getTheAppCtaKey)}
                </ActionButton>
              </>
            ) : null}
          </StyledPlaceholderContent>
        </StyledPlaceholderBox>
      </>
    );
  }

  return <>{children}</>;
};
