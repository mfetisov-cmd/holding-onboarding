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
      <g clipPath="url(#flash_circle)">
        <path
          clipRule="evenodd"
          d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Zm.667-20v6.672c3.724.066 5.333.661 5.333.661L11.333 20v-6.006C7.61 13.93 6 13.334 6 13.334L12.667 4Z"
          fillRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="flash_circle">
          <path d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </Box>
  );
};

export const FlashCircle24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
