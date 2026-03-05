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
      <path d="M19 11.175v2.828L12 21l-7-7v-2.828l6.008 6.008V2.5h2v14.665L19 11.175Z" />
    </Box>
  );
};

export const ArrowDown24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
