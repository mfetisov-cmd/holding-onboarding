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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 0 1-13.58 5.732l6.885-2.754a3 3 0 0 0 1.67-1.671l2.756-6.889A7.97 7.97 0 0 1 20 12M6.266 17.579l2.754-6.885a3 3 0 0 1 1.672-1.672l6.888-2.755A8 8 0 0 0 6.267 17.579M13.25 12a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Explore24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
