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
        d="M12 2c6 0 8 1 8 1v11.5c0 4-8 7.5-8 7.5s-8-3.5-8-7.5V3s2-1 8-1m0 17.785V4c-2.89 0-4.757.24-5.858.46L6 4.492V14.5c0 .33.174.852.78 1.571.589.7 1.428 1.395 2.353 2.031A25 25 0 0 0 12 19.785"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Shield24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
