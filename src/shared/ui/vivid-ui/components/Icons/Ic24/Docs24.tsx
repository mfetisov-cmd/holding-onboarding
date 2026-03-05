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
        d="M2 5s3-1 10-1 10 1 10 1v14s-3 1-10 1-10-1-10-1zm3 11v-2h8v2zm2-9c-1.333 0-2 .222-2 .222v3.556S5.667 11 7 11s2-.222 2-.222V7.222S8.333 7 7 7"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Docs24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
