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
      <path d="M12 4C5 4 2 5 2 5v3h20V5s-3-1-10-1M22 10H2v9s3 1 10 1 10-1 10-1z" />
    </Box>
  );
};

export const CardFilled24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
