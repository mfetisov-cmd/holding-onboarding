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
      <path d="M11.999 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M11.999 23a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5.204 18.232a2 2 0 1 1-2-3.464 2 2 0 0 1 2 3.464M5.936 8.5a2 2 0 1 0-3.465-2 2 2 0 0 0 3.465 2M20.793 14.768a2 2 0 1 1-2 3.464 2 2 0 0 1 2-3.464M20.999 9.58V4.594l-5.4 5.478L13.6 8.047a2.25 2.25 0 0 0-3.205 0L8 10.478v4.986l4-4.058 1.997 2.027a2.25 2.25 0 0 0 3.205 0z" />
    </Box>
  );
};

export const Cryptoearnings24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
