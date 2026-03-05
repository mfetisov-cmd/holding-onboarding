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
      <path d="m18.001 7.996-2-2v8.583L6.418 4.995 5.004 6.41l9.59 9.59H6l2 2h10z" />
    </Box>
  );
};

export const ArrowDownRight24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
