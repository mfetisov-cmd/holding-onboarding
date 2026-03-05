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
      <path d="M11 1h2v3h-2zM18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0M13 20v3h-2v-3zM19.07 3.515l1.415 1.414-2.122 2.121-1.414-1.414zM4.93 20.486 3.516 19.07l2.12-2.121 1.415 1.414zM3.516 4.929 4.93 3.514 7.05 5.637 5.637 7.05zM20.485 19.071l-1.415 1.414-2.121-2.121 1.414-1.414zM23 13h-3v-2h3zM4 13v-2H1v2z" />
    </Box>
  );
};

export const Sun24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
