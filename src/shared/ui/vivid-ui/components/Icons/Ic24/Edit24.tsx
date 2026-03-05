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
      <path d="M19.314 8.9 21 7.212s-.28-1.12-1.687-2.526C17.905 3.279 16.786 3 16.786 3L15.1 4.685zM13.685 6.1 3.527 16.253 3 20.997l4.735-.523 10.164-10.16z" />
    </Box>
  );
};

export const Edit24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
