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
        d="M4.7 20.5v1a.8.8 0 0 0 .8.8h13a.8.8 0 0 0 .8-.8v-1a.8.8 0 0 0-.8-.8h-5a.2.2 0 0 1-.2-.2v-3c0-.111.09-.2.2-.2H15c1.463 0 2.718-.52 3.75-1.551 1.031-1.032 1.55-2.287 1.55-3.75a5.25 5.25 0 0 0-.874-2.926 5.04 5.04 0 0 0-2.078-1.825.26.26 0 0 1-.145-.19q-.312-1.788-1.69-3.02A5.1 5.1 0 0 0 12 1.699c-1.34 0-2.515.448-3.512 1.339-.917.82-1.483 1.829-1.69 3.02a.26.26 0 0 1-.145.19 5.04 5.04 0 0 0-2.079 1.825 5.25 5.25 0 0 0-.874 2.926c0 1.463.52 2.718 1.55 3.75 1.032 1.031 2.288 1.55 3.75 1.55h1.5c.11 0 .2.09.2.2v3a.2.2 0 0 1-.2.2h-5a.8.8 0 0 0-.8.8m6.458-13.266a2.53 2.53 0 0 1 2.662.263.486.486 0 1 0 .593-.77 3.5 3.5 0 0 0-5.435 1.606h-.59a.389.389 0 1 0 0 .778H8.8a3.5 3.5 0 0 0 0 .778h-.41a.389.389 0 0 0 0 .778h.589a3.5 3.5 0 0 0 3.669 2.313 3.5 3.5 0 0 0 1.786-.722.486.486 0 1 0-.599-.766 2.527 2.527 0 0 1-3.799-.825h2.243a.389.389 0 1 0 0-.778H9.78a2.5 2.5 0 0 1 0-.778h2.498a.389.389 0 1 0 0-.778h-2.243a2.53 2.53 0 0 1 1.123-1.1"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const MoneyTree24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
