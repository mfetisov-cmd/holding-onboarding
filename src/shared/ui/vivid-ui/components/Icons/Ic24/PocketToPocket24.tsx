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
      <path d="M14.5 11h-2.828l3.5 3.5-3.5 3.5h2.829l3.5-3.5z" />
      <path
        clipRule="evenodd"
        d="M9.5 2c5 0 7.5.625 7.5.625v4.43c3.333.153 5 .57 5 .57v13.75S19.5 22 14.5 22 7 21.375 7 21.375v-4.43c-3.333-.153-5-.57-5-.57V2.625S4.5 2 9.5 2M15 4.313v2.69L14.5 7c-5 0-7.5.625-7.5.625v7.317a38 38 0 0 1-2.877-.24L4 14.688V4.313l.123-.016C5.291 4.151 7.083 4 9.5 4s4.209.151 5.377.297zm5 15.374-.123.016c-1.168.146-2.96.297-5.377.297s-4.209-.151-5.377-.297L9 19.687V9.313l.123-.016C10.291 9.151 12.083 9 14.5 9s4.209.151 5.377.297l.123.016z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const PocketToPocket24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
