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
      <path d="m6.973 8.66.858-2.426q.105-.315.161-.57.015.115.157.57l.867 2.425z" />
      <path
        clipRule="evenodd"
        d="M1 1.778S3.333 1 8 1s7 .778 7 .778v12.444S12.667 15 8 15s-7-.778-7-.778zM4.598 11.5H5.97l.61-1.733H9.4l.61 1.733h1.392L8.673 4H7.321z"
        fillRule="evenodd"
      />
      <path d="M9 16.988v5.234S11.333 23 16 23s7-.778 7-.778V9.778s-2-.667-6-.766v3.539h3.293v1.101h-1.369c-.503 1.385-1.18 2.527-2.044 3.461.964.744 2.152 1.295 3.581 1.616-.27.262-.634.794-.812 1.12-1.509-.394-2.725-1.016-3.713-1.854-1.014.815-2.226 1.427-3.65 1.873a7 7 0 0 0-.71-1.092c1.39-.366 2.555-.894 3.507-1.62a9 9 0 0 1-.586-.745q-.393.084-.918.173c-1.094.182-2.62.358-4.579.404" />
      <path d="M15.779 16.074q.108.127.224.247.2-.215.384-.449-.304.105-.608.202M17.611 13.652q-.264.704-.611 1.309v-1.309z" />
    </Box>
  );
};

export const TranslationFilled24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
