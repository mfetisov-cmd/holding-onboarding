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
      <path d="M12.001 3c-5.333 0-8 1-8 1v2s2.667-1 8-1c2.541 0 4.418.238 5.632.466q.195.037.368.072v6.634l-3-3V12l4 4 4-4V9.17l-3 3.001V4s-2.666-1-8-1M12.001 19c-2.54 0-4.417-.238-5.631-.466q-.195-.037-.369-.072L6 11.828l3 3V12L5.001 8 1 12.001v2.829l3-3L4.001 20s2.667 1 8 1 8-1 8-1v-2s-2.666 1-8 1" />
    </Box>
  );
};

export const Cryptoswap24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
