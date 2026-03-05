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
      <path d="M19.253 9.99a3 3 0 1 0-1.943-.511 10 10 0 0 1-1.722 2.96 21.2 21.2 0 0 1-2.174-3.844l-.747-1.689-1.006 1.55c-1.091 1.681-1.68 2.687-2.335 4.238-.717-1.15-1.443-2.085-2.58-3.36l-.983-1.102-.658 1.323C3.257 13.27 2.753 15.289 2 19.66L3.971 20c.636-3.69 1.07-5.495 2.273-8.18.93 1.143 1.534 2.102 2.377 3.656l1.053 1.943.764-2.073c.738-2.003 1.196-3.022 1.949-4.286.65 1.223 1.38 2.33 2.321 3.55l.686.89.804-.784c1.5-1.462 2.437-3.004 3.055-4.726" />
    </Box>
  );
};

export const Marketorder24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
