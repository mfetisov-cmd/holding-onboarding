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
      <path d="M7 3c-2.667 0-4 .444-4 .444v7.112S4.333 11 7 11s4-.444 4-.444V3.444S9.667 3 7 3M7 13c-2.667 0-4 .444-4 .444v7.112S4.333 21 7 21s4-.444 4-.444v-7.112S9.667 13 7 13M13 3.444S14.333 3 17 3s4 .444 4 .444v7.112S19.667 11 17 11s-4-.444-4-.444zM17 13c-2.667 0-4 .444-4 .444v7.112S14.333 21 17 21s4-.444 4-.444v-7.112S19.667 13 17 13" />
    </Box>
  );
};

export const TileView24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
