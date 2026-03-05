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
      <path d="M8 2H6v2.385C4 4.667 3 5 3 5v15s2.75.917 8.251.995a7 7 0 0 1-.97-2.024c-2.034-.072-3.602-.26-4.702-.444q-.315-.053-.579-.103V9h14v1.29a7 7 0 0 1 2 .965V5s-1-.333-3-.615V2h-2v2.162A47 47 0 0 0 12 4c-1.528 0-2.861.065-4 .162z" />
      <path d="M8 13.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5" />
      <path
        clipRule="evenodd"
        d="M22 17a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-4-.414V14h-2v3.414l2.293 2.293 1.414-1.414z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const CalendarScheduled24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
