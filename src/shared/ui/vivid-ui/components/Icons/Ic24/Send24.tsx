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
      <path d="M3 21c8.364-2.765 12.543-4.774 20-9-7.542-4.393-11.295-6.304-20-9 0 0 1.008 3.856 1.158 8H11v2H4.158C4.008 17.143 3 21 3 21" />
    </Box>
  );
};

export const Send24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
