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
      <path d="m1 8.667 5.793 3.044a1 1 0 0 0 1.372-.463L12 3l3.835 8.248a1 1 0 0 0 1.372.463L23 8.667l-2.354 8.86c-.06.226-.139.447-.287.627-.562.683-2.53 2.346-8.359 2.346-5.828 0-7.797-1.663-8.359-2.346-.148-.18-.227-.4-.287-.626z" />
    </Box>
  );
};

export const Crown24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
