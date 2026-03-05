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
      <path d="M12.183 3H12C6 3 3 4 3 4v16s3 1 9 1 9-1 9-1v-8.086l-2 2v4.51q-.264.05-.579.103C17.028 18.76 14.888 19 12 19s-5.028-.24-6.421-.473q-.315-.053-.579-.103V5.576q.264-.05.579-.103c1.077-.18 2.6-.364 4.57-.439z" />
      <path d="m13.348 5 2-2h5.655v5.658l-2 2V6.411l-6.296 6.296-1.414-1.414L17.586 5z" />
    </Box>
  );
};

export const OpenWith24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
