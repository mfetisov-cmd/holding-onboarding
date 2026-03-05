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
      <path d="M21 4.5V7H3V4.5s2.7-.862 9-.862 9 .862 9 .862M3 17V9h18v3.255a7 7 0 0 0-10.998 5.576C5.125 17.678 3 17 3 17M18.849 16.347c-.463.366-1.085.906-1.849 1.675l-1.17-1.179c.934-.94 1.686-1.575 2.228-1.986.569-.433 1.331-.323 1.835.184l1.24 1.248c.504.507.613 1.274.183 1.847-.409.545-1.039 1.302-1.974 2.243l-1.17-1.179c.763-.768 1.3-1.395 1.663-1.86z" />
      <path d="M14.165 18.704c.364-.466.9-1.092 1.664-1.86l-1.171-1.179c-.935.94-1.565 1.698-1.974 2.243-.43.572-.321 1.34.183 1.847l1.24 1.248c.504.507 1.266.617 1.835.184.542-.411 1.294-1.046 2.23-1.987L17 18.022a21 21 0 0 1-1.849 1.675z" />
    </Box>
  );
};

export const PaymentLinks24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
