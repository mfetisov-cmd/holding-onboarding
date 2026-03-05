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
        d="M19.696 3H4.356C3.624 3 3 3.58 3 4.295v15.409C3 20.42 3.409 21 4.143 21h15.339c.735 0 1.518-.58 1.518-1.296V4.295A1.29 1.29 0 0 0 19.696 3M9.857 9.857h2.423v1.235h.027c.37-.666 1.46-1.342 2.81-1.342 2.589 0 3.312 1.375 3.312 3.921v4.758h-2.572V14.14c0-1.14-.455-2.14-1.52-2.14-1.292 0-1.908.875-1.908 2.312v4.117H9.857zM5.571 18.43h2.572V9.857H5.57zM8.464 6.857a1.607 1.607 0 1 1-3.213.001 1.607 1.607 0 0 1 3.213 0"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Linkedin24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
