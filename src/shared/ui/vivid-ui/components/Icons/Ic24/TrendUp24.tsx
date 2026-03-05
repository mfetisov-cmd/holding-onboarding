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
      <path d="M22 7a3 3 0 1 0-4.757 2.432c-.635 1.908-1.355 3.4-2.612 5.32-2.525-1.112-4.342-2.18-6.97-4.502l-1.126-.994-.483 1.422c-.88 2.593-1.796 4.052-3.845 6.712l1.585 1.22c1.759-2.284 2.787-3.814 3.646-5.92 2.509 2.06 4.458 3.083 7.172 4.231l.753.319.462-.676C17.51 14.1 18.4 12.31 19.163 9.996A3 3 0 0 0 22 7" />
      <path d="M14 6H3v2h11z" />
    </Box>
  );
};

export const TrendUp24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
