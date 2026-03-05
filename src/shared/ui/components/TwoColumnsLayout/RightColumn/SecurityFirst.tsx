import { useMemo } from 'react';

import { useTranslations } from 'next-intl';
import { styled, useTheme } from 'styled-components';

import { Spacer } from '@/shared/ui/vivid-ui/components/Spacer';
import { Typography } from '@/shared/ui/vivid-ui/components/Typography';

import { StyledFixedRightColumn, StyledImage } from './styles';

const StyledBox = styled(StyledFixedRightColumn)`
  background: linear-gradient(180deg, #57505f 33.99%, #a3b2c2 95.72%);
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledBenefitsList = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.token.spacingM};
  padding: 0 ${(props) => props.theme.token.spacingM};
`;

const StyledBenefit = styled.div`
  max-width: ${(props) => props.theme.token.sizeUnits(68)};
`;

export const SecurityFirst = () => {
  const t = useTranslations('onboarding.right_column.security');
  const theme = useTheme();

  const benefits = useMemo(
    () => [
      {
        description: t('benefits.0.description'),
        image: '/images/right_column/pci_dss.webp',
        imageHeight: 40,
        imageWidth: 80,
        title: t('benefits.0.title'),
      },
      {
        description: t('benefits.1.description'),
        image: '/images/right_column/3d_secure.webp',
        imageHeight: 40,
        imageWidth: 40,
        title: t('benefits.1.title'),
      },
      {
        description: t('benefits.2.description'),
        image: '/images/right_column/gdpr.webp',
        imageHeight: 40,
        imageWidth: 40,
        title: t('benefits.2.title'),
      },
    ],
    [t],
  );

  return (
    <StyledBox>
      <StyledContent>
        <StyledImage
          alt=""
          height={260}
          src="/images/right_column/done_dots.webp"
          width={260}
        />
        <Spacer size={4} />
        <Typography color={theme.token.color.c11} variant="h6">
          {t('title')}
        </Typography>
        <Spacer size={12} />
        <StyledBenefitsList>
          {benefits.map((it, i) => (
            <StyledBenefit key={i}>
              <StyledImage
                alt=""
                height={it.imageHeight}
                src={it.image}
                width={it.imageWidth}
              />
              <Spacer size={4} />
              <Typography color={theme.token.color.c11} variant="bodyS">
                {it.title}
              </Typography>
              <Spacer size={2} />
              <Typography
                color={theme.token.paletteLight.carbon.c300}
                variant="bodyXS"
              >
                {it.description}
              </Typography>
            </StyledBenefit>
          ))}
        </StyledBenefitsList>
      </StyledContent>
    </StyledBox>
  );
};
