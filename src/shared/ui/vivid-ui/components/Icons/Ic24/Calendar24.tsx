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
      <path d="M17.25 12a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M12 17.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M13.25 12a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M8 17.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5" />
      <path
        clipRule="evenodd"
        d="M6 2h2v2.162A47 47 0 0 1 12 4c1.528 0 2.861.065 4 .162V2h2v2.385C20 4.667 21 5 21 5v15s-3 1-9 1-9-1-9-1V5s1-.333 3-.615zm-.421 16.527q-.315-.053-.579-.103V9h14v9.424q-.264.05-.579.103C17.028 18.76 14.888 19 12 19s-5.028-.24-6.421-.473"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Calendar24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
