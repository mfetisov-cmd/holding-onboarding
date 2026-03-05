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
      <path d="M12.975 3c-3.221 0-5.099.368-6.038.636-.502.143-.857.55-1.021 1.045L3.6 11.666c-.22.662-.09 1.418.513 1.77 2.046 1.197 5.793 1.255 6.93 1.255 0 0-.272 1.219-.698 3.566S9.822 22 12.145 22c1.687-4.035 3.005-5.57 4.413-7.212.585-.682 1.186-1.382 1.835-2.287H21.5l-3-9.184A51 51 0 0 0 12.976 3" />
    </Box>
  );
};

export const ThumbDown24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
