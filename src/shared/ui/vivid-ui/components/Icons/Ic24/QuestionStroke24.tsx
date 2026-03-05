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
      <path d="M10.175 16.96h2.317v-.676q0-.938.573-1.64.573-.705 1.797-1.576.6-.43.95-.716.366-.286.886-.808.52-.534.807-1.015.287-.495.495-1.211a5.3 5.3 0 0 0 .221-1.537q0-2.578-1.666-4.18Q14.9 2.002 12.089 2 9.393 2 7.583 3.77q-1.81 1.759-1.81 4.415h2.579q0-1.64 1.054-2.734 1.055-1.107 2.63-1.107 1.615 0 2.579 1.002.963.99.963 2.565 0 .509-.143.977a3.5 3.5 0 0 1-.352.807q-.194.34-.573.73-.377.39-.664.637-.286.235-.768.613-.677.52-1.094.898-.404.378-.885.963a4 4 0 0 0-.703 1.264 4.8 4.8 0 0 0-.222 1.484zM11.43 22a1.91 1.91 0 1 0 0-3.82 1.91 1.91 0 0 0 0 3.82" />
    </Box>
  );
};

export const QuestionStroke24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
