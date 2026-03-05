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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-4.796-1.857.747-.665-1.33-1.494-.747.665c-2.104 1.873-3.477 3.25-5.338 5.33a41 41 0 0 0-2.12-2.08l-.193-.173-.83-.718-1.307 1.513.813.704q.06.052.176.157a38.482 38.482 0 0 1 2.729 2.756l.75.841.746-.847c2.217-2.519 3.602-3.941 5.904-5.989"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Correct24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
