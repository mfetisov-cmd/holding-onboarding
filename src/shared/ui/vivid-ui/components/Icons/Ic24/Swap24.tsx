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
      <path d="M12 1H9.173l3 3H12C5 4 2 5 2 5v14s1.244.415 4 .71v-2.012a33 33 0 0 1-2-.288V6.59q.305-.055.68-.113C6.196 6.243 8.594 6 12 6h.172l-3 3h2.83l4-4zM18 6.302V4.29c2.756.295 4 .71 4 .71v14s-3 1-10 1h-.171l3 3h-2.828L8 19l4-4h2.829l-3 3H12c3.405 0 5.803-.243 7.32-.477q.375-.057.68-.113V6.59q-.305-.055-.68-.113A33 33 0 0 0 18 6.302" />
    </Box>
  );
};

export const Swap24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
