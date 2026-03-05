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
        d="M16.53 7.47A7.002 7.002 0 0 0 3 10a7 7 0 0 0 4.47 6.53A7.002 7.002 0 0 0 21 14a7 7 0 0 0-4.47-6.53M10 17a7 7 0 0 0 7-7 5 5 0 1 1-7 7"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Compare24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
