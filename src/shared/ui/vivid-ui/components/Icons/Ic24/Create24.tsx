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
        d="M3 4s3-1 9-1 9 1 9 1v16s-3 1-9 1-9-1-9-1zm8 13v-4H7v-2h4V7h2v4h4v2h-4v4z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Create24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
