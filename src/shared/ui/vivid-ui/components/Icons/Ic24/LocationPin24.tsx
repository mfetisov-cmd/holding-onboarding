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
        d="M20.502 10.501c0 .863-.129 1.696-.368 2.481-.28.96-1.091 3.08-3.21 5.269C14.059 21.212 12 22 12 22s-2.058-.788-4.925-3.75c-2.24-2.314-3.02-4.554-3.253-5.422a8.501 8.501 0 1 1 16.68-2.327m-8.5 2.996a2.998 2.998 0 1 0 0-5.997 2.998 2.998 0 0 0 0 5.997"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const LocationPin24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
