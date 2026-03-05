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
      <path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4M12 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4M7 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0M5 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4M21 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0M19 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    </Box>
  );
};

export const Drag24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
