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
      <path d="M10.05 9.72 7.305 8.135l-1.098-4.1-1.5 2.6-.867-.501-1 1.732.867.5-1.5 2.598 4.097-1.098 2.746 1.585a3 3 0 0 0 0 1.097l-2.746 1.586-4.097-1.098 1.5 2.597-.867.501 1 1.732.867-.5 1.5 2.598 1.098-4.099 2.745-1.585c.278.238.599.425.95.55V18l-3 3h3v1h2v-1h3l-3-3v-3.17c.351-.125.672-.312.95-.55l2.745 1.585 1.098 4.1 1.5-2.6.867.501 1-1.732-.867-.5 1.5-2.598-4.097 1.098-2.746-1.586a3 3 0 0 0 0-1.097l2.746-1.585 4.097 1.098-1.5-2.597.867-.501-1-1.732-.867.5-1.5-2.598-1.098 4.099L13.95 9.72a3 3 0 0 0-.95-.55V6l3-3h-3V2h-2v1H8l3 3v3.17a3 3 0 0 0-.95.55" />
    </Box>
  );
};

export const Snowflake24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
