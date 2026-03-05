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
        d="M22 5v14s-3 1-10 1-10-1-10-1v-5a2 2 0 1 0 0-4V5s3-1 10-1 10 1 10 1M10.96 9.418 12.001 7l1.041 2.418c.188.435.598.733 1.07.777l2.62.243-1.977 1.737a1.3 1.3 0 0 0-.408 1.257L14.925 16l-2.263-1.344a1.3 1.3 0 0 0-1.322 0L9.077 16l.579-2.568a1.3 1.3 0 0 0-.409-1.257L7.27 10.438l2.62-.243a1.3 1.3 0 0 0 1.07-.777"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Invite24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
