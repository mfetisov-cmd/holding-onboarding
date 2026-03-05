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
      <path d="M21.004 6.996c-2.66 3.275-4.498 4.879-8.37 7.34l-2.83-2.829c2.39-3.832 4.087-5.714 7.2-8.51 0 0 1.048.28 2.384 1.616 1.335 1.335 1.616 2.383 1.616 2.383M9.472 19.392A3.5 3.5 0 1 0 4 16.5q.001.226.007.466c.025 1.078.053 2.293-1.007 2.717L3.001 21c2.371 0 4.645-.386 6.473-1.604z" />
    </Box>
  );
};

export const Brush24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
