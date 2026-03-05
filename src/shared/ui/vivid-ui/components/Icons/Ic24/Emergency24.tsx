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
      <path d="M13 1h-2v3h2zM7 11.821C7 8.67 8.848 6 12 6s5 2.67 5 5.821v5.446S15.75 18 12 18s-5-.733-5-.733zM3 20.722v-2.158c.3.136.698.295 1.206.456 1.509.478 3.996.98 7.794.98s6.285-.502 7.794-.98c.508-.161.906-.32 1.206-.456v2.158q-.279.102-.601.204c-1.709.542-4.358 1.061-8.25 1.074h-.297c-3.893-.013-6.542-.532-8.25-1.073A14 14 0 0 1 3 20.722M22 10v2h-3v-2zM5 12v-2H2v2zM7.758 5.343 6.344 6.757l-2.122-2.12 1.414-1.415zM19.778 4.636l-1.415-1.414-2.121 2.121 1.414 1.414z" />
    </Box>
  );
};

export const Emergency24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
