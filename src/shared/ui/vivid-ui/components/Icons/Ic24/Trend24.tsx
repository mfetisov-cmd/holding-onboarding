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
      <path d="m14.476 7.001-2 2h5.109L12 14.586l-4-4-6 6L3.414 18 8 13.414l4 4 7.001-7v5.11l2-2V7.001z" />
    </Box>
  );
};

export const Trend24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
