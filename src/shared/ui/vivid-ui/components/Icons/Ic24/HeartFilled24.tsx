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
      <path d="M2 9.5a5.5 5.5 0 0 1 10-3.163A5.5 5.5 0 0 1 22 9.5c0 4.889-6 9.5-10.003 12.5C8 19 2 14.453 2 9.5" />
    </Box>
  );
};

export const HeartFilled24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
