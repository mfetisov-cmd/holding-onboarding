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
        d="M12 2c-4.5 0-6 .75-6 .75v7.702C4.566 10.717 4 11 4 11v10s2 1 8 1 8-1 8-1V11s-.566-.283-2-.548V2.75S16.5 2 12 2m4 8.177V4.282C15.182 4.14 13.894 4 12 4s-3.183.14-4 .28v5.896A41 41 0 0 1 12 10c1.608 0 2.928.072 4 .177m-3 5.941a1.5 1.5 0 1 0-2 0V18h2z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Lock24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
