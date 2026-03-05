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
      <path d="M19 12.252A11.95 11.95 0 0 0 12 10c-2.613 0-5.03.835-7 2.252v2.607A9.97 9.97 0 0 1 12 12a9.97 9.97 0 0 1 7 2.859z" />
      <path d="M22 10.82A14.94 14.94 0 0 0 12 7a14.94 14.94 0 0 0-10 3.82V8.25a16.92 16.92 0 0 1 10-3.25c3.738 0 7.194 1.206 10 3.25zM16 16.255A6.97 6.97 0 0 0 12 15a6.97 6.97 0 0 0-4 1.255V19a5 5 0 0 1 4-2c1.635 0 3.088.786 4 2z" />
    </Box>
  );
};

export const WavesVertical24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
