import { PropsWithChildren } from 'react';

import styled, { useTheme } from 'styled-components';

import { Typography } from '@/shared/ui/vivid-ui/components/Typography';

const StyledTitleBox = styled.div`
  max-width: 100%;
  padding: 0 ${(props) => props.theme.token.spacingM};
  text-align: center;
`;

const StyledTitle = styled.div`
  text-overflow: ellipsis;
  white-space: pre;
  overflow: hidden;
`;

type Props = {
  subtitle?: string;
  subtitleColor?: string;
  title?: string;
};

/**
 * A component representing the title within the mobile header.
 * It is used to display the main title of the page or screen.
 * This component is intended to be used inside a MobileHeader.
 */
export const MobileHeaderTitle = ({
  children,
  subtitle,
  subtitleColor,
  title,
}: PropsWithChildren<Props>) => {
  const theme = useTheme();

  return (
    <StyledTitleBox>
      {children}
      {subtitle && (
        <Typography
          color={subtitleColor ?? theme.token.color.c2}
          component={StyledTitle}
          variant="bodyM"
        >
          {subtitle}
        </Typography>
      )}
      {title && (
        <Typography component={StyledTitle} variant="bodyM">
          {title}
        </Typography>
      )}
    </StyledTitleBox>
  );
};
