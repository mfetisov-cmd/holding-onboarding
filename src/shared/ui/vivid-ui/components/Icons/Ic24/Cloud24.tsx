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
        d="m5.414 17.008.009.002a8 8 0 0 0 .363.064c.278.044.713.107 1.303.17 1.18.126 2.984.256 5.413.256 2.428 0 4.232-.13 5.411-.256a25 25 0 0 0 1.301-.17q.21-.034.3-.052l.032-.006C20.336 16.793 21 15.974 21 15c0-.94-.65-1.732-1.526-1.944l-1.34-.324-.174-1.369a5.001 5.001 0 0 0-9.494-1.475l-.62 1.327-1.451-.19A3 3 0 0 0 3 14c0 1.485 1.059 2.735 2.395 3.004l.012.003zM20 18.965s-2.498.535-7.498.535S5 18.965 5 18.965C2.715 18.505 1 16.42 1 14a5 5 0 0 1 5.654-4.958 7.001 7.001 0 0 1 13.29 2.07A4 4 0 0 1 23 15c0 1.867-1.27 3.524-3 3.965"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Cloud24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
