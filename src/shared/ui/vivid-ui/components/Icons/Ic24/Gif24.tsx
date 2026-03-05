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
      <path d="M21 5H3V3h18zM4.74 9.965q.647-.786 1.852-.786.756 0 1.301.348.546.342.714 1.031h2.086q-.155-1.462-1.283-2.35-1.127-.893-2.77-.893-1.384 0-2.446.605A4.13 4.13 0 0 0 2.57 9.6Q2 10.665 2 12.026q0 2.08 1.205 3.37 1.205 1.288 3.118 1.288a4.2 4.2 0 0 0 1.492-.257q.69-.264 1.061-.702l.108.822h1.709v-5.216H6.418v1.738h2.405a1.83 1.83 0 0 1-.624 1.265q-.558.492-1.619.492-1.127 0-1.804-.701-.678-.702-.678-2.033 0-1.35.642-2.128M14.32 16.548v-9.09h-1.984v9.09zM21.4 12.998h-3.195v3.55h-1.984v-9.09H22v1.847h-3.795v1.9h3.196zM3 21h18v-2H3z" />
    </Box>
  );
};

export const Gif24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
