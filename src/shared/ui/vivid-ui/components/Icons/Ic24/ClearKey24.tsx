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
        d="M14.5 20c3.5 0 7.5-.47 7.5-.47V4.47S18 4 14.5 4 7 4.47 7 4.47L1 12l6 7.53s4 .47 7.5.47m2.293-3.793L14 13.414l-2.793 2.793-1.414-1.414L12.586 12 9.793 9.207l1.414-1.414L14 10.586l2.793-2.793 1.414 1.414L15.414 12l2.793 2.793z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const ClearKey24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
