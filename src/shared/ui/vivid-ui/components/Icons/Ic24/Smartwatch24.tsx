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
      <path d="M12 5c-4.667 0-7 .778-7 .778v12.444S7.333 19 12 19s7-.778 7-.778V5.778S16.667 5 12 5M0 8s1-.333 3-.456v8.912C1 16.333 0 16 0 16zM21 7.544v8.912c2-.123 3-.456 3-.456V8s-1-.333-3-.456" />
    </Box>
  );
};

export const Smartwatch24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
