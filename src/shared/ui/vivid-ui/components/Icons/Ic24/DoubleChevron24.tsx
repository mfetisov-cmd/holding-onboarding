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
      <path d="M6 7.503v2.829l6.002-6.004L18 10.327V7.498L12.002 1.5zM6 16.498v-2.83l6.002 6.004L18 13.674v2.829L12.002 22.5z" />
    </Box>
  );
};

export const DoubleChevron24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
