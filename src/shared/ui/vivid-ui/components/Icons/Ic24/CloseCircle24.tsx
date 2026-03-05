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
      <g clipPath="url(#clip0_37_1158)">
        <path
          clipRule="evenodd"
          d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12M7.293 8.707 10.586 12l-3.293 3.293 1.414 1.414L12 13.414l3.293 3.293 1.414-1.414L13.414 12l3.293-3.293-1.414-1.414L12 10.586 8.707 7.293z"
          fillRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="clip0_37_1158">
          <path d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </Box>
  );
};

export const CloseCircle24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
