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
        d="M17 11a4 4 0 0 1-3.874-3H3V6h10.126A4.002 4.002 0 0 1 21 7a4 4 0 0 1-4 4m0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4M10.874 18A4.002 4.002 0 0 1 3 17a4 4 0 0 1 7.874-1H21v2zM9 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Options24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
