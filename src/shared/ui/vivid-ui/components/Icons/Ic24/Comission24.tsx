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
        d="M21.111 4S22 6.667 22 12s-.889 8-.889 8H6.89S6 17.333 6 12s.889-8 .889-8zM12 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6.7.213-7.989 7.989-1.414-1.415L17.286 7.3zM17.5 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        fillRule="evenodd"
      />
      <path d="M2.634 5h2C4.371 6.219 4 8.552 4 12s.371 5.781.634 7h-2C2.371 17.781 2 15.448 2 12s.371-5.781.634-7" />
    </Box>
  );
};

export const Comission24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
