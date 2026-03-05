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
      <path d="M8 14.586v2.828l2-2 2 2 4-4v-2.828l-4 4-2-2z" />
      <path
        clipRule="evenodd"
        d="M12 22c6 0 8-1 8-1V6h-2V2.452C16.74 2.219 14.807 2 12 2c-2.535 0-4.356.179-5.614.385C5.05 2.604 4 3.694 4 5v13.528c0 1.515.891 2.842 2.386 3.087C7.644 21.822 9.465 22 12 22m4-17.813V6H7c-.483 0-1-.3-1-.798 0-.448.32-.78.71-.844C7.846 4.172 9.558 4 12 4c1.652 0 2.969.079 4 .187M6 7.83v10.699c0 .373.11.655.238.828a.7.7 0 0 0 .472.286C7.846 19.828 9.558 20 12 20c2.89 0 4.757-.241 5.858-.461l.142-.03V8H7c-.35 0-.687-.06-1-.17"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Textbook24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
