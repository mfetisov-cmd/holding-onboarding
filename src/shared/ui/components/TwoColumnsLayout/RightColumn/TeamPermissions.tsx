import { useTranslations } from 'next-intl';
import { styled, useTheme } from 'styled-components';

import {
  StyledBottomContentBox,
  StyledFixedRightColumn,
} from '@/shared/ui/components/TwoColumnsLayout/RightColumn/styles';
import { Spacer } from '@/shared/ui/vivid-ui/components/Spacer';
import { Typography } from '@/shared/ui/vivid-ui/components/Typography';

const StyledBox = styled(StyledFixedRightColumn)`
  background: ${({ theme }) => theme.token.color.c4};
  background-size: cover;
  background-position: 50% 50%;
  background-image: url('/images/right_column/team.webp');
`;

const StyledContentBox = styled(StyledBottomContentBox)`
  align-self: flex-end;
`;

export const TeamPermissions = () => {
  const t = useTranslations('onboarding.right_column.team_permissions');
  const theme = useTheme();

  return (
    <StyledBox>
      <StyledContentBox>
        <Typography color={theme.token.color.c18} variant="h6">
          {t('title')}
        </Typography>
        <Spacer size={4} />
        <Typography color={theme.token.color.c18} variant="bodyXS">
          {t('description')}
        </Typography>
      </StyledContentBox>
    </StyledBox>
  );
};
