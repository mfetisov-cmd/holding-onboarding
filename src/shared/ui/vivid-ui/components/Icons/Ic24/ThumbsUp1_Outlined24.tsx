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
      viewBox="0 0 19 18"
      width={`${size}rem`}
      {...rest}
    >
      <path d="M13.9998 17.5H4.83317V6.66671L10.6665 0.833374L11.7082 1.87504C11.8054 1.97226 11.8853 2.10421 11.9478 2.27087C12.0103 2.43754 12.0415 2.59726 12.0415 2.75004V3.04171L11.1248 6.66671H16.4998C16.9443 6.66671 17.3332 6.83337 17.6665 7.16671C17.9998 7.50004 18.1665 7.88893 18.1665 8.33337V10C18.1665 10.0973 18.1526 10.2014 18.1248 10.3125C18.0971 10.4237 18.0693 10.5278 18.0415 10.625L15.5415 16.5C15.4165 16.7778 15.2082 17.0139 14.9165 17.2084C14.6248 17.4028 14.3193 17.5 13.9998 17.5ZM6.49984 15.8334H13.9998L16.4998 10V8.33337H8.99984L10.1248 3.75004L6.49984 7.37504V15.8334ZM4.83317 6.66671V8.33337H2.33317V15.8334H4.83317V17.5H0.666504V6.66671H4.83317Z" />
    </Box>
  );
};

export const ThumbsUp1_Outlined24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
