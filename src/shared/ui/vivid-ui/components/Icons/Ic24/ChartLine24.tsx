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
        d="m15.145 3.5 1.066 1.659a34 34 0 0 1 1.946 3.424c.568-1.154 1.127-2.128 2.007-3.44l1.661 1.112c-1.23 1.833-1.776 2.93-2.73 5.05l-.872 1.934-.938-1.902-.343-.699c-.519-1.056-.909-1.85-1.385-2.7-1.672 4.075-3.219 6.849-6.098 11.295L8.64 20.5l-.847-1.25c-.818-1.206-1.44-2.138-1.996-3.24C5.278 17.06 4.7 18 3.814 19.263l-1.638-1.146c1.336-1.906 1.895-2.97 2.702-4.994l.973-2.436.896 2.466c.56 1.542 1.088 2.522 1.856 3.71 2.684-4.232 4.07-6.944 5.833-11.523z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const ChartLine24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
