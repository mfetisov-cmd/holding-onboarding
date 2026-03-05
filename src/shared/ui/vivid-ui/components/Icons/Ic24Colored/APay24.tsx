import { useTheme } from 'styled-components';

import { Box } from '@/shared/ui/vivid-ui/components/Box';
import {
  PolymorphicSquareIconProps,
  SquareIconProps,
} from '@/shared/ui/vivid-ui/components/Icons/types';
import { createPolymorphicComponent } from '@/shared/ui/vivid-ui/shared';

const Icon = ({
  component = 'svg',
  size = 24,
  ...rest
}: Omit<PolymorphicSquareIconProps, 'color'>) => {
  const theme = useTheme();

  return (
    <Box
      component={component}
      height={`${size}rem`}
      viewBox="0 0 24 24"
      width={`${size}rem`}
      {...rest}
      fill={theme.token.color.c1}
    >
      <path d="M19.622 7.817a4.531 4.531 0 0 0-2.165 3.811 4.41 4.41 0 0 0 2.683 4.044 10.537 10.537 0 0 1-1.374 2.84c-.855 1.23-1.75 2.462-3.11 2.462-1.362 0-1.712-.79-3.28-.79-1.53 0-2.074.816-3.319.816-1.244 0-2.113-1.14-3.11-2.54a12.28 12.28 0 0 1-2.088-6.624c0-3.89 2.528-5.95 5.017-5.95 1.322 0 2.424.868 3.253.868.791 0 2.023-.92 3.526-.92a4.716 4.716 0 0 1 3.967 1.983Zm-4.68-3.63a4.47 4.47 0 0 0 1.063-2.785A1.934 1.934 0 0 0 15.966 1a4.479 4.479 0 0 0-2.942 1.517 4.346 4.346 0 0 0-1.102 2.709c0 .122.013.243.039.363.09.017.18.025.272.026a3.882 3.882 0 0 0 2.71-1.427Z" />
    </Box>
  );
};

export const APay24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
