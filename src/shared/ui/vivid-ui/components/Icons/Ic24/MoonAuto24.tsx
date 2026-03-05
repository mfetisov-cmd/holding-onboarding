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
      <path d="M4 17c5.522 0 10-4.477 10-10a9.95 9.95 0 0 0-1.326-4.977C17.883 2.37 22 6.705 22 12q0 .488-.046.964a5 5 0 1 0-5.81 8.139A10 10 0 0 1 12 22a10 10 0 0 1-8.675-5.022Q3.66 17 4 17" />
      <path
        clipRule="evenodd"
        d="M15.914 20h1.525l.475-1.402h2.153L20.533 20h1.547l-2.365-6.662h-1.424zm2.421-2.628.48-1.424q.144-.444.18-.646.021.15.18.646l.474 1.424z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const MoonAuto24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
