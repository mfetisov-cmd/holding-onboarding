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
      <path d="M4 17c5.522 0 10-4.477 10-10a9.95 9.95 0 0 0-1.326-4.977C17.883 2.37 22 6.705 22 12c0 5.522-4.477 10-10 10a10 10 0 0 1-8.675-5.023Q3.66 17 4 17" />
    </Box>
  );
};

export const Moon24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
