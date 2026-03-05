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
        d="M12 3c4.05 1.318 6.314 2.414 9.225 4.307.561.366 1.147.76 1.775 1.193V17h-2V9.88a32 32 0 0 1-2.368 1.425c.2 1.55.368 3.168.368 4.195V18s0 3-7 3c-3.529 0-5.279-.762-6.146-1.518C5 18.738 5 18 5 18l.001-2.5c0-1.094.191-2.857.406-4.495A69 69 0 0 1 2.95 9.651C2.333 9.297 1.689 8.916 1 8.5c.69-.424 1.327-.814 1.93-1.176C6.087 5.43 8.303 4.299 12 3M4.92 8.47c2.411-1.408 4.314-2.34 7.105-3.355 3.139 1.054 5.098 1.976 7.39 3.41-2.179 1.383-4.135 2.284-7.337 3.346-2.781-1.146-4.8-2.09-7.157-3.402m2.383 3.483C7.13 13.345 7 14.678 7 15.5v2.292l.007.01c.026.038.076.1.169.18C7.542 18.295 8.739 19 12 19c3.26 0 4.458-.705 4.823-1.018a1 1 0 0 0 .17-.18l.007-.01V15.5c0-.765-.113-1.974-.267-3.26-1.338.598-2.84 1.151-4.733 1.76-1.794-.73-3.28-1.37-4.697-2.047"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const AcademicCapOutlined24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
