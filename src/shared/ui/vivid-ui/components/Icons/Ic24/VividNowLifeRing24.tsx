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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m3.25-2.688a8.03 8.03 0 0 0 4.062-4.062L16.57 14.03a5.02 5.02 0 0 1-2.539 2.54zM9.969 16.57a5.02 5.02 0 0 1-2.54-2.539L4.689 15.25a8.03 8.03 0 0 0 4.062 4.062zM7.429 9.97a5.02 5.02 0 0 1 2.54-2.54L8.75 4.689A8.03 8.03 0 0 0 4.688 8.75zm6.602-2.54 1.219-2.741a8.03 8.03 0 0 1 4.062 4.062L16.57 9.97a5.02 5.02 0 0 0-2.539-2.54M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const VividNowLifeRing24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
