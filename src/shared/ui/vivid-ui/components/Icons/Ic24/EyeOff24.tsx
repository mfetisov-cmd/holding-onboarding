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
        d="M3 1.586v2.828L5.125 6.54C2.286 8.883 1 12 1 12s3.3 8 11 8c2.035 0 3.763-.559 5.204-1.381L21 22.414v-2.828zm11.032 13.86-1.514-1.514a2 2 0 0 1-2.45-2.45L8.554 9.968a4 4 0 0 0 5.478 5.478"
        fillRule="evenodd"
      />
      <path d="M15.992 11.751a4 4 0 0 0-3.743-3.743L8.752 4.51C9.732 4.19 10.814 4 12 4c7.7 0 11 8 11 8s-.846 2.052-2.682 4.077z" />
    </Box>
  );
};

export const EyeOff24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
