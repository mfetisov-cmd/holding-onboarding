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
        d="M13 0h-2v2.04q-2.516.251-4.043 1.714-1.57 1.505-1.57 3.796 0 4.162 4.803 5.248l.81.178v6.69q-1.428-.179-2.276-.938-.89-.812-.929-2.094h-2.67q.118 2.342 1.728 3.782Q8.43 21.804 11 21.99V24h2v-2.053q2.573-.274 4.101-1.74 1.584-1.519 1.584-3.9 0-4.02-4.777-5.092L13 11.01V4.351q1.21.205 1.929.96.759.786.837 2.069h2.592q-.131-2.33-1.597-3.744Q15.351 2.263 13 2.014zm0 19.611v-6.143l.371.076q2.736.642 2.736 2.985 0 1.256-.864 2.08-.825.787-2.243 1.002m-2-15.26v6.186l-.273-.068q-2.762-.68-2.762-2.998 0-1.282.838-2.107Q9.612 4.567 11 4.35"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Dollar24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
