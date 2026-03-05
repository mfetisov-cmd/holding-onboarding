import { Box } from '@/shared/ui/vivid-ui/components/Box';
import {
  PolymorphicSquareIconProps,
  SquareIconProps,
} from '@/shared/ui/vivid-ui/components/Icons/types';
import { createPolymorphicComponent } from '@/shared/ui/vivid-ui/shared';

const Icon = ({
  component = 'svg',
  size = 24,
  ...rest
}: Omit<PolymorphicSquareIconProps, 'color'>) => {
  return (
    <Box
      component={component}
      height={`${size}rem`}
      viewBox="0 0 24 24"
      width={`${size}rem`}
      {...rest}
    >
      <path d="M14.978 6.656H9.03v10.685h5.947V6.656Z" fill="#FF5F00" />
      <path
        d="M9.41 11.998c0-2.076.962-4.058 2.586-5.342-2.945-2.322-7.23-1.812-9.552 1.152a6.792 6.792 0 0 0 1.17 9.533 6.778 6.778 0 0 0 8.4 0 6.8 6.8 0 0 1-2.605-5.343Z"
        fill="#EB001B"
      />
      <path
        d="M23.002 11.998a6.791 6.791 0 0 1-6.796 6.796 6.726 6.726 0 0 1-4.19-1.453c2.944-2.322 3.454-6.589 1.132-9.552a7.141 7.141 0 0 0-1.133-1.133c2.945-2.322 7.23-1.812 9.533 1.152a6.726 6.726 0 0 1 1.454 4.19Z"
        fill="#F79E1B"
      />
    </Box>
  );
};

export const Mastercard24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
