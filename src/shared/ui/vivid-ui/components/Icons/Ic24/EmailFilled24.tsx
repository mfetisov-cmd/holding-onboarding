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
      <path d="M12 4C5 4 2 5 2 5l7.861 8.084A3.01 3.01 0 0 0 12 14c.776 0 1.551-.319 2.139-.916L22 5s-3-1-10-1" />
      <path d="m22 7.852-6.435 6.634A5 5 0 0 1 12 16a5 5 0 0 1-3.565-1.514L2 7.852V20h20z" />
    </Box>
  );
};

export const EmailFilled24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
