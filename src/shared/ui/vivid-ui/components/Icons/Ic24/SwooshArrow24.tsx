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
      <path d="M12 2 2 11l10 9v-6h1a3 3 0 0 1 3 3v5h6v-5a9 9 0 0 0-9-9h-1z" />
    </Box>
  );
};

export const SwooshArrow24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
