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
        d="M6.927 21.398a3 3 0 0 1-1.123-.549A9.98 9.98 0 0 1 2 13C2 7.477 6.477 3 12 3s10 4.477 10 10a9.98 9.98 0 0 1-3.804 7.85 3 3 0 0 1-1.123.548C15.697 21.752 14.014 22 12 22s-3.697-.248-5.073-.602m7.005-8.916 3.275-3.275-1.414-1.414-3.275 3.275a2 2 0 1 0 1.414 1.414"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const LimitsFilled24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
