'use client';
import { useTheme } from 'styled-components';

import { Column } from '@/shared/ui/vivid-ui/components/Layout';
import { Loader } from '@/shared/ui/vivid-ui/components/Loader';

export const PageLoadingSpinner = () => {
  const theme = useTheme();
  return (
    <Column align="center" height="100%" justify="center" width="100%">
      <Loader color={theme.token.color.c6} />
    </Column>
  );
};
