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
        d="m21.411 6.094-.752.658c-4.536 3.97-6.904 6.359-10.908 10.909l-.745.846-.752-.841a64 64 0 0 0-4.516-4.561l-.369-.328-.018-.016-.004-.004-.757-.654 1.308-1.514.756.654L4 12l.654-.757.003.003.006.005.022.02a24 24 0 0 1 .395.35 66.185 66.185 0 0 1 3.91 3.88c3.628-4.084 6.033-6.474 10.351-10.254l.753-.658z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Check24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
