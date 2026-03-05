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
      <path d="M12 13.413 17.585 19 19 17.586l-5.587-5.587 5.585-5.585L17.584 5l-5.585 5.585L6.414 5 5 6.414 10.585 12 5 17.586 6.412 19z" />
    </Box>
  );
};

export const Close24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
