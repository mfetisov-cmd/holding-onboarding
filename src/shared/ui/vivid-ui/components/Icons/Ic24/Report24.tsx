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
      <path
        clipRule="evenodd"
        d="M1 21C4.38 13.053 6.836 9.083 12 2c5.165 7.084 7.62 11.054 11 19zm11-2.618q.473 0 .813-.328.336-.328.335-.78 0-.458-.335-.785a1.12 1.12 0 0 0-.813-.335q-.45 0-.786.335-.335.327-.335.786 0 .45.335.78.335.327.786.327M11.332 15h1.363Q13 13.176 13 10.297V8h-2v2.298q0 2.919.332 4.702"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Report24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
