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
        d="M11.998 1.5c-1.575 0-2.1.573-2.1.573l-.315 1.486a2.864 2.864 0 0 1-3.689 2.13L4.45 5.218s-.759.168-1.546 1.532c-.788 1.364-.554 2.105-.554 2.105L3.48 9.872a2.864 2.864 0 0 1 0 4.26l-1.128 1.014s-.234.74.554 2.104c.787 1.364 1.546 1.533 1.546 1.533l1.442-.47a2.864 2.864 0 0 1 3.689 2.13l.314 1.484s.525.573 2.1.573 2.1-.573 2.1-.573l.314-1.485a2.864 2.864 0 0 1 3.69-2.13l1.441.47s.759-.168 1.546-1.532c.788-1.364.554-2.105.554-2.105l-1.127-1.013a2.864 2.864 0 0 1 0-4.26l1.133-1.017s.234-.741-.554-2.105c-.787-1.364-1.546-1.533-1.546-1.533l-1.447.472a2.864 2.864 0 0 1-3.69-2.13l-.314-1.486s-.525-.573-2.1-.573M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Settings24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
