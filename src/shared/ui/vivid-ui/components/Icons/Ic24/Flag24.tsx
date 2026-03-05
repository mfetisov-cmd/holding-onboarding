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
      <path d="M17 3.688v2.316c3.493.056 5 .684 5 .684v9.625S20.35 17 16.5 17s-5.5-.687-5.5-.687v-3.31Q10.755 13 10.5 13c-1.97 0-3.452.129-4.5.275V22H4V3.688S5.95 3 10.5 3s6.5.688 6.5.688" />
    </Box>
  );
};

export const Flag24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
