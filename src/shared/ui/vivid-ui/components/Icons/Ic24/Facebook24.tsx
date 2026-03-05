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
      <path d="M22 12c0 5.112-3.837 9.328-8.788 9.927v-6.872h2.704l.56-3.055h-3.269v-1.08c0-1.617.632-2.237 2.272-2.237.508 0 .92.012 1.157.036V5.951c-.449-.124-1.54-.248-2.173-.248-3.34 0-4.88 1.576-4.88 4.98V12H7.52v3.056h2.063v6.65C5.228 20.625 2 16.689 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10" />
    </Box>
  );
};

export const Facebook24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
