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
      <path d="M11.998 2 5.859 12.186l6.139 3.628 6.139-3.629z" />
      <path d="m11.998 22-6.139-8.65 6.139 3.626 6.142-3.626z" />
    </Box>
  );
};

export const Ethereum24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
