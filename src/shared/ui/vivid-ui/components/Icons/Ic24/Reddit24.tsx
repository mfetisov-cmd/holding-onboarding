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
      <path d="M14.543 4.814a2.083 2.083 0 0 0 4.108-.48 2.082 2.082 0 0 0-4.121-.42 3.363 3.363 0 0 0-2.998 3.338v.011C9.7 7.34 8.028 7.862 6.7 8.684a2.917 2.917 0 1 0-3.021 4.95c.096 3.388 3.787 6.112 8.327 6.112s8.235-2.727 8.327-6.117a2.918 2.918 0 1 0-3.028-4.949c-1.34-.828-3.03-1.35-4.88-1.419v-.008c0-1.24.922-2.268 2.117-2.437zm-7.96 8.03c.05-1.058.752-1.87 1.57-1.87.816 0 1.44.858 1.392 1.916s-.659 1.443-1.477 1.443-1.533-.43-1.484-1.489m9.28-1.87c.817 0 1.52.812 1.568 1.87s-.668 1.489-1.485 1.489-1.428-.384-1.476-1.443c-.05-1.058.574-1.916 1.392-1.916m-.973 4.319c.153.015.251.174.191.317a3.332 3.332 0 0 1-6.149 0 .23.23 0 0 1 .191-.317c.899-.091 1.87-.141 2.884-.141s1.984.05 2.883.14" />
    </Box>
  );
};

export const Reddit24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
