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
      <path d="M2 15s1.899.603 6.187.872L14.817 22s1.181-3 1.181-10-1.182-10-1.182-10L8.188 8.127C3.898 8.397 2 9 2 9zM20 12c0 1.892-.656 3.63-1.754 5h2.417A9.95 9.95 0 0 0 22 12c0-1.821-.487-3.53-1.338-5h-2.417a7.97 7.97 0 0 1 1.755 5" />
    </Box>
  );
};

export const SoundOn24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
