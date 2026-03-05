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
        d="M3 3.444S4.333 3 7 3s4 .444 4 .444v7.112S9.667 11 7 11s-4-.444-4-.444zm2 5.453C5.52 8.955 6.186 9 7 9s1.48-.045 2-.103V5.103A18 18 0 0 0 7 5c-.814 0-1.48.045-2 .103zM3 13.444S4.333 13 7 13s4 .444 4 .444v7.112S9.667 21 7 21s-4-.444-4-.444zm2 5.453c.52.058 1.186.103 2 .103s1.48-.045 2-.103v-3.794A18 18 0 0 0 7 15c-.814 0-1.48.045-2 .103zM17 3c-2.667 0-4 .444-4 .444v7.112S14.333 11 17 11s4-.444 4-.444V3.444S19.667 3 17 3m0 6c-.814 0-1.48-.045-2-.103V5.103A18 18 0 0 1 17 5c.814 0 1.48.045 2 .103v3.794A18 18 0 0 1 17 9"
        fillRule="evenodd"
      />
      <path d="M13 18v-2h3v-3h2v3h3v2h-3v3h-2v-3z" />
    </Box>
  );
};

export const Products24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
