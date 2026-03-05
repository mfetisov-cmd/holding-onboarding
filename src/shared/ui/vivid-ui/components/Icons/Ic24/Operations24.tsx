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
      <path d="M4 7.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M21 5H7v2h14zM17 17H7v2h10zM7 11h7v2H7zM5.25 12a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M4 19.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5" />
    </Box>
  );
};

export const Operations24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
