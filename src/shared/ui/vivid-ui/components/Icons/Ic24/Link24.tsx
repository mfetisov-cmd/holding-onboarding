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
      <path d="M16.438 8.033c-1.111.88-2.605 2.175-4.438 4.02l-2.81-2.83c2.244-2.257 4.049-3.78 5.349-4.768 1.365-1.037 3.196-.774 4.405.444l2.975 2.993c1.21 1.218 1.471 3.06.44 4.434-.981 1.308-2.494 3.125-4.738 5.383l-2.81-2.828c1.833-1.845 3.12-3.348 3.994-4.466z" />
      <path d="M5.195 13.69c.874-1.118 2.162-2.622 3.995-4.466L6.379 6.396C4.135 8.654 2.622 10.47 1.64 11.778c-1.031 1.374-.77 3.217.44 4.434l2.975 2.994c1.21 1.218 3.04 1.48 4.405.443 1.3-.988 3.106-2.51 5.35-4.768L12 12.052c-1.833 1.845-3.328 3.14-4.439 4.02z" />
    </Box>
  );
};

export const Link24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
