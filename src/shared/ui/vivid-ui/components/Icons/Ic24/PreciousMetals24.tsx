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
      <path d="M15.818 4.583 17.25 11H6.75l1.432-6.417S9.614 4 12 4s3.818.583 3.818.583M10.072 12.583 11.504 19H1l1.432-6.417S3.865 12 6.252 12s3.82.583 3.82.583M23 19l-1.431-6.417S20.137 12 17.752 12s-3.817.583-3.817.583L12.504 19z" />
    </Box>
  );
};

export const PreciousMetals24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
