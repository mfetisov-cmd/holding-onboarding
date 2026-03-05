import { useLocale, useTranslations } from 'next-intl';
import { styled, useTheme } from 'styled-components';

import {
  StyledBottomContentBox,
  StyledFixedRightColumn,
} from '@/shared/ui/components/TwoColumnsLayout/RightColumn/styles';
import { Spacer } from '@/shared/ui/vivid-ui/components/Spacer';
import { Typography } from '@/shared/ui/vivid-ui/components/Typography';

const SUPPORTED_IMAGE_LOCALES = ['en', 'de', 'it', 'fr', 'es'];

const StyledBox = styled(StyledFixedRightColumn)<{ $locale: string }>`
  background: ${({ theme }) => theme.token.color.c4};
  background-size: cover;
  background-position: 50% 50%;
  background-image: url('/images/right_column/support_${({ $locale }) =>
    $locale}.webp');
`;

const StyledContentBox = styled(StyledBottomContentBox)`
  align-self: flex-end;
`;

export const Support = () => {
  const t = useTranslations('common.right_column.support');
  const theme = useTheme();
  const locale = useLocale();

  const image_locale = SUPPORTED_IMAGE_LOCALES.includes(locale) ? locale : 'en';

  return (
    <StyledBox $locale={image_locale}>
      <StyledContentBox>
        <Typography color={theme.token.color.c11} variant="h6">
          {t('title')}
        </Typography>
        <Spacer size={4} />
        <Typography color={theme.token.color.c11} variant="bodyXS">
          {t('description')}
        </Typography>
      </StyledContentBox>
    </StyledBox>
  );
};
