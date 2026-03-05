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
        d="M12 3C6 3 3 4 3 4v16s3 1 9 1 9-1 9-1V4s-3-1-9-1M9.416 7.43q-1.011.847-1.012 2.194 0 1.17.67 1.914.67.746 1.976 1.025l1.627.363q.622.136.902.444.287.307.287.827 0 .637-.526 1.005-.526.37-1.422.37-.862 0-1.36-.37-.492-.369-.5-1.018H8.262q.027 1.374 1.018 2.187.999.814 2.639.814 1.695 0 2.714-.855 1.025-.854 1.025-2.283 0-1.142-.642-1.832-.644-.69-1.962-.97l-1.614-.35q-.642-.15-.943-.464-.3-.322-.3-.862 0-.642.492-1.011.492-.376 1.326-.376.759 0 1.203.376.45.37.478 1.025h1.791q-.04-1.388-.97-2.194-.923-.807-2.475-.807-1.612 0-2.625.848"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const MilesCarS24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
