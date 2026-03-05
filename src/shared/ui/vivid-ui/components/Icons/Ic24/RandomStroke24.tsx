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
      <path d="M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M8 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M17.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
      <path
        clipRule="evenodd"
        d="M12 3C6 3 3 4 3 4v16s3 1 9 1 9-1 9-1V4s-3-1-9-1M5.579 18.527q-.315-.053-.579-.103V5.576q.264-.05.579-.103C6.972 5.24 9.112 5 12 5s5.028.24 6.421.473q.315.053.579.103v12.848q-.264.05-.579.103C17.028 18.76 14.888 19 12 19s-5.028-.24-6.421-.473"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const RandomStroke24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
