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
      <path d="M9 5V3H7a4 4 0 0 0-4 4v2h2V7a2 2 0 0 1 2-2zM15 5V3h2a4 4 0 0 1 4 4v2h-2V7a2 2 0 0 0-2-2zM19 15h2v2a4 4 0 0 1-4 4h-2v-2h2a2 2 0 0 0 2-2zM9 19v2H7a4 4 0 0 1-4-4v-2h2v2a2 2 0 0 0 2 2zM9 7c-1.333 0-2 .222-2 .222v3.556S7.667 11 9 11s2-.222 2-.222V7.222S10.333 7 9 7M13 7.222S13.667 7 15 7s2 .222 2 .222v3.556S16.333 11 15 11s-2-.222-2-.222zM9 13c-1.333 0-2 .222-2 .222v3.556S7.667 17 9 17s2-.222 2-.222v-3.556S10.333 13 9 13M13 13.111S13.333 13 14 13s1 .111 1 .111v1.778S14.667 15 14 15s-1-.111-1-.111zM16 15c-.667 0-1 .111-1 .111v1.778s.333.111 1 .111 1-.111 1-.111V15.11S16.667 15 16 15" />
    </Box>
  );
};

export const QrCode24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
