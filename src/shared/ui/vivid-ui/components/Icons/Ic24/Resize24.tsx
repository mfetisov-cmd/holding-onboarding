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
      <path d="M5 9V5h4V3H3v6zM5 15H3v6h6v-2H5zM15 19v2h6v-6h-2v4zM19 9h2V3h-6v2h4z" />
    </Box>
  );
};

export const Resize24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
