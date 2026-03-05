import { useTranslations } from 'next-intl';
import { styled, useTheme } from 'styled-components';

import { Column } from '@/shared/ui/vivid-ui/components/Layout';
import { Spacer } from '@/shared/ui/vivid-ui/components/Spacer';
import { Typography } from '@/shared/ui/vivid-ui/components/Typography';

import {
  StyledBottomContentBox,
  StyledFixedRightColumn,
  StyledImage,
} from './styles';

const StyledBox = styled(StyledFixedRightColumn)`
  background: linear-gradient(
    289deg,
    #818181 0.49%,
    #afafaf 30.52%,
    #444 76.37%
  );
  display: flex;
  flex-direction: column;
`;

export const Protected = () => {
  const t = useTranslations('login.right_column.protected');
  const theme = useTheme();

  return (
    <StyledBox>
      <Column align="center" grow={1} justify="center">
        <StyledImage
          alt=""
          height={330}
          src="/images/right_column/shield.webp"
          width={330}
        />
      </Column>
      <StyledBottomContentBox $withoutXPaddings>
        <Typography color={theme.token.color.c11} variant="h6">
          {t('title')}
        </Typography>
        <Spacer size={4} />
        <Typography color={theme.token.color.c11} variant="bodyXS">
          {t('description')}
        </Typography>
      </StyledBottomContentBox>
    </StyledBox>
  );
};
