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
      <path d="M14 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
      <path
        clipRule="evenodd"
        d="m15.999 3.615 1.149 2.592C20.5 6.5 22 7 22 7v12s-3 1-10 1-10-1-10-1V7s1.499-.5 4.85-.792l1.149-2.593s1.2-.615 4-.615 4 .615 4 .615M16 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Camera24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
