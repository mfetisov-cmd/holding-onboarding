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
      <path d="M5 5v4H3V3h6v2zM3 15h2v4h4v2H3zM15 21v-2h4v-4h2v6zM21 9h-2V5h-4V3h6zM7 8v8h2V8zM11 16v-5h2v5zM13 8h-2v2h2zM15 14h2v2h-2zM15 8v5h2V8z" />
    </Box>
  );
};

export const Barcode24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
