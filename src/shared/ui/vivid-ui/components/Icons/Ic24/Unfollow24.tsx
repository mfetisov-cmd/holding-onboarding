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
      <path d="M11.999 1q.538.001 1.001.095v2.003c2.052.416 3 2.158 3 4.404 0 2.586-1.255 4.502-4.001 4.502-2.748 0-4.003-1.916-4.003-4.502q0-.124.004-.247V5.748L7.996 5.5C7.996 2.916 9.251 1 12 1M3.102 16.559A10 10 0 0 0 12.004 22c1.477 0 2.88-.32 4.14-.895A5 5 0 0 1 14 17c0-1.126.372-2.164 1-3H4.005zM20.414 17l1.415 1.414-1.415 1.414L19 18.414l-1.415 1.415-1.414-1.415L17.586 17l-1.414-1.414 1.414-1.415L19 15.586l1.414-1.414 1.414 1.414z" />
    </Box>
  );
};

export const Unfollow24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
