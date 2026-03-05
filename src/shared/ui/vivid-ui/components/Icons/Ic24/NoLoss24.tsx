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
        d="M12 2.001c-6 0-8 1-8 1v11.5c0 4 8 7.5 8 7.5s8-3.5 8-7.5V3s-2-1-8-1m1.256 5.912L12.002 5l-1.255 2.913c-.24.558-.765.94-1.37.996l-3.158.293 2.383 2.093c.456.4.657 1.018.523 1.61L8.428 16l2.727-1.62a1.66 1.66 0 0 1 1.694 0L15.576 16l-.697-3.094a1.66 1.66 0 0 1 .523-1.61l2.383-2.094-3.159-.293a1.66 1.66 0 0 1-1.37-.996"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const NoLoss24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
