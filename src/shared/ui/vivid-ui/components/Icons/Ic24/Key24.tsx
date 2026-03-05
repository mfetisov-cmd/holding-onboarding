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
      <g id="Icon">
        <path
          id="Vector"
          d="M14.215 6.5 3.49 17.22a.5.5 0 0 0-.146.34l-.08 2.91a.5.5 0 0 0 .513.514l2.9-.074a.5.5 0 0 0 .34-.146l1.182-1.18.355-1.767 1.768-.353.353-1.768 1.768-.353 5.305-5.306z"
        />
        <path
          id="Vector_2"
          clipRule="evenodd"
          d="M16 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12m1.25-5.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5"
          fillRule="evenodd"
        />
      </g>
    </Box>
  );
};

export const Key24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
