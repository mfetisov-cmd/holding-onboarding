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
        d="m12 15.763 6 3V4.49l-.142-.03C16.758 4.24 14.89 4 12 4s-4.757.24-5.858.46L6 4.49v14.273zM4 22V3s2-1 8-1 8 1 8 1v19l-8-4z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const BookmarkOutlined24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
