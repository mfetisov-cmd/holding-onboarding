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
      <path d="m11.93 13-1.434 4.833h7.667a.387.387 0 0 1 .4.373v.127l-.667 2.3a.5.5 0 0 1-.5.367H5.663l1.967-6.7-2.2.666.5-1.533 2.2-.666 2.766-9.4a.5.5 0 0 1 .5-.367h2.967a.386.386 0 0 1 .4.374V3.5l-2.334 7.933 2.2-.666-.466 1.6z" />
    </Box>
  );
};

export const Litecoin24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
