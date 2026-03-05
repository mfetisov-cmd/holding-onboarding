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
        d="M18.81 9.438c-.152-1.496-1.124-2.611-2.435-3.125a28 28 0 0 0-.127-2.615c-.133-1.33-1.283-2.198-2.62-2.198h-3.255c-1.337 0-2.487.868-2.62 2.198-.07.693-.122 1.56-.127 2.615-1.311.514-2.284 1.63-2.436 3.125a40.3 40.3 0 0 0 0 8.124c.062.608.26 1.154.56 1.621V21c0 1.612 2.5 1.612 2.5 0v-.12c.343.079.703.12 1.07.12h5.36q.554 0 1.07-.12V21c0 1.612 2.5 1.612 2.5 0v-1.817c.301-.467.499-1.013.56-1.621a40.3 40.3 0 0 0 0-8.124m-4.552-5.541c.055.558.1 1.255.114 2.103H9.628c.013-.848.058-1.545.114-2.103.03-.298.375-.397.63-.397h3.255c.254 0 .6.1.63.397M15 13a1 1 0 1 0 0-2H9c-1.29 0-1.29 2 0 2z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Travel24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
