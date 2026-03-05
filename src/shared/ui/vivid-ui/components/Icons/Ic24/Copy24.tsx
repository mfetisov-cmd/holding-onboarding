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
        d="M9.5 2C5.375 2 4 2.7 4 2.7v12.6s1.263.643 5 .696V21.3s1.375.7 5.5.7 5.5-.7 5.5-.7V8.7s-1.263-.643-5-.696V2.7S13.625 2 9.5 2M13 8.034V4.237C12.259 4.115 11.127 4 9.5 4s-2.759.115-3.5.237v9.526c.663.109 1.638.213 3 .233V8.7s1.034-.527 4-.666"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Copy24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
