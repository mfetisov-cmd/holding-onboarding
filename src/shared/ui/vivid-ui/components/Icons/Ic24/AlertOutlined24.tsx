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
      <path
        clipRule="evenodd"
        d="M13 2h-2v2.067c-3.792.519-6 3.993-6 8.05V16H3.8L3 18s.658.22 1.973.452C6.467 18.717 8.81 19 12 19c3.19 0 5.533-.283 7.027-.548C20.342 18.22 21 18 21 18l-.8-2H19v-3.883c0-4.057-2.208-7.531-6-8.05zm4 14.728c-1.294.152-2.96.272-5 .272s-3.706-.12-5-.272v-4.611c0-1.825.54-3.386 1.403-4.449C9.233 6.644 10.419 6 12 6s2.766.644 3.597 1.668C16.46 8.731 17 10.292 17 12.117z"
        fillRule="evenodd"
      />
      <path d="M9.145 20.923q1.302.075 2.855.077a52 52 0 0 0 2.855-.077 3.001 3.001 0 0 1-5.71 0" />
    </Box>
  );
};

export const AlertOutlined24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
