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
        d="M22 12c0-5.333-.889-8-.889-8H6.89S6 6.667 6 12s.889 8 .889 8H21.11S22 17.333 22 12m-9-4v3h-3v2h3v3h2v-3h3v-2h-3V8z"
        fillRule="evenodd"
      />
      <path d="M2.634 5h2C4.371 6.219 4 8.552 4 12s.371 5.781.634 7h-2C2.371 17.781 2 15.448 2 12s.371-5.781.634-7" />
    </Box>
  );
};

export const Cashback24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
