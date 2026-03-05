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
      <path d="M21 3c-2.118 7.654-3.538 11.709-7.207 19l-3.85-7.998L2 10.207C9.47 6.27 13.18 5.063 21 3" />
    </Box>
  );
};

export const Location24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
