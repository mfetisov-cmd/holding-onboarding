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
      <path d="M10.642 8.145q0 1.825-1.16 2.996-1.16 1.16-2.964 1.16-1.803 0-2.963-1.16-1.16-1.172-1.16-2.996 0-1.814 1.16-2.974 1.17-1.17 2.963-1.17t2.953 1.17q1.171 1.16 1.171 2.974M19.3 4.232 7.319 20H4.682L16.663 4.232zM7.984 9.674q.56-.59.56-1.529t-.56-1.519q-.558-.59-1.466-.59-.906 0-1.466.58-.548.58-.548 1.53 0 .938.559 1.528.56.591 1.455.591.908 0 1.466-.59m12.466 3.481q1.16 1.16 1.16 2.974t-1.16 2.985q-1.15 1.17-2.943 1.17-1.803 0-2.964-1.17-1.16-1.17-1.16-2.985 0-1.813 1.15-2.974 1.16-1.17 2.974-1.17 1.793 0 2.943 1.17m-1.488 4.504q.56-.591.56-1.53 0-.938-.56-1.518-.558-.591-1.455-.591-.907 0-1.466.59-.56.58-.559 1.52 0 .938.559 1.529.559.59 1.466.59.897 0 1.455-.59" />
    </Box>
  );
};

export const Perfomance24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
