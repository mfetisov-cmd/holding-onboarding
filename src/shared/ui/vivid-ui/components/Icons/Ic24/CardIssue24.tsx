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
      <path d="m13.113 3.367-2.124-.57S9.595 4.91 8.146 10.319c-1.45 5.41-1.298 7.935-1.298 7.935l2.124.569zM10.903 19.34l6.956 1.863s1.394-2.111 2.843-7.52C22.152 8.273 22 5.748 22 5.748l-6.956-1.864zM1 13h5v2H1zM6 9H2v2h4z" />
    </Box>
  );
};

export const CardIssue24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
