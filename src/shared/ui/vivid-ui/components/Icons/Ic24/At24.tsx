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
        d="M5 18.424q.264.05.579.103C6.972 18.76 9.112 19 12 19s5.028-.24 6.421-.473q.78-.132 1.561-.278.508-.095 1.018-.185V20s-3 1-9 1-9-1-9-1V4s3-1 9-1 9 1 9 1v9.307c0 1.926-1.484 3.257-3.494 3.257-1.25 0-2.193-.6-2.708-1.337C13.746 16.61 12.531 17 10.902 17l-.118-.002q-1.485 0-2.347-.798-.863-.798-.863-2.134 0-1.299.9-2.078.909-.78 2.58-.9l2.81-.213v-.285q0-1.79-1.939-1.79-1.02 0-1.577.408-.547.409-.547 1.15H7.825q0-1.52 1.15-2.44Q10.125 7 12.037 7q1.92 0 3.005 1.02c.724.68 1.086 1.745 1.086 3.031v2.104c.016.322.114.754.486 1.084.945.837 2.386.152 2.386-1.122v-7.54a24 24 0 0 0-.579-.104C17.028 5.24 14.888 5 12 5s-5.028.24-6.421.473q-.315.053-.579.103zm6.545-3.18q1.076 0 1.707-.612.63-.611.63-1.688v-.492l-1.957.158q-1.058.093-1.53.436-.465.334-.464.928 0 1.27 1.614 1.27"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const At24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
