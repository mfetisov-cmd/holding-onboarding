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
      <path d="m16 6-4-4-4 4h3v10.575l-5.458-5.46L7.657 9H2v5.657l2.128-2.128L10.596 19h2.816l6.464-6.467L22 14.657V9h-5.657l2.12 2.119L13 16.583V6zM18 22v-2H6v2z" />
    </Box>
  );
};

export const Split24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
