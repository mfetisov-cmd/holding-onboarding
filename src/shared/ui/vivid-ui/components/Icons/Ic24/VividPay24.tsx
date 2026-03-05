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
      <path d="M9.081 21 2.188 3h5.86l2.154 6.293q1.534 4.605 1.723 5.73.31-1.564 1.879-5.73L16.165 3h5.653l-7.376 18z" />
    </Box>
  );
};

export const VividPay24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
