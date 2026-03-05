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
        d="M4.598 11.5H5.97l.61-1.733H9.4l.61 1.733h1.392L8.673 4H7.321zm2.375-2.84.858-2.426q.105-.315.161-.57.015.115.157.57l.867 2.425z"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M8 1c-4.667 0-7 .778-7 .778v12.444S3.333 15 8 15s7-.778 7-.778V1.778S12.667 1 8 1M3.079 12.638 3 12.625v-9.25l.079-.013C4.139 3.185 5.779 3 8 3s3.862.185 4.921.362l.079.013v9.25l-.079.013c-1.06.177-2.7.362-4.921.362s-3.862-.185-4.921-.362"
        fillRule="evenodd"
      />
      <path d="M9 16.988v5.234S11.333 23 16 23s7-.778 7-.778V9.778s-2-.667-6-.766v2c1.72.046 3.028.2 3.921.35l.079.013v9.25l-.079.013c-1.06.177-2.7.362-4.921.362s-3.862-.185-4.921-.362L11 20.625V16.89q-.91.07-2 .098" />
      <path d="M14.495 16.411q.276.39.586.745c-.952.726-2.116 1.254-3.507 1.62.224.27.579.812.71 1.092 1.424-.445 2.637-1.057 3.65-1.873.989.838 2.204 1.46 3.714 1.854.177-.326.54-.858.812-1.12-1.43-.32-2.618-.872-3.582-1.616.864-.934 1.541-2.076 2.044-3.46h1.37V12.55h-3.294v1.101h.612q-.264.704-.612 1.31v.702l-.609.203q-.185.236-.388.455a8 8 0 0 1-.226-.25l-.326.104q-.147.043-.403.108-.231.059-.551.127" />
    </Box>
  );
};

export const TranslationStroked24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
