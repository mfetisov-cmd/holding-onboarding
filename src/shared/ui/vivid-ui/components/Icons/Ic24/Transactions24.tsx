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
      <path d="M3 4h14v4H3zM3 14h5v-4H3z" />
      <path
        clipRule="evenodd"
        d="M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0m-5-.414V13h-2v3.415l2.293 2.292 1.414-1.414z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Transactions24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
