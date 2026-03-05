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
        d="m17 7 .485-2.858A70 70 0 0 0 12.998 4c-7 0-9 1-9 1l-.34 2H1v2h6v2H2.977l-.917 5.385c-.035.204-.06.408-.06.615a3 3 0 0 0 5.891.803 69 69 0 0 0 6.277.19 3.001 3.001 0 0 0 5.78-.436c1.622-.268 2.199-.557 2.199-.557L23 12l-3.41-5zM4 17a1 1 0 1 1 2 0 1 1 0 0 1-2 0m13-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-.857-4h4.436l-2.046-3h-1.874z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Delivery24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
