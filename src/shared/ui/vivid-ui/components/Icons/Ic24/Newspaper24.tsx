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
        d="M6 4.001s1.5-1 7.5-1 7.5 1 7.5 1v13.86c0 1.337-.726 2.51-2.041 2.749-1.155.209-2.897.391-5.459.391-6 0-11.5-1-11.5-1a3.56 3.56 0 0 0 4-3.532zM10 7v2h7V7zm0 6v-2h7v2zm0 4h3v-2h-3z"
        fillRule="evenodd"
      />
      <path d="M2 10h2v6a2 2 0 0 1-2 2z" />
    </Box>
  );
};

export const Newspaper24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
