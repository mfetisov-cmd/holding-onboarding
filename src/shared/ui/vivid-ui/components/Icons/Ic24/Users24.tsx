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
      <path d="M8.5 1q.405 0 .751.074V2.62c1.52.319 2.232 1.636 2.249 3.342-.597.846-.881 1.835-.969 2.812-.484.46-1.157.726-2.03.726C6.44 9.5 5.5 8.02 5.5 6.023q0-.096.003-.191V4.667l-.003-.19C5.5 2.48 6.44 1 8.5 1M10.5 11.023V11H2.66L2 12.918c1.026 2.056 2.95 3.56 5.24 3.97L8.232 14h2.938c-.49-.93-.67-1.98-.67-2.977M16.251 6.074a3.7 3.7 0 0 0-.75-.074C13.44 6 12.5 7.48 12.5 9.476q0 .097.003.191v1.165l-.003.19c0 1.998.94 3.478 3 3.478s3-1.48 3-3.477c0-1.736-.71-3.08-2.249-3.403zM9 17.918C10.21 20.342 12.667 22 15.5 22s5.29-1.657 6.5-4.079L21.34 16H9.66z" />
    </Box>
  );
};

export const Users24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
