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
        d="M13.53 22 22 13.53s-2.526-3.06-4.983-5.516S11.471 3 11.471 3l-8.447.024L3 11.47s2.057 2.592 4.514 5.049C9.97 18.976 13.529 22 13.529 22M7.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Tag24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
