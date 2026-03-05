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
        d="M8 2.75S9 2 12 2s4 .75 4 .75v3.536C17.955 6.582 19 7 19 7l1.5 14S18 22 12 22s-8.5-1-8.5-1L5 7s1.045-.418 3-.714zm6 1.41v1.908A29 29 0 0 0 12 6q-1.078.002-2 .068V4.16c.46-.086 1.112-.16 2-.16s1.54.074 2 .16m2 8.09V8h-2v2.84c-.46.086-1.112.16-2 .16s-1.54-.074-2-.16V8H8v4.25S9 13 12 13s4-.75 4-.75"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const ShoppingCart24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
