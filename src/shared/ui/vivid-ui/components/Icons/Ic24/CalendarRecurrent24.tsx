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
      <path d="M8 2H6v2.385C4 4.667 3 5 3 5v15s3 1 9 1q.409 0 .8-.006A6 6 0 0 1 12.082 19H12c-2.888 0-5.028-.24-6.421-.473q-.315-.053-.579-.103V9h14v1.25l2 1.51V5s-1-.333-3-.615V2h-2v2.162A47 47 0 0 0 12 4c-1.528 0-2.861.065-4 .162z" />
      <path d="M9.25 12a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M18 12l4 3-4 3v-2a2 2 0 1 0 1.778 2.917l2.16-1.62Q22 17.64 22 18a4 4 0 1 1-4-4z" />
    </Box>
  );
};

export const CalendarRecurrent24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
