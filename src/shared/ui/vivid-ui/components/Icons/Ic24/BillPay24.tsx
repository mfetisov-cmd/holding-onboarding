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
      <path d="M12 3C7 3 4 4 4 4v4.042l2 2.061V5.561q.224-.046.483-.093C7.753 5.237 9.633 5 12 5s4.247.237 5.517.468q.259.047.483.093v4.542l2-2.061V4s-3-1-8-1" />
      <path d="M8 9V7h8v2zM12 13H8v-2h4z" />
      <path d="M15.565 15.486 22 8.852V21H2V8.852l6.435 6.634A5 5 0 0 0 12 17a5 5 0 0 0 3.565-1.514" />
    </Box>
  );
};

export const BillPay24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
