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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M8.737 11.166 6 9.727l1.304 4.91c.02.072.042.143.08.208C7.596 15.218 8.58 16.5 12 16.5s4.403-1.283 4.616-1.655a.9.9 0 0 0 .08-.209L18 9.727l-2.737 1.44a1 1 0 0 1-1.372-.464L12 6.636l-1.89 4.067a1 1 0 0 1-1.373.463"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const PopularUser24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
