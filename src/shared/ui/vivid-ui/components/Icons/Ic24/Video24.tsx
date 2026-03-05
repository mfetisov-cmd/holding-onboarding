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
      <path d="M9.5 4C4.25 4 2 5 2 5v14s2.25 1 7.5 1 7.5-1 7.5-1v-4l5 3V6l-5 3V5s-2.25-1-7.5-1" />
    </Box>
  );
};

export const Video24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
