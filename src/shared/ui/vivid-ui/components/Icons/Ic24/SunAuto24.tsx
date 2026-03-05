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
      <path d="M13 1h-2v3h2zM11 20v3h2v-3zM19.07 3.515l1.415 1.414-2.122 2.121-1.414-1.414zM4.93 20.486 3.516 19.07l2.12-2.121 1.415 1.414zM3.516 4.929 4.93 3.514 7.05 5.637 5.637 7.05zM4 13v-2H1v2zM18 12.1V12a6 6 0 1 0-3.959 5.644A5.002 5.002 0 0 1 18 12.1" />
      <path
        clipRule="evenodd"
        d="M15.915 20h1.525l.475-1.402h2.153L20.534 20h1.547l-2.365-6.662h-1.424zm2.421-2.628.48-1.424q.144-.444.18-.646.021.15.18.646l.474 1.424z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const SunAuto24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
