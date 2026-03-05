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
      <path d="M12.992 21V9.327L17 13.335v-2.828L11.993 5.5 7 10.494v2.829l3.992-3.993V21zM21 2H3v2h18z" />
    </Box>
  );
};

export const Upload24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
