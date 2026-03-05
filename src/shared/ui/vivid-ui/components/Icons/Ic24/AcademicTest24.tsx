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
        d="M12 3c-5 0-9 .9-9 .9v16.2s4 .9 9 .9 9-.9 9-.9V3.9S17 3 12 3m7 6.5L12 6 5 9.5l7 3.5 5.167-2.583L18 15h1zM8 16v-3l4 2 4-2v3c0 1.105-1.79 2-4 2s-4-.895-4-2"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const AcademicTest24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
