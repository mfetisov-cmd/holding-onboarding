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
        d="M3.011 9.524c.033-1.496.16-2.397.657-3.081a3.5 3.5 0 0 1 .775-.775C5.363 5 6.675 5 9.3 5h5.4c2.625 0 3.937 0 4.857.668a3.5 3.5 0 0 1 .775.775c.497.685.624 1.587.657 3.087a.5.5 0 0 1 .003.197c.008.466.008.987.008 1.573v1.4c0 2.625 0 3.937-.668 4.857a3.5 3.5 0 0 1-.775.775C18.637 19 17.325 19 14.7 19H9.3c-2.625 0-3.937 0-4.857-.668a3.5 3.5 0 0 1-.775-.775C3 16.637 3 15.325 3 12.7v-1.4c0-.589 0-1.112.008-1.579a.5.5 0 0 1 .003-.197m2.489 1.36v3.456c0 .9 0 1.35.23 1.665a1.2 1.2 0 0 0 .265.266c.315.229.765.229 1.665.229h8.68c.9 0 1.35 0 1.665-.23q.154-.11.266-.265c.229-.315.229-.765.229-1.665v-3.446l-5.48 1.934a3 3 0 0 1-1.995 0zm13-1.404-6.102 1.172a2 2 0 0 1-.752 0L5.5 9.478c.001-.78.016-1.19.23-1.483a1.2 1.2 0 0 1 .265-.266C6.31 7.5 6.76 7.5 7.66 7.5h8.68c.9 0 1.35 0 1.665.23a1.2 1.2 0 0 1 .266.265c.213.293.228.704.229 1.485"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const EmailOutlined24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
