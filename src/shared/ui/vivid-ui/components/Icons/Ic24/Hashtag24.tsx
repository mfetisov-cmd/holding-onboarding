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
        d="M9.59 2h2.038l-1.165 6h4.63l1.165-6h2.037L17.13 8h3.059l-.388 2h-3.06l-.776 4h3.059l-.389 2h-3.058l-1.165 6h-2.038l1.165-6H8.91l-1.165 6H5.707l1.165-6H3.777l.389-2H7.26l.777-4H4.942l.389-2h3.094zm.485 8-.777 4h4.63l.776-4z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Hashtag24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
