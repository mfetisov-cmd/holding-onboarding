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
        d="M14.446 3.181a2 2 0 0 1 1.894 1.102l2.863 5.716H22v4h-3.415a3 3 0 0 1-2.682-1.657l-1.085-2.167-3.497 9.345a2 2 0 0 1-3.635.245l-3.095-5.766H2v-4h3.19a3 3 0 0 1 2.643 1.581l1.29 2.403 3.556-9.505a2 2 0 0 1 1.766-1.297"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Beat24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
