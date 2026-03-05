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
        d="M12 .44 9.58 6.06a3.01 3.01 0 0 1-2.487 1.806L1 8.431l4.597 4.039a3.01 3.01 0 0 1 .95 2.923l-1.345 5.97 5.261-3.125a3.01 3.01 0 0 1 3.074 0l5.261 3.124-1.345-5.97a3.01 3.01 0 0 1 .95-2.922L23 8.43l-6.093-.565A3.01 3.01 0 0 1 14.42 6.06zm0 5.072-.578 1.341a5.02 5.02 0 0 1-4.143 3.01L5.824 10l1.098.963a5.02 5.02 0 0 1 1.582 4.872l-.32 1.425 1.255-.746a5.02 5.02 0 0 1 5.122 0l1.256.745-.321-1.424a5.02 5.02 0 0 1 1.582-4.871l1.098-.964-1.455-.135a5.02 5.02 0 0 1-4.143-3.01z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const StarStroke24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
