import { ReactNode } from 'react';

import { styled, useTheme } from 'styled-components';

import { Typography } from '@/shared/ui/vivid-ui/components/Typography';

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  gap: ${(props) => props.theme.token.spacingXL};
  padding: ${(props) => props.theme.token.spacingM};
  background-color: ${(props) => props.theme.token.color.c5};
  border-radius: ${(props) => props.theme.token.borderRadiusM};
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: ${(props) => props.theme.token.spacingXS};
`;

type Props = {
  action?: ReactNode;
  step: number;
  subtitle?: ReactNode;
  title: ReactNode;
};

export const HowToItem = ({ action, step, subtitle, title }: Props) => {
  const theme = useTheme();
  return (
    <StyledContainer>
      <Typography variant="h6">{step}</Typography>
      <StyledContent>
        <Typography variant="bodyMAcc">{title}</Typography>
        <Typography color={theme.token.color.c2} variant="bodyS">
          {subtitle}
        </Typography>
        <Typography variant="bodyS">{action}</Typography>
      </StyledContent>
    </StyledContainer>
  );
};
