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
      <g clipPath="url(#clip0_37_1176)">
        <path
          clipRule="evenodd"
          d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12M8.25 12a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M12 13.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M18.25 12a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
          fillRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="clip0_37_1176">
          <path d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </Box>
  );
};

export const ActionsCircle24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
