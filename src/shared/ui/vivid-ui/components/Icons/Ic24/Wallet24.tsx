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
        d="M2 5s3-1 10-1 10 1 10 1v14s-3 1-10 1-10-1-10-1zm17.32 1.477q.375.058.68.114v4.969a40 40 0 0 0-4.055-.443c-.349-.022-.71.002-1.007.188a2 2 0 0 0-.538.495l-.8 1.066a2 2 0 0 1-3.2 0L9.6 11.8a2 2 0 0 0-.538-.495c-.297-.186-.658-.21-1.007-.188-1.744.11-3.084.28-4.055.443V6.59q.305-.054.68-.113C6.196 6.244 8.594 6 12 6s5.803.244 7.32.477"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Wallet24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
