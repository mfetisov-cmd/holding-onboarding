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
      <path d="M22 17V6s-3-2-10-2S2 6 2 6v11s.634.423 2 .88V22a.5.5 0 0 0 .738.439l6.367-3.45q.436.01.895.011c7 0 10-2 10-2" />
    </Box>
  );
};

export const CommentFilled24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
