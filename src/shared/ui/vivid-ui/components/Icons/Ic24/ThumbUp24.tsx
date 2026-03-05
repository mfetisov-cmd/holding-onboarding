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
      <path d="M11.025 21c3.221 0 5.099-.368 6.038-.636.502-.143.857-.55 1.021-1.045l2.316-6.985c.22-.662.09-1.418-.513-1.77-2.047-1.197-5.793-1.254-6.93-1.254 0 0 .272-1.22.698-3.567S14.178 2 11.855 2C10.168 6.035 8.85 7.57 7.442 9.212c-.585.682-1.186 1.382-1.835 2.287H2.5l3 9.184c1.548.172 3.465.317 5.525.317" />
    </Box>
  );
};

export const ThumbUp24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
