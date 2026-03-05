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
      <path d="M8 9a2 2 0 1 0-4 0H2a4 4 0 0 1 8 0zM5 13a7 7 0 1 0 14 0h2a9 9 0 0 1-18 0zM19.414 7.586A2 2 0 0 1 20 9h2a4 4 0 1 0-8 0h2a2 2 0 0 1 3.414-1.414" />
    </Box>
  );
};

export const Smile24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
