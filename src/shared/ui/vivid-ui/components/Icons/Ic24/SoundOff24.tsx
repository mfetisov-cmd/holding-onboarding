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
      <path d="M3 1.586v2.828l3.817 3.817C3.49 8.526 2 9 2 9v6s1.899.603 6.187.872L14.817 22s.588-1.494.934-4.834L21 22.414v-2.828zM14.816 2s1.155 2.93 1.182 9.757L10.36 6.119z" />
    </Box>
  );
};

export const SoundOff24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
