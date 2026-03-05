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
        d="M12 3C6 3 3 4 3 4v16s3 1 9 1 9-1 9-1V4s-3-1-9-1M6.948 17h1.737v-3.67q0-2.107-.117-2.851L11.16 17h1.654l2.605-6.535q-.069.513-.082 1.1-.014.588-.014 2.284V17h1.737V6.767h-1.77l-3.303 8.148-3.301-8.148H6.948z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const MilesCarM24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
