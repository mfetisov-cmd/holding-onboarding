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
      <path d="M7.555 5.348A8 8 0 0 1 12 4V2a10 10 0 1 0 10 10h-2A8 8 0 1 1 7.555 5.348" />
      <path d="M19.071 4.929a10 10 0 0 0-4.483-2.588l-.517 1.932a8 8 0 0 1 5.656 5.656l1.932-.517a10 10 0 0 0-2.588-4.483" />
    </Box>
  );
};

export const Pie24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
