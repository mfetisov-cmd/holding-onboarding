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
      <path d="m16 13.75-3-2.25V6h-2v6.5l5 3.75z" />
      <path d="M16 5.072A8 8 0 0 0 5.755 7l3.247.004-2 2H2V4l2-2v4a10 10 0 1 1-1.95 5h2.013a8 8 0 0 0 10.008 8.727A8 8 0 0 0 16 5.072" />
    </Box>
  );
};

export const Recent24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
