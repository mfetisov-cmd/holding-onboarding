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
      <path d="M13 11h9V3s-3-1-9-1z" />
      <path d="M3 4.944s2.667-.888 8-.942V13h9v7.055S17.167 21 11.5 21 3 20.055 3 20.055z" />
    </Box>
  );
};

export const Installments24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
