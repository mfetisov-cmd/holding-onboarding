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
        d="M15.993 6.173a.572.572 0 0 1 .797.004l4.003 4.861a.692.692 0 0 1-.006.994l-3.927 4.9a.52.52 0 0 1-.36.145h-3.297a.52.52 0 0 1-.365-.889l4.024-4.65-3.659-4.5h-1.467l3.499 4a.692.692 0 0 1 0 1.001l-4.597 4.894a.52.52 0 0 1-.36.144H5.077A2.077 2.077 0 0 1 3 15V8.077C3 6.93 3.93 6 5.077 6h2.066a.52.52 0 1 1 0 1.038H5.425c-.765 0-1.385.62-1.385 1.385v6.23c0 .765.62 1.385 1.385 1.385h4.469l4.195-4.5-4.023-4.65A.52.52 0 0 1 10.431 6h3.214a.52.52 0 0 1 .36.144l4.002 4.894a.692.692 0 0 1 0 1l-3.499 4h1.56l3.566-4.5-3.641-4.5c-.228-.225-.231-.642 0-.865Z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const ClickToPay24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
