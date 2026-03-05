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
        d="M16 2.273S16.25 2 17 2s1 .273 1 .273l.15.708a1.364 1.364 0 0 0 1.757 1.014l.69-.225s.36.08.736.73c.375.65.264 1.002.264 1.002l-.54.485a1.364 1.364 0 0 0 0 2.028l.537.483s.111.353-.264 1.002c-.375.65-.736.73-.736.73l-.687-.224a1.364 1.364 0 0 0-1.757 1.014l-.15.707S17.75 12 17 12s-1-.273-1-.273l-.149-.707a1.364 1.364 0 0 0-1.757-1.014l-.686.224s-.361-.08-.736-.73-.264-1.002-.264-1.002l.537-.483a1.364 1.364 0 0 0 0-2.028l-.539-.485s-.111-.352.264-1.002.736-.73.736-.73l.688.225a1.364 1.364 0 0 0 1.757-1.015zM18.25 7a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
        fillRule="evenodd"
      />
      <path d="M21 20v-7.255a7 7 0 0 1-2 .965v4.714q-.264.05-.579.103C17.028 18.76 14.888 19 12 19s-5.028-.24-6.421-.473q-.315-.053-.579-.103V5.576q.264-.05.579-.103c1.1-.184 2.668-.372 4.702-.443a7 7 0 0 1 .97-2.025C5.751 3.083 3 4 3 4v16s3 1 9 1 9-1 9-1" />
    </Box>
  );
};

export const Rules24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
