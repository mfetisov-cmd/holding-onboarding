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
      <path d="m10.19 13.076 1.512-4.203q.187-.548.285-.99.027.2.275.99l1.53 4.203z" />
      <path
        clipRule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m-6-4h2.42l1.076-3.005h4.973L15.545 18H18L13.188 5h-2.384z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Auto24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
