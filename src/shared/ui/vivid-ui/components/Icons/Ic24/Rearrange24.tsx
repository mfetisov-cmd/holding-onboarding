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
        d="M15 3c-4 0-6 .5-6 .5V9c-4 0-6 .5-6 .5v11s2 .5 6 .5 6-.5 6-.5V15c4 0 6-.5 6-.5v-11S19 3 15 3m-6 8c-1.75 0-3.082.1-4 .204v7.592C5.918 18.9 7.25 19 9 19s3.082-.1 4-.204v-3.84c-2.667-.123-4-.456-4-.456z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Rearrange24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
