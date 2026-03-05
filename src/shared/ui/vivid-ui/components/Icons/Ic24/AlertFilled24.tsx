import { Box } from '@/shared/ui/vivid-ui/components/Box';
import {
  PolymorphicSquareIconProps,
  SquareIconProps,
} from '@/shared/ui/vivid-ui/components/Icons/types';
import { createPolymorphicComponent } from '@/shared/ui/vivid-ui/shared';

const Icon = ({
  color,
  component = 'svg',
  size = 24,
  ...rest
}: PolymorphicSquareIconProps) => {
  return (
    <Box
      component={component}
      fill={color}
      height={`${size}rem`}
      viewBox="0 0 24 24"
      width={`${size}rem`}
      {...rest}
    >
      <path d="M11 2h2v2.067c3.792.519 6 3.993 6 8.05V16h1.2l.8 2s-3 1-9 1-9-1-9-1l.8-2H5v-3.883c0-4.057 2.208-7.531 6-8.05zM12 23a3 3 0 0 1-2.855-2.077c.868.048 1.82.077 2.855.077s1.987-.029 2.855-.077A3 3 0 0 1 12 23" />
    </Box>
  );
};

export const AlertFilled24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
