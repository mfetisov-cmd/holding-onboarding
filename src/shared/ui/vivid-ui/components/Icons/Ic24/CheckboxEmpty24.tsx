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
      <g clipPath="url(#clip0_5760_2094)">
        <circle cx="12" cy="12" r="12" />
      </g>
      <defs>
        <clipPath id="clip0_5760_2094">
          <path d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </Box>
  );
};

export const CheckboxEmpty24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
