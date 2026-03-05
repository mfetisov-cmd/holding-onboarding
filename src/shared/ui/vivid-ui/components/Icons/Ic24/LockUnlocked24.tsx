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
        d="M6 1.75S7.5 1 12 1s6 .75 6 .75v8.702c1.434.265 2 .548 2 .548v10s-2 1-8 1-8-1-8-1V11s2-1 8-1c1.608 0 2.928.072 4 .177V3.282C15.182 3.14 13.894 3 12 3s-3.183.14-4 .28V8H6zm7 14.368a1.5 1.5 0 1 0-2 0V18h2z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const LockUnlocked24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
