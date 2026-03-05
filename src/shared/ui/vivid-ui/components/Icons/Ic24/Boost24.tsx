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
      <path d="m12 2.586-8.707 8.707 1.414 1.414L12 5.414l7.293 7.293 1.414-1.414z" />
      <path d="m12 10.586-8.707 8.707 1.414 1.414L12 13.414l7.293 7.293 1.414-1.414z" />
    </Box>
  );
};

export const Boost24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
