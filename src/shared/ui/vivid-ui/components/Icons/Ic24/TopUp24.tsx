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
      <path d="M12.992 2v11.673L17 9.665v2.828L11.993 17.5 7 12.506V9.677l3.992 3.993V2zM21 21H3v-2h18z" />
    </Box>
  );
};

export const TopUp24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
