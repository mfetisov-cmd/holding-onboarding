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
      <path d="M7 6h4v2H7zM12 9H7v2h5zM10.842 15.498v.9h.911c.392 1.59 1.6 2.32 3.114 2.32.54 0 1.09-.085 1.61-.223l-.096-1.27a5.4 5.4 0 0 1-1.26.158c-.816 0-1.387-.275-1.652-.985h2.203v-.9h-2.383c0-.402 0-.508.01-.614h2.373v-.9H13.49c.275-.678.858-.943 1.684-.943.36 0 .773.043 1.186.127l.096-1.27a6.5 6.5 0 0 0-1.504-.191c-1.494 0-2.754.71-3.178 2.277h-.932v.9h.795c-.011.106-.011.222-.011.614z" />
      <path
        clipRule="evenodd"
        d="m20 6.5-5-4.46S12.724 2 12 2C6 2 4 3 4 3v17.77S6 22 12 22s8-1.23 8-1.23zm-7-2.495V9h5v10.385c-1.029.276-2.92.615-6 .615s-4.971-.34-6-.615V4.49C7.078 4.263 8.98 4 12 4c.252 0 .613.002 1 .005"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Invoices24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
