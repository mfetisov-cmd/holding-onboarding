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
      <path d="m12 2 10 9-10 9v-6h-1a3 3 0 0 0-3 3v5H2v-5a9 9 0 0 1 9-9h1z" />
    </Box>
  );
};

export const ShareFilled24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
