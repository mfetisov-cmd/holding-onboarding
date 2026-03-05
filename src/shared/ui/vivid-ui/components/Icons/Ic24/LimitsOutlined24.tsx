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
      <path d="m13.932 12.482 3.275-3.275-1.414-1.414-3.275 3.275a2 2 0 1 0 1.414 1.414" />
      <path
        clipRule="evenodd"
        d="M5.804 20.85c.33.26.715.443 1.123.548C8.303 21.752 9.986 22 12 22s3.697-.248 5.073-.602a3 3 0 0 0 1.123-.549A9.98 9.98 0 0 0 22 13c0-5.523-4.477-10-10-10S2 7.477 2 13a9.98 9.98 0 0 0 3.804 7.85M4 13a7.98 7.98 0 0 0 3.044 6.28c.092.073.218.139.381.18 1.212.312 2.727.54 4.575.54s3.363-.228 4.575-.54c.163-.041.29-.107.381-.18A8 8 0 1 0 4 13"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const LimitsOutlined24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
