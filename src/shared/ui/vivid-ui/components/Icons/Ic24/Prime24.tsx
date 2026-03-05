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
      <path d="M11.999 1.496c.802 1.734 1.349 3.05 1.848 4.49a6.74 6.74 0 0 0 4.163 4.163c1.438.5 2.753 1.047 4.486 1.848-1.733.802-3.048 1.348-4.486 1.847a6.74 6.74 0 0 0-4.163 4.163c-.5 1.44-1.046 2.755-1.848 4.49-.802-1.735-1.35-3.05-1.85-4.49a6.74 6.74 0 0 0-4.164-4.162c-1.44-.5-2.755-1.046-4.489-1.848 1.735-.802 3.051-1.349 4.492-1.848a6.74 6.74 0 0 0 4.163-4.163c.5-1.44 1.046-2.756 1.848-4.49" />
    </Box>
  );
};

export const Prime24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
