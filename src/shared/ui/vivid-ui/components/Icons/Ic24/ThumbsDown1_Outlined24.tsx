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
      viewBox="0 0 19 18"
      width={`${size}rem`}
      {...rest}
    >
      <path d="M5.00016 0.5H14.1668V11.3333L8.3335 17.1667L7.29183 16.125C7.19461 16.0278 7.11475 15.8958 7.05225 15.7292C6.98975 15.5625 6.9585 15.4028 6.9585 15.25V14.9583L7.87516 11.3333H2.50016C2.05572 11.3333 1.66683 11.1667 1.3335 10.8333C1.00016 10.5 0.833496 10.1111 0.833496 9.66667V8C0.833496 7.90278 0.847385 7.79861 0.875163 7.6875C0.902941 7.57639 0.930718 7.47222 0.958496 7.375L3.4585 1.5C3.5835 1.22222 3.79183 0.986111 4.0835 0.791667C4.37516 0.597222 4.68072 0.5 5.00016 0.5ZM12.5002 2.16667H5.00016L2.50016 8V9.66667H10.0002L8.87516 14.25L12.5002 10.625V2.16667ZM14.1668 11.3333V9.66667H16.6668V2.16667H14.1668V0.5H18.3335V11.3333H14.1668Z" />
    </Box>
  );
};

export const ThumbsDown1_Outlined24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
