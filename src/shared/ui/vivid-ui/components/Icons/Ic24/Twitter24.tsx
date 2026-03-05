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
      <path d="M17.726 3h3.054l-6.672 7.625L21.957 21h-6.144l-4.813-6.293L5.492 21H2.436l7.136-8.155L2.043 3h6.3l4.351 5.752zm-1.072 16.172h1.692L7.425 4.732H5.609z" />
    </Box>
  );
};

export const Twitter24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
