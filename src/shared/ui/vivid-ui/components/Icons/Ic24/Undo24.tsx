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
      <path d="M10.324 14h-2.83L2.5 9.006 7.506 4h2.828l-4 4H16a6 6 0 1 1 0 12h-5v-2h5a4 4 0 1 0 0-8H6.323z" />
    </Box>
  );
};

export const Undo24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
