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
      <g clipPath="url(#clip0_37_1195)">
        <path
          clipRule="evenodd"
          d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12m-6.05-2.522-.746.665c-2.302 2.048-3.687 3.47-5.904 5.99l-.745.846-.752-.841a39 39 0 0 0-2.729-2.756q-.115-.105-.175-.157l-.813-.704 1.307-1.513.83.718.193.173a40.886 40.886 0 0 1 2.12 2.08c1.86-2.08 3.234-3.457 5.338-5.33l.747-.665z"
          fillRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="clip0_37_1195">
          <path d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </Box>
  );
};

export const Checkbox24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
