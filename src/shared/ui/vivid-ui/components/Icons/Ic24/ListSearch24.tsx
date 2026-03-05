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
      <path d="M3 8h3V6H3zM8 8h13V6H8zM6 13H3v-2h3z" />
      <path
        clipRule="evenodd"
        d="M8 13h2.416a5 5 0 0 0 7.342 6.171L20.587 22l-.001-.001L22 20.585l-2.828-2.828A5 5 0 0 0 12 11H8zm7 5a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const ListSearch24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
