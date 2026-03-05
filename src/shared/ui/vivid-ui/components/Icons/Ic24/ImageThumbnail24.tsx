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
      <path d="M15.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
      <path
        clipRule="evenodd"
        d="M3 4s3-1 9-1 9 1 9 1v16s-3 1-9 1-9-1-9-1zm2 14.424q.264.05.579.103C6.972 18.76 9.112 19 12 19c2.19 0 3.95-.138 5.28-.306l-6.573-6.573a1 1 0 0 0-1.414 0L5 16.414zm7.121-7.717L19 17.586V5.576a24 24 0 0 0-.579-.103C17.028 5.24 14.888 5 12 5s-5.028.24-6.421.473q-.315.053-.579.103v8.01l2.879-2.879a3 3 0 0 1 4.242 0"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const ImageThumbnail24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
