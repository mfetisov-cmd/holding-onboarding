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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m-1.282-6.603v.457h1.564v-.457c0-.422.179-.792.437-1.108q.387-.474 1.213-1.063.404-.29.641-.484.246-.193.598-.545.351-.36.545-.685.193-.334.334-.818.15-.492.15-1.037 0-1.74-1.126-2.821-1.116-1.08-3.014-1.081-1.82 0-3.041 1.195-1.222 1.186-1.222 2.98h1.74q0-1.108.712-1.846.712-.747 1.775-.747 1.09 0 1.74.677.651.668.651 1.731 0 .343-.097.66a2.4 2.4 0 0 1-.237.544 2.6 2.6 0 0 1-.387.492q-.255.264-.448.431a34 34 0 0 1-.519.413q-.456.352-.738.607-.271.255-.597.65-.317.387-.475.853c-.1.304-.2.638-.2 1.002M12.75 18a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Question24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
