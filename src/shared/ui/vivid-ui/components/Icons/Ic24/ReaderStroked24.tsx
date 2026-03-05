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
      <path d="M8 7v2h8V7zM8 13v-2h8v2zM8 17h4v-2H8z" />
      <path
        clipRule="evenodd"
        d="M12 2C7 2 4 3 4 3v18s4 1 8 1 8-1 8-1V3s-3-1-8-1M6.829 19.527q-.45-.076-.829-.147V4.56q.224-.044.483-.092C7.753 4.237 9.633 4 12 4s4.247.237 5.517.468q.259.046.483.093v14.82q-.38.07-.829.146c-1.44.24-3.322.473-5.171.473s-3.73-.233-5.171-.473"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const ReaderStroked24 = createPolymorphicComponent<
  'svg',
  SquareIconProps
>(Icon);
