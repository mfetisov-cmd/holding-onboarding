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
        d="M4.5 4a.5.5 0 0 0-.5.5V10h2V9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1h2V9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1h2V4.5a.5.5 0 0 0-.5-.5zM4 11.5a2 2 0 0 0-2 2v6c0 .28.22.5.5.5H5v-1.5h14V20h2.5a.5.5 0 0 0 .5-.5v-6a2 2 0 0 0-2-2z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Hotels24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
