'use client';
import { useEffect } from 'react';

import { useTranslations } from 'next-intl';
import styled, { createGlobalStyle } from 'styled-components';

import { EventType, sendEvent } from '@/shared/services/analytics';
import {
  CommonScreen,
  CommonScreenElementName,
} from '@/shared/services/analytics/product';
import { Link } from '@/shared/services/navigation';
import { MAPP_LINK_PROD } from '@/shared/services/urls';
import { ActionButton } from '@/shared/ui/components/ActionButton';
import {
  CommonImage,
  CommonImageName,
} from '@/shared/ui/components/CommonImage';
import { Box } from '@/shared/ui/vivid-ui/components/Box';
import { Spacer } from '@/shared/ui/vivid-ui/components/Spacer';
import { Typography } from '@/shared/ui/vivid-ui/components/Typography';
import { useThemeBreakpoints } from '@/shared/ui/vivid-ui/hooks';

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

  @media (min-width: ${(props) => props.theme.token.breakPoints.tablet}) {
    display: none;
  }
`;

const StyledPlaceholderContent = styled(Box)`
  max-width: 300rem;
  text-align: center;
  text-wrap: pretty;
`;

export type MobilePlaceholderBaseProps = {
  isTreasuryOnboarding?: boolean;
  legalEntityId: string;
  spaceId: string;
};
export const MobilePlaceholderBase = ({
  isTreasuryOnboarding,
  legalEntityId,
  spaceId,
}: MobilePlaceholderBaseProps) => {
  const t = useTranslations('common');
  const breakpoints = useThemeBreakpoints();

  const handleClick = () => {
    sendEvent(EventType.EVENT_TYPE_CLICK, CommonScreen.BetterInApp, {
      element_name: CommonScreenElementName.OpenApp,
      legal_entity_id: legalEntityId,
      space_id: spaceId,
    });
  };

  useEffect(() => {
    if (breakpoints.isMobile) {
      sendEvent(EventType.EVENT_TYPE_VIEW_SCREEN, CommonScreen.BetterInApp, {
        legal_entity_id: legalEntityId,
        space_id: spaceId,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breakpoints.isMobile]);

  const href = isTreasuryOnboarding
    ? 'https://vividmoney.onelink.me/FW6X/sme_treasury'
    : `${MAPP_LINK_PROD}/sme_dashboard?legal_entity_id=${legalEntityId}&business_web_path=%2Fen%2Fcompany%2F${legalEntityId}%2Faccounts`;

  return (
    <StyledPlaceholderBox>
      {breakpoints.isMobile ? <GlobalStyle /> : null}
      <StyledPlaceholderContent>
        <CommonImage
          image={CommonImageName.migration_sa_welcome_2}
          priority
          size={breakpoints.isMobileS ? 150 : 200}
        />
        <Spacer size={6} />
        <Typography variant="h5">{t('mobile_placeholder.v2.title')}</Typography>
        <Spacer size={4} />
        <Typography variant="bodyM">
          {t('mobile_placeholder.v2.text')}
        </Typography>
        <Spacer size={8} />
        <ActionButton
          component={Link}
          href={href}
          rel="noopener noreferrer nofollow"
          size="small"
          target="_blank"
          onClick={handleClick}
        >
          {t('mobile_placeholder.v2.cta')}
        </ActionButton>
      </StyledPlaceholderContent>
    </StyledPlaceholderBox>
  );
};
