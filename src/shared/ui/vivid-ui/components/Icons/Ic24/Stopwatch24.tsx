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
      <path d="M12 1c1.036 0 2.041.131 3 .378v2.08A10 10 0 0 0 12 3c-1.045 0-2.053.16-3 .458v-2.08A12 12 0 0 1 12 1" />
      <path
        clipRule="evenodd"
        d="M21 13a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-5 1.75-3-2.25V8h-2v5.5l5 3.75z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Stopwatch24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
