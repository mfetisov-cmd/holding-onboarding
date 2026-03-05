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
      <path d="M7 2h2.83l-4 3.999L19 5.998v2l-13.172.001 4 4.001H7L2 7zM18.173 17.999 5.002 18v-2l13.168-.001-4-3.999H17l5 5-5 5h-2.828z" />
    </Box>
  );
};

export const Transfer24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
