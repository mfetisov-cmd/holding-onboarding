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
      <path d="M21 5H3V3h18zM10.992 18.67V7h2v11.673L17 14.665v2.828L11.993 22.5 7 17.506v-2.828z" />
    </Box>
  );
};

export const Withdrawal24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
