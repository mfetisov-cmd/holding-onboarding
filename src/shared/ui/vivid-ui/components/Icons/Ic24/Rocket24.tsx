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
        d="M21 4.04A1 1 0 0 0 19.953 3c-3.94.193-5.33.434-8.632 3.736-2.964 2.966-6.589 7.952-6.589 7.952s.902 1.087 2.205 2.39c1.302 1.302 2.407 2.224 2.407 2.224s4.943-3.668 7.907-6.633c3.305-3.307 3.577-4.661 3.747-8.63m-5.568 4.53c-.707-.707-1.179-.943-1.179-.943l-1.885 1.885s.235.472.942 1.179 1.179.943 1.179.943l1.886-1.886s-.236-.471-.943-1.178"
        fillRule="evenodd"
      />
      <path d="M3.508 9.312a4.38 4.38 0 0 1 3.877-1.218 90 90 0 0 0-2.038 2.493 112 112 0 0 0-1.904 2.483C2.398 11.654 2 10.82 2 10.82zM10.962 20.583l.412-.314a119 119 0 0 0 2.058-1.612 95 95 0 0 0 2.468-2.044 4.39 4.39 0 0 1-1.217 3.878L13.175 22s-.819-.391-2.213-1.417" />
    </Box>
  );
};

export const Rocket24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
