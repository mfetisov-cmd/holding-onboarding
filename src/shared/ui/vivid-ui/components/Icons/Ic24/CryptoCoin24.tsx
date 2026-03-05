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
      <path d="M11 16.88V19h2v-2.083c1.021-.155 1.906-.557 2.566-1.205q1-.98 1.177-2.447H14.39q-.393 1.607-2.223 1.607-1.12 0-1.803-.775-.681-.785-.681-2.102 0-1.307.681-2.092.692-.794 1.803-.794 1.812 0 2.223 1.626h2.353q-.177-1.485-1.158-2.438C14.938 7.656 14.046 7.257 13 7.1V5h-2v2.12c-1.127.218-1.956.769-2.634 1.653Q7.348 10.1 7.348 11.995q0 1.924 1.008 3.241c.679.878 1.51 1.426 2.644 1.644" />
      <path
        clipRule="evenodd"
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const CryptoCoin24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
