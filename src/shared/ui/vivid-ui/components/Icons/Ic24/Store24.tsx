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
        d="M18.674 3H5.327L1.5 13H4v7s4 1 8 1q.501 0 1-.02v-6.758S13.667 14 15 14s2 .222 2 .222v6.358c1.774-.273 3-.58 3-.58v-7h2.5zM8.5 14c-1 0-1.5.167-1.5.167v2.666S7.5 17 8.5 17s1.5-.167 1.5-.167v-2.666S9.5 14 8.5 14"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Store24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
