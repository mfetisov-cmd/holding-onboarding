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
      <path d="M19.022 7.553c-.243-2.5-2.403-3.336-5.128-3.571L13.886.549l-2.112.003.009 3.341c-.556.001-1.123.013-1.686.025L10.089.554l-2.11.002L7.986 4c-1.418.012-2.837.004-4.256 0l.004 2.255s1.559-.032 1.533-.003c.855-.001 1.134.495 1.216.923.004 3.513.003 5.83.008 9.538-.037.269-.195.698-.793.7.028.024-1.534.002-1.534.002l-.417 2.521 2.748-.003c.511 0 1.014.008 1.508.01l.006 3.508 2.109-.002-.005-3.471q.868.016 1.687.014l.003 3.455 2.111-.003-.003-3.502c3.549-.208 6.032-1.105 6.336-4.439.246-2.684-1.018-3.88-3.034-4.361 1.224-.625 1.99-1.76 1.81-3.59m-2.948 7.54c.005 2.621-4.485 2.329-5.915 2.332l-.006-4.648c1.432-.001 5.918-.419 5.921 2.316M15.088 8.5c.002 2.385-3.745 2.147-4.937 2.148l-.002-4.25c1.192-.002 4.935-.385 4.939 2.102" />
    </Box>
  );
};

export const Bitcoin24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
