import { useTranslations } from 'next-intl';
import { styled, useTheme } from 'styled-components';

import {
  StyledFixedRightColumn,
  StyledImage,
} from '@/shared/ui/components/TwoColumnsLayout/RightColumn/styles';
import { Row } from '@/shared/ui/vivid-ui/components/Layout';
import { Typography } from '@/shared/ui/vivid-ui/components/Typography';

const StyledBox = styled(StyledFixedRightColumn)`
  flex-direction: column;
  background: linear-gradient(250deg, #faf0ed -2%, #f5e4f1 47%, #ae92f0 122%);
`;

export const PosTerminal = () => {
  const t = useTranslations('onboarding.right_column.pos_terminal');
  const theme = useTheme();

  return (
    <StyledBox>
      <StyledImage
        alt=""
        height={400}
        src="/images/right_column/pos_terminal.webp"
        unoptimized
        width={400}
      />
      <Row maxWidth={theme.token.sizeUnits(205)}>
        <Typography
          align="center"
          color={theme.token.color.c18}
          variant="h4"
          whiteSpace="pre-wrap"
        >
          {t('title')}
        </Typography>
      </Row>
    </StyledBox>
  );
};
