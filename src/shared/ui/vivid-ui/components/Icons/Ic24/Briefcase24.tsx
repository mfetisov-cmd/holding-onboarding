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
        d="M7 2.625S8.25 2 12 2s5 .625 5 .625v3.59c3.456.29 5 .805 5 .805V20s-3 1-10 1-10-1-10-1V7.02s1.544-.515 5-.805zm8 1.56v1.901a66 66 0 0 0-3-.066 66 66 0 0 0-3 .066v-1.9C9.665 4.086 10.64 4 12 4s2.335.087 3 .185M14 12h-4v2.729s.797.271 2 .271c1.204 0 2-.271 2-.271z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Briefcase24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
