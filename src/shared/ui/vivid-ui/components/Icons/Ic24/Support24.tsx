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
      <path d="M18 10.18c0-3.043-1.745-5.048-4.156-5.145A46 46 0 0 0 12 5q-1.001.001-1.844.035C7.745 5.132 6 7.137 6 10.18V12h-.002v1L6 15.999A1 1 0 0 1 5 17H3.622c-1.312 0-2.443-.866-2.55-2.174A22 22 0 0 1 1 13c0-.7.029-1.31.071-1.826C1.18 9.866 2.311 9 3.622 9h.454c.426-3.251 2.616-5.827 6-5.963Q10.96 3 12 3t1.924.037c3.384.136 5.574 2.712 6 5.963h.454c1.312 0 2.443.866 2.55 2.174.043.517.072 1.125.072 1.826 0 .7-.029 1.31-.071 1.826C22.82 16.134 21.689 17 20.378 17h-.973c-.912 2.253-2.83 3.857-5.48 3.963q-.884.036-1.925.036L10 21v-2.43c0-.758.444-1.441 1.196-1.526q.351-.042.804-.044.453.002.804.044c.752.085 1.196.768 1.196 1.525v.387c2.33-.175 4-2.159 4-5.136z" />
    </Box>
  );
};

export const Support24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
