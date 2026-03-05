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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m1.256-13.087L12.002 6l-1.255 2.913c-.24.558-.765.94-1.37.996l-3.158.293 2.383 2.093c.456.4.657 1.018.523 1.61L8.428 17l2.727-1.62a1.66 1.66 0 0 1 1.694 0L15.576 17l-.697-3.094a1.66 1.66 0 0 1 .523-1.61l2.383-2.094-3.159-.293a1.66 1.66 0 0 1-1.37-.996"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const NewStar24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
