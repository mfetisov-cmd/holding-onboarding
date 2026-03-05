import { useTranslations } from 'next-intl';
import { styled, useTheme } from 'styled-components';

import {
  StyledBottomContentBox,
  StyledFixedRightColumn,
  StyledImage,
} from '@/shared/ui/components/TwoColumnsLayout/RightColumn/styles';
import { Spacer } from '@/shared/ui/vivid-ui/components/Spacer';
import { Typography } from '@/shared/ui/vivid-ui/components/Typography';

const StyledBox = styled(StyledFixedRightColumn)`
  flex-direction: column;
  background: linear-gradient(250deg, #faf0ed -2%, #f5e4f1 47%, #ae92f0 122%);
`;

const StyledImageBox = styled.div`
  flex: 1 1 auto;
  display: flex;
  align-items: end;
`;

const StyledLegalText = styled.div<{ $withoutChatButtonPadding?: boolean }>`
  padding: ${({ $withoutChatButtonPadding, theme }) =>
    `0 ${theme.token.sizeUnits(
      $withoutChatButtonPadding ? 12 : 52,
    )} ${theme.token.sizeUnits(12)} ${theme.token.sizeUnits(12)}`};
  font-size: 9rem;
  line-height: 10.8rem;
  color: ${({ theme }) => theme.token.paletteLight.carbon.c600};
`;

export const InterestRate = ({
  withoutChatButtonPadding,
}: {
  withoutChatButtonPadding?: boolean;
}) => {
  const t = useTranslations('onboarding.right_column.interest_rate');
  const theme = useTheme();

  return (
    <StyledBox>
      <StyledImageBox>
        <StyledImage
          alt=""
          height={380}
          src="/images/tariff/interest_percent@2x.webp"
          unoptimized
          width={380}
        />
      </StyledImageBox>
      <StyledBottomContentBox>
        <Typography color={theme.token.color.c18} variant="h6">
          {t('title')}
        </Typography>
        <Spacer size={4} />
        <Typography color={theme.token.color.c18} variant="bodyXS">
          {t('description')}
        </Typography>
      </StyledBottomContentBox>
      <StyledLegalText $withoutChatButtonPadding={withoutChatButtonPadding}>
        {t('legal')}
      </StyledLegalText>
    </StyledBox>
  );
};
