import { useTheme } from 'styled-components';

import { BreakpointBox } from '@/shared/ui/components/BreakpointBox';
import { BackButton } from '@/shared/ui/components/TwoColumnsLayout/buttons';
import { Row } from '@/shared/ui/vivid-ui/components/Layout';
import { Typography } from '@/shared/ui/vivid-ui/components/Typography';

type TitleWithBackButtonProps = { onBack?: VoidFunction; title: string };
export const TitleWithBackButton = ({
  onBack,
  title,
}: TitleWithBackButtonProps) => {
  const theme = useTheme();

  return (
    <Row gap={theme.token.sizeUnits(4)}>
      <BreakpointBox showAfter={theme.token.breakPoints.tablet}>
        {onBack && <BackButton onClick={onBack} />}
      </BreakpointBox>
      <Row grow={1} justify="center">
        <Typography variant="h4">{title}</Typography>
      </Row>
    </Row>
  );
};
