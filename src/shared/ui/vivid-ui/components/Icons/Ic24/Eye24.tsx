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
      <path d="M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
      <path
        clipRule="evenodd"
        d="M12 20c7.7 0 11-8 11-8s-3.3-8-11-8-11 8-11 8 3.3 8 11 8m4-8a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Eye24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
