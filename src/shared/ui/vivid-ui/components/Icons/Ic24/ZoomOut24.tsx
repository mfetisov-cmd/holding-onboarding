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
      <path d="M15 10H7v2h8z" />
      <path
        clipRule="evenodd"
        d="M11 20a8.96 8.96 0 0 0 5.618-1.968L20.586 22 22 20.586l-3.968-3.968A9 9 0 1 0 11 20m0-2a7 7 0 1 0 0-14 7 7 0 0 0 0 14"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const ZoomOut24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
