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
      <path d="M13 1.095A5 5 0 0 0 11.999 1C9.25 1 7.996 2.916 7.996 5.5q0 .125.004.248v1.507l-.004.247c0 2.586 1.255 4.502 4.003 4.502 2.746 0 4-1.916 4-4.502 0-2.246-.947-3.988-2.999-4.404zM12.004 22a10 10 0 0 1-8.902-5.441L4.005 14H20l.905 2.563a10 10 0 0 1-8.9 5.437" />
    </Box>
  );
};

export const Person24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
