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
      <path d="M12 3c4.832 1.573 7.12 2.83 11 5.5V17h-2V9.88c-2.69 1.768-4.95 2.818-9 4.12-4.333-1.76-6.863-3.003-11-5.5C5.295 5.856 7.596 4.547 12 3" />
      <path d="M5.156 13.127c-.093.91-.155 1.75-.155 2.373L5 18s0 3 7 3 7-3 7-3v-2.5c0-.552-.049-1.274-.125-2.065-1.749.885-3.663 1.633-6.264 2.47l-.692.222-.673-.274c-2.372-.964-4.227-1.782-6.09-2.726" />
    </Box>
  );
};

export const AcademicCapFilled24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
