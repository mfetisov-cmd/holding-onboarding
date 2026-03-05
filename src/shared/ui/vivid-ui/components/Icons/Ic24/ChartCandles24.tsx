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
      <path d="M13 4v12h-2V4zM17 11v8h-2v-8zM9 21v-8H7v8zM5 8v8H3V8zM19 15h2V7h-2z" />
    </Box>
  );
};

export const ChartCandles24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
