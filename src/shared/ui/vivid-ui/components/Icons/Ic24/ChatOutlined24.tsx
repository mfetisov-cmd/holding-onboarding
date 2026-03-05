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
      <path d="M17 9v2H7V9zM13 12.5H7v2h6z" />
      <path
        clipRule="evenodd"
        d="M2 17V6s3-2 10-2 10 2 10 2v11s-3 2-10 2q-.459 0-.895-.011l-6.367 3.45a.5.5 0 0 1-.738-.44v-4.12C2.634 17.424 2 17 2 17m2.634-1.017L6 16.44v3.04l4.622-2.504.533.014q.411.01.845.01c3.307 0 5.608-.472 7.037-.912.38-.117.701-.232.963-.336V7.248c-.262-.104-.582-.22-.963-.336C17.607 6.472 15.307 6 12 6s-5.608.472-7.037.912c-.38.117-.701.232-.963.336v8.504q.274.109.634.231"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const ChatOutlined24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
