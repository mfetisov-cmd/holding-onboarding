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
        d="M5 2.778S7.333 2 12 2s7 .778 7 .778v12.444S16.667 16 12 16s-7-.778-7-.778zM12.001 4l1.112 2.581c.144.334.459.564.822.597l2.798.26-2.112 1.854a1 1 0 0 0-.314.967L14.926 13l-2.416-1.435a1 1 0 0 0-1.016 0L9.077 13l.618-2.741a1 1 0 0 0-.314-.967L7.27 7.438l2.798-.26a1 1 0 0 0 .822-.597z"
        fillRule="evenodd"
      />
      <path d="m2.094 20 1.761-3.051c.358.12.731.243 1.097.335.343.085.833.194 1.47.3.94.156 2.198.308 3.776.377L7.29 23l-1.443-2.5a1 1 0 0 0-.867-.5zM21.906 20l-1.761-3.051c-.358.12-.731.243-1.097.335-.343.085-.832.194-1.47.3-.94.156-2.198.308-3.776.377L16.71 23l1.443-2.5a1 1 0 0 1 .866-.5z" />
    </Box>
  );
};

export const Achievements24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
