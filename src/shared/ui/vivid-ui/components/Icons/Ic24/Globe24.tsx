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
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m-1 2.062a8 8 0 0 0-5.892 3.874q.637-.2 1.333-.357C7.8 7.271 9.349 7.074 11 7.017zm0 4.956c-1.51.057-2.91.238-4.117.512-1.131.256-2.055.585-2.737.943a8 8 0 0 0 0 3.054c.682.358 1.606.687 2.737.943 1.207.274 2.606.455 4.117.511zm2 5.964V9.018c1.51.057 2.91.238 4.117.512 1.131.256 2.055.585 2.738.943a8 8 0 0 1 0 3.054c-.683.358-1.607.687-2.738.943-1.207.274-2.606.455-4.117.511m-2 2c-1.651-.056-3.2-.253-4.56-.561a17 17 0 0 1-1.332-.357A8 8 0 0 0 11 19.938zm2 2.956v-2.955c1.651-.057 3.2-.254 4.56-.562q.695-.158 1.332-.357A8 8 0 0 1 13 19.938m0-12.92V4.061a8 8 0 0 1 5.892 3.874q-.637-.2-1.333-.357C16.2 7.271 14.651 7.074 13 7.017"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Globe24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
