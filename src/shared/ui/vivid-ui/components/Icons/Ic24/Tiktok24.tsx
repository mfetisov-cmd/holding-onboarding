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
      <path d="M17.567 6.66a4.32 4.32 0 0 1-2.016-3.264V3h-3.1v12.305a2.606 2.606 0 1 1-1.815-2.491v-3.15a5.696 5.696 0 0 0-3.954 10.373 5.696 5.696 0 0 0 8.87-4.731V9.017a7.37 7.37 0 0 0 4.296 1.374l-.001-3.08a4.3 4.3 0 0 1-2.28-.651" />
    </Box>
  );
};

export const Tiktok24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
