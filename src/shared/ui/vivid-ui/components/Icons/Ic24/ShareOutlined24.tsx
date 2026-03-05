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
        d="M12 .773 23.505 11 12 21.227V15a2 2 0 0 0-2 2v5H2v-5C2 11.477 6.477 7 12 7zm2 4.454V9h-2a8 8 0 0 0-8 8v3h4v-3a4 4 0 0 1 4-4h2v3.773L20.495 11z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const ShareOutlined24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
