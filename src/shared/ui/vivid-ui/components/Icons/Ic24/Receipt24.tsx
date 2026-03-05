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
      <path d="M15 10H9V8h6zM9 14h6v-2H9z" />
      <path
        clipRule="evenodd"
        d="m8.5 20 3.5 2 3.5-2 4.5 2V3s-3-1-8-1-8 1-8 1v19zM6 18.922l2.613-1.16L12 19.696l3.387-1.936L18 18.923V4.56q-.224-.046-.483-.093C16.247 4.237 14.367 4 12 4s-4.247.237-5.517.468q-.26.046-.483.093z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Receipt24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
