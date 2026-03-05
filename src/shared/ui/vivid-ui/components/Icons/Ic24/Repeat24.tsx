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
      <path d="M12.863 7.5h-2.828l2.481-2.481a6.998 6.998 0 0 0-6.983 9.66A7 7 0 1 0 16.95 7.05l1.414-1.414a9 9 0 1 1-5.813-2.62L10.034.5h2.829l3.5 3.5z" />
    </Box>
  );
};

export const Repeat24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
