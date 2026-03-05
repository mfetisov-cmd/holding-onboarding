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
        d="M12 2C7 2 4 3 4 3v18s4 1 8 1 8-1 8-1V3s-3-1-8-1M8 7v2h8V7zm0 6v-2h8v2zm0 4h4v-2H8z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const ReaderFilled24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
