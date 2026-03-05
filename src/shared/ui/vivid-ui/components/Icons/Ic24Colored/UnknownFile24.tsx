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
      <path
        d="M4 4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4Z"
        fill="#CFCFCF"
      />
      <path d="m15 2 5 5h-4a1 1 0 0 1-1-1V2Z" fill="#E6E6E6" />
      <path
        d="M7 11.75a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75ZM7 15.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z"
        fill="#fff"
      />
    </Box>
  );
};

export const UnknownFile24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
