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
      <path d="M11.381 6.003 9 3.066C4.133 3.29 2 4 2 4v15s3 1 10 1 10-1 10-1V7s-3-1-10-1q-.315 0-.619.003" />
    </Box>
  );
};

export const Folder24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
