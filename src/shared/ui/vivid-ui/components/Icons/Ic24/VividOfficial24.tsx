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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M7.094 8l3.447 9h2.68l3.688-9h-2.826l-1.181 3.146q-.784 2.084-.94 2.866-.095-.562-.861-2.866L10.024 8z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const VividOfficial24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
