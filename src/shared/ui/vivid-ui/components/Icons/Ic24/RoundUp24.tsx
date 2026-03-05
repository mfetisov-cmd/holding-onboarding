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
      <path d="M20 9.77v4.683l-5.359-4.764L13 22h-2L9.359 9.69 4 14.452V9.77l8-7.111z" />
    </Box>
  );
};

export const RoundUp24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
