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
      <path d="M15.001 2v7.006l-2 2V5.423l-9.79 9.793-1.414-1.414L11.596 4H6.012l2-2zM12.406 20h5.584l-2 2H9.001v-7.006l2-2v5.583l9.79-9.793 1.414 1.414z" />
    </Box>
  );
};

export const Ticker24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
