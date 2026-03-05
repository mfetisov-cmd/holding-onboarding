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
      <path d="M12 2c-2.5 0-4 .5-4 .5v1.13c-3.799.27-5 .87-5 .87V6h18V4.5s-1.201-.6-5-.87V2.5S14.5 2 12 2M5 8v13s1.75 1 7 1 7-1 7-1V8z" />
    </Box>
  );
};

export const RecycleBin24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
