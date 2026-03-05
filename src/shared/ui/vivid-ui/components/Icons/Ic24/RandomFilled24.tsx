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
        d="M12 3C6 3 3 4 3 4v16s3 1 9 1 9-1 9-1V4s-3-1-9-1m0 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-3-6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M7.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M18 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const RandomFilled24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
