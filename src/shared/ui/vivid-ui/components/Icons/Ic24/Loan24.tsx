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
        d="m7 3 2.867 3.266C6.702 7.124 6 9.765 6 9.765L3 21.059S6 22 12 22s9-.941 9-.941L18 9.765s-.725-2.73-4.029-3.541L17 3s-2-1-5-1-5 1-5 1m3.232 15.379q.956.768 2.391.767.62 0 1.483-.158l.292-1.822a5 5 0 0 1-1.394.217q-.809 0-1.324-.258-.51-.264-.727-.85h2.567l.205-1.306h-2.942q.018-.375.088-.721h2.97l.206-1.318h-2.66q.832-1.213 2.683-1.213.504 0 1.05.152l.275-1.764a4.2 4.2 0 0 0-1.155-.152q-1.658 0-2.947.803a4.8 4.8 0 0 0-1.898 2.174h-.768l-.205 1.318h.574q-.07.458-.07.72h-.627l-.205 1.307h.914q.27 1.33 1.224 2.104"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Loan24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
