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
        d="M22 6v11s-3 2-10 2q-.459 0-.895-.011l-6.367 3.45a.5.5 0 0 1-.738-.44v-4.12C2.634 17.424 2 17 2 17V6s3-2 10-2 10 2 10 2m-10.692 6.5h1.367l.063-.476c.175-1.299.262-1.95.262-4.115V7h-2v.91c0 2.252.085 2.895.254 4.182v.002zM12 16.254q-.522 0-.89-.37a1.2 1.2 0 0 1-.369-.884q0-.516.368-.876.37-.37.89-.37.507 0 .874.37.368.36.368.876t-.368.885q-.368.37-.873.37"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const ChatExclamationMark24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
