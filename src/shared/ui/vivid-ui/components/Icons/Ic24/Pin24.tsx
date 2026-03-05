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
      <path d="M5.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M21 18.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M18.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
    </Box>
  );
};

export const Pin24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
