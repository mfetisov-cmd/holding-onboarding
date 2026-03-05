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
      <path d="M4 2.75S6.4 2 12 2s8 .75 8 .75v1.937c-.365-.083-.9-.188-1.614-.292C16.985 4.193 14.889 4 12 4s-4.985.193-6.386.395A21 21 0 0 0 4 4.687zM4 6.75S6.4 6 12 6s8 .75 8 .75v1.937c-.365-.083-.9-.188-1.614-.292C16.985 8.193 14.889 8 12 8s-4.985.193-6.386.395A21 21 0 0 0 4 8.687z" />
      <path
        clipRule="evenodd"
        d="M4 10.75S6.4 10 12 10s8 .75 8 .75v10.5s-2.4.75-8 .75-8-.75-8-.75zM8 12c-1.333 0-2 .222-2 .222v3.556S6.667 16 8 16s2-.222 2-.222v-3.556S9.333 12 8 12m6 7.5V18H6v1.5z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Catalogue24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
