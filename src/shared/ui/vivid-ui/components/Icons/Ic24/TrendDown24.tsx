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
      <path d="M2.207 6.61c2.049 2.66 2.965 4.118 3.845 6.711l.483 1.422 1.126-.994c2.628-2.32 4.445-3.39 6.97-4.502 1.257 1.92 1.977 3.413 2.612 5.32a3 3 0 1 0 1.92-.563c-.764-2.314-1.654-4.103-3.338-6.568l-.462-.676-.753.319c-2.714 1.148-4.663 2.17-7.172 4.232C6.58 9.204 5.551 7.674 3.792 5.39z" />
      <path d="M14 18H3v-2h11z" />
    </Box>
  );
};

export const TrendDown24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
