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
        d="M12 3a5 5 0 0 0-5 5v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-5h-2a6 6 0 0 1-6-6V8a3 3 0 0 1 6 0 1 1 0 1 0 2 0 5 5 0 0 0-5-5M5 8a7 7 0 0 1 14 0 3 3 0 0 1-6 0 1 1 0 0 0-2 0v1a4 4 0 0 0 4 4h2a2 2 0 0 1 2 2v5a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M9 18a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1"
        fillRule="evenodd"
        opacity=".5"
      />
    </Box>
  );
};

export const HotelRoomTag24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
