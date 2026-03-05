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
      <path d="M11 15a5 5 0 0 1-5-5V3H4v7a7 7 0 0 0 7 7h6.677l-4 4h2.828l4.995-4.994L16.494 11h-2.828l4 4z" />
    </Box>
  );
};

export const Sublevel24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
