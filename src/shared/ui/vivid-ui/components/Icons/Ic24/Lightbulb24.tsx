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
        d="M12 18c3.75 0 5-.5 5-.5v-2.255a8 8 0 1 0-10 0V17.5s1.25.5 5 .5m3.75-4.315-.75.6v1.57c-.683.078-1.66.145-3 .145s-2.317-.067-3-.145v-1.57l-.75-.6a6 6 0 1 1 7.498 0"
        fillRule="evenodd"
      />
      <path d="M8 19.57v2.056c.962.209 2.25.37 3.935.374h.13c1.686-.004 2.973-.165 3.935-.374V19.57c-.824.218-2.111.43-4 .43s-3.176-.212-4-.43" />
    </Box>
  );
};

export const Lightbulb24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
