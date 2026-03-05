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
      <path d="M7 8.823v-2.83L11.993 1 17 6.007v2.828l-4.008-4.008V15h-2V4.83z" />
      <path d="M6.141 10.515c.8-.14 1.77-.279 2.859-.377v2.008c-.953.092-1.805.215-2.516.339-.609.106-1.112.212-1.484.296v6.437A32.632 32.632 0 0 0 12 20a32.6 32.6 0 0 0 7-.782v-6.437c-.372-.085-.875-.19-1.484-.296A33 33 0 0 0 15 12.146v-2.008c1.09.098 2.059.238 2.859.377.74.128 1.338.257 1.753.355.467.11.927.244 1.388.376v9.508c-.461.132-.921.266-1.388.375-.415.098-1.013.227-1.753.356A34.6 34.6 0 0 1 12 22c-2.321 0-4.38-.258-5.859-.515a31 31 0 0 1-1.753-.355c-.467-.11-.927-.244-1.388-.376v-9.509c.461-.131.921-.265 1.388-.375a31 31 0 0 1 1.753-.355" />
    </Box>
  );
};

export const ShareIos24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
