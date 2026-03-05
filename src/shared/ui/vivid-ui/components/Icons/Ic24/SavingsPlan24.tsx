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
      <path d="m13.348 4 2-2h5.656v5.658l-2 2V5.41L13.5 10.914l-2.5-2.5-5.293 5.293-1.414-1.414L11 5.586l2.5 2.5L17.585 4zM7 15H3v6h4zM17 11h4v10h-4zM14 13h-4v8h4z" />
    </Box>
  );
};

export const SavingsPlan24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
