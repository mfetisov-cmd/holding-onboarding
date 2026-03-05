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
      <path d="M7 7H3v2h6V3H7zM21 7h-4V3h-2v6h6zM21 17h-4v4h-2v-6h6zM3 17h4v4h2v-6H3z" />
    </Box>
  );
};

export const FullScreenExit24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
