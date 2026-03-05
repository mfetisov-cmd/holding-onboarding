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
      <path d="M4.07 6.524q-.873.137-1.457.262l1.147-4.28s3.157-.19 9.918 1.622c3.722.997 6.195 1.973 7.666 2.65-.383-.08-.853-.168-1.416-.254C18.196 6.257 15.594 6 12 6s-6.197.257-7.929.524" />
      <path
        clipRule="evenodd"
        d="M22 9v10s-3 1-10 1-10-1-10-1V9s3-1 10-1 10 1 10 1m-7 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Cash24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
