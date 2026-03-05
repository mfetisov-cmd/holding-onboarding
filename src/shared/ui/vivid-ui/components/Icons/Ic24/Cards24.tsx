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
      <path d="M2 3.75S4.25 3 9.5 3s7.5.75 7.5.75V6H2zM2 14.25V8h15v6.25s-2.25.75-7.5.75-7.5-.75-7.5-.75" />
      <path d="M7 20.25v-3.31q1.126.058 2.5.06c2.72 0 4.697-.194 6.023-.398a19 19 0 0 0 1.51-.29c.513-.123 1.013-.295 1.512-.466l.455-.155V9.218c2.067.222 3 .533 3 .533v10.5s-2.25.75-7.5.75-7.5-.75-7.5-.75" />
    </Box>
  );
};

export const Cards24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
