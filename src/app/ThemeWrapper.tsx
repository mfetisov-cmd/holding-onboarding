'use client';

import { DefaultThemeProvider } from '@/shared/ui/vivid-ui/components/DefaultThemeProvider';

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <DefaultThemeProvider themeName="light">
      {children}
    </DefaultThemeProvider>
  );
}
