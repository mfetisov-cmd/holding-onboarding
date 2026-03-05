import { DefaultTheme, ThemeProvider } from 'styled-components';

import { Button, ButtonProps } from '@/shared/ui/vivid-ui/components/Button';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '@/shared/ui/vivid-ui/shared';

export type ActionButtonProps = PolymorphicComponentProps<
  'button',
  ButtonProps
>;

export const _ActionButton = ({ children, ...rest }: ActionButtonProps) => {
  const modifyTheme = (defaultTheme?: DefaultTheme): DefaultTheme => ({
    ...defaultTheme!,
    token: {
      ...defaultTheme!.token,
      borderRadiusM: '32rem',
      borderRadiusS: '28rem',
      borderRadiusXS: '22rem',
    },
  });

  return (
    <ThemeProvider theme={modifyTheme}>
      <Button {...rest}>{children}</Button>
    </ThemeProvider>
  );
};

export const ActionButton = createPolymorphicComponent<'button', ButtonProps>(
  _ActionButton,
);
