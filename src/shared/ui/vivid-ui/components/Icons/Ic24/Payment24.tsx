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
      <path d="M5.682 8.025C2.204 10.033 1 11.391 1 11.391l.801 1.387 9.938-5.737-.802-1.388s-1.777.364-5.255 2.372M12.74 8.776l-9.937 5.737 2.213 3.834s1.778-.364 5.256-2.372 4.682-3.366 4.682-3.366zM15.645 15A4 4 0 0 0 17 12a4 4 0 0 0-1.354-3h2.551c.51.883.803 1.907.803 3a6 6 0 0 1-.803 3zM21 12c0 1.892-.656 3.63-1.754 5h2.417A9.95 9.95 0 0 0 23 12c0-1.822-.487-3.53-1.338-5h-2.417a7.97 7.97 0 0 1 1.755 5" />
    </Box>
  );
};

export const Payment24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
