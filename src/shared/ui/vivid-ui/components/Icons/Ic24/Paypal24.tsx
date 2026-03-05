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
      <path d="m7.916 12.36-.788 5.007-3.107-.16c-.261 0-.355-.143-.318-.404L5.822 3.364c.042-.255.2-.364.458-.364h5.373c2.588 0 4.226 1.742 4.426 4q-.01.287-.053.568a5.15 5.15 0 0 1-5.076 4.35H8.432a.522.522 0 0 0-.516.442" />
      <path d="M9.701 13.918h1.252a7.14 7.14 0 0 0 7.049-6.044c.045-.29.097-.576.103-.872 1.53.8 2.425 2.418 2.146 4.196a5.14 5.14 0 0 1-5.075 4.353h-1.609a.525.525 0 0 0-.517.442l-.72 4.565a.524.524 0 0 1-.516.442H9.08a.426.426 0 0 1-.419-.491z" />
    </Box>
  );
};

export const Paypal24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
