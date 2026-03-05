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
        d="M12 2c-3.75 0-5 .625-5 .625v3.57C3.544 6.485 2 7 2 7v12.98s3 1 10 1 10-1 10-1V7s-1.544-.515-5-.805v-3.57S15.75 2 12 2m3 4.066v-1.88C14.335 4.086 13.36 4 12 4s-2.335.087-3 .185v1.881A66 66 0 0 1 12 6c1.097 0 2.096.025 3 .066m3 5.977-3.079 3.202a1.99 1.99 0 0 1-2.879-.01l-1.769-1.863-2.837 2.954L6 14.938l2.837-2.954a1.99 1.99 0 0 1 2.88.009l1.77 1.863 3.078-3.202z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Trading24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
