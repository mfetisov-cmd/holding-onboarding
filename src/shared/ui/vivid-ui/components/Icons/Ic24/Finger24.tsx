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
      <path d="m19.672.5-3.864 1.035.518 1.932 3.863-1.035zM9.19 1.535 5.325.5l-.518 1.932 3.864 1.035zM10.87 3.426a1.568 1.568 0 0 1 3.13.142V13l1.638-1.282C17.5 10 20 11.5 20 13a8.8 8.8 0 0 0-3.085 2.659c-.901 1.234-2.126 2.854-3.043 3.855C12.234 21.304 11.155 22 8 22 4.598 22 3 20 3 15.85v-2.378c0-1.297.832-2.446 2.063-2.852l5.312-1.753z" />
    </Box>
  );
};

export const Finger24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
