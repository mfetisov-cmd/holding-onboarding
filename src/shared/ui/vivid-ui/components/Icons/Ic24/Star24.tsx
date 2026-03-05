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
        d="m12 .439-2.42 5.62a3.01 3.01 0 0 1-2.487 1.807L1 8.43l4.597 4.039a3.01 3.01 0 0 1 .95 2.922l-1.345 5.97 5.261-3.124a3.01 3.01 0 0 1 3.074 0l5.261 3.124-1.345-5.97a3.01 3.01 0 0 1 .95-2.922L23 8.43l-6.093-.564a3.01 3.01 0 0 1-2.487-1.807z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Star24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
