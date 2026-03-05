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
      <path
        clipRule="evenodd"
        d="m12 13.667-.941 1.254a5 5 0 1 1 0-5.841L12 10.331l.941-1.253a5 5 0 1 1 0 5.841zM4 12a3 3 0 0 1 5.44-1.746L10.748 12 9.44 13.747A3 3 0 0 1 4 12m9.25-.002 1.31 1.748a3 3 0 1 0-.006-3.482z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Endless24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
