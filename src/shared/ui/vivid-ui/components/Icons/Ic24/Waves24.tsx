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
      <path d="M11.747 19A11.95 11.95 0 0 0 14 12c0-2.612-.834-5.03-2.252-7H9.141a9.97 9.97 0 0 1 2.858 7 9.97 9.97 0 0 1-2.858 7z" />
      <path d="M13.18 22A14.94 14.94 0 0 0 17 12c0-3.842-1.445-7.346-3.82-10h2.569a16.92 16.92 0 0 1 3.25 10c0 3.738-1.206 7.194-3.25 10zM7.745 16A6.97 6.97 0 0 0 9 12a6.97 6.97 0 0 0-1.255-4H5c1.214.912 2 2.364 2 4a5 5 0 0 1-2 4z" />
    </Box>
  );
};

export const Waves24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
