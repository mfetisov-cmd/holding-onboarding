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
      <path
        clipRule="evenodd"
        d="M19.814 5.418c.86.23 1.537.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.5 2.5 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.5 2.5 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.418-4.814a2.5 2.5 0 0 1 1.768-1.768C5.746 5 12 5 12 5s6.255 0 7.814.418M15.192 12l-5.196 3V9z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Youtube24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
