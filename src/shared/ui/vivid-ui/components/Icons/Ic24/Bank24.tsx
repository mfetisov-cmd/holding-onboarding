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
      <path d="M22 7 12 2 2 7v2h20zM7 11H5s-.5 1-.5 3 .5 3 .5 3h2s-.5-1-.5-3 .5-3 .5-3M3 19v2h18v-2zM19 11h-2s.5 1 .5 3-.5 3-.5 3h2s.5-1 .5-3-.5-3-.5-3M11 11H9v6h2zM13 11h2v6h-2z" />
    </Box>
  );
};

export const Bank24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
