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
      <path d="m22.005 4.852-7.199 7.193-3.806.956.953-3.812L19.149 2c0-.001.759.188 1.713 1.141s1.143 1.712 1.143 1.712" />
      <path d="M22 17V7.651l-2 2v6.1c-.262.105-.582.22-.963.337-1.43.44-3.73.912-7.037.912q-.434 0-.845-.01l-.533-.014L6 19.48v-3.04l-1.366-.457A12 12 0 0 1 4 15.752V7.248c.262-.104.582-.22.963-.336C6.393 6.472 8.693 6 12 6q.18 0 .356.002l1.927-1.927A34 34 0 0 0 12 4C5 4 2 6 2 6v11s.634.423 2 .88V22a.5.5 0 0 0 .738.439l6.367-3.45q.436.01.895.011c7 0 10-2 10-2" />
    </Box>
  );
};

export const CreatePost24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
