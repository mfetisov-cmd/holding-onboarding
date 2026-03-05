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
        d="M12 2C7.5 2 6 3 6 3v18s1.5 1 6 1 6-1 6-1V3s-1.5-1-6-1m0 18.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Smartphone24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
