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
      <path d="M12 10h3v2h-3v3h-2v-3H7v-2h3V7h2z" />
      <path
        clipRule="evenodd"
        d="M16.618 18.032a9 9 0 1 1 1.414-1.414L22 20.586 20.586 22zM18 11a7 7 0 1 1-14 0 7 7 0 0 1 14 0"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const ZoomIn24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
