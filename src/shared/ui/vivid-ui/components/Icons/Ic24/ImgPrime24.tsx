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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m1.234-14.007c-.333-.96-.697-1.837-1.232-2.993-.535 1.156-.9 2.034-1.232 2.993a4.49 4.49 0 0 1-2.776 2.776C7.034 11.1 6.156 11.466 5 12c1.156.535 2.033.899 2.993 1.232a4.5 4.5 0 0 1 2.776 2.775c.333.96.698 1.836 1.233 2.992.535-1.156.899-2.033 1.232-2.992a4.5 4.5 0 0 1 2.775-2.776c.959-.333 1.836-.697 2.991-1.231-1.155-.535-2.032-.9-2.99-1.232a4.5 4.5 0 0 1-2.776-2.776"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const ImgPrime24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
