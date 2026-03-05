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
        d="m12 9.81-1.635-2.322A3.5 3.5 0 0 0 4 9.5c0 1.69 1.051 3.582 2.958 5.614 1.503 1.601 3.33 3.075 5.039 4.38 1.708-1.307 3.538-2.794 5.042-4.402C18.952 13.046 20 11.154 20 9.5a3.5 3.5 0 0 0-6.365-2.012zM11.997 22C8 19 2 14.453 2 9.5a5.5 5.5 0 0 1 10-3.163 5.5 5.5 0 0 1 1.444-1.41A5.5 5.5 0 0 1 22 9.5c0 4.888-6 9.499-10.003 12.499"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const HeartStroked24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
