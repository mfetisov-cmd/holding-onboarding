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
      <path d="M7.879 6.464 4.414 3 3 4.414l3.464 3.465-2.12 2.12H10V4.344zM19.657 14l-2.122 2.121L21 19.585 19.585 21l-3.464-3.465L14 19.657V14zM19.586 3 16.12 6.465 14 4.343V10h5.657l-2.122-2.121L21 4.414zM7.88 17.535 4.413 21 3 19.586l3.465-3.465-2.122-2.122H10v5.657z" />
    </Box>
  );
};

export const Crowdfunding24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
