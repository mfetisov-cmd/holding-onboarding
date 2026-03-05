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
      <path d="M8 3.5S9 2 12 2s4 1.5 4 1.5v10S15 15 12 15s-4-1.5-4-1.5z" />
      <path d="M7 11v4.302c.154.156.372.35.662.549C8.427 16.375 9.783 17 12 17s3.573-.625 4.338-1.15c.29-.199.508-.392.662-.548V11h2v5s-1.525 2.615-6 2.962V22h-2v-3.038C6.525 18.615 5 16 5 16v-5z" />
    </Box>
  );
};

export const Mic24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
