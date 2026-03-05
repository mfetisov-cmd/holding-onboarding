import { Box } from '@/shared/ui/vivid-ui/components/Box';
import {
  PolymorphicSquareIconProps,
  SquareIconProps,
} from '@/shared/ui/vivid-ui/components/Icons/types';
import { createPolymorphicComponent } from '@/shared/ui/vivid-ui/shared';

const Icon = ({
  color = '#7D33F6',
  component = 'svg',
  size = 24,
  ...rest
}: PolymorphicSquareIconProps) => {
  return (
    <Box
      component={component}
      height={`${size}rem`}
      viewBox="0 0 24 24"
      width={`${size}rem`}
      {...rest}
    >
      <path
        d="M10.002 5c.688 1.486 1.156 2.614 1.584 3.848a5.778 5.778 0 0 0 3.569 3.569c1.232.428 2.36.897 3.845 1.584-1.485.687-2.613 1.155-3.845 1.583a5.776 5.776 0 0 0-3.569 3.569c-.428 1.233-.896 2.36-1.584 3.847-.687-1.486-1.156-2.614-1.585-3.847a5.78 5.78 0 0 0-3.57-3.568C3.615 15.157 2.488 14.688 1 14c1.487-.688 2.615-1.156 3.85-1.584a5.774 5.774 0 0 0 3.569-3.568c.427-1.234.896-2.363 1.583-3.849Z"
        fill={color}
      />
      <path
        d="M17.501 2c.344.743.578 1.307.792 1.924.29.837.947 1.494 1.784 1.784.617.214 1.18.449 1.923.792-.743.344-1.306.578-1.923.792a2.888 2.888 0 0 0-1.784 1.784c-.214.617-.448 1.18-.792 1.924a20.102 20.102 0 0 1-.792-1.924 2.89 2.89 0 0 0-1.785-1.784A19.982 19.982 0 0 1 13 6.5a19.937 19.937 0 0 1 1.925-.792 2.887 2.887 0 0 0 1.784-1.784A19.97 19.97 0 0 1 17.501 2Z"
        fill="#F360B0"
      />
    </Box>
  );
};

export const Magic24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
