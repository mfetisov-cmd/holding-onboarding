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
        d="M12 4a8 8 0 0 0-8 8c0 1.287.36 2.646 1.007 3.614.607.908 1.395 1.403 2.462 1.386.436-.006.986-.121 1.655-.46.839-.422 1.584-.75 2.238-.973.626-.215 1.296-.38 1.943-.37.664.01 1.622.223 2.246 1.117.562.805.507 1.69.42 2.192-.046.268-.027.413-.012.477a2 2 0 0 0 .205-.074c.2-.087.447-.23.725-.435a7.7 7.7 0 0 0 1.513-1.51C19.385 15.654 20 13.837 20 12a8 8 0 0 0-8-8m8 14.165c1.256-1.67 2-3.914 2-6.165 0-5.523-4.477-10-10-10S2 6.477 2 12c0 3.21 1.75 7.058 5.5 7 .774-.012 1.62-.217 2.525-.674 3.162-1.595 4.183-1.362 3.975-.16-.315 1.822.72 2.676 1.612 2.814q.132.02.27.02c1.366-.004 3.113-1.495 4.119-2.835"
        fillRule="evenodd"
      />
      <path d="M17.75 12.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M11.125 8a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0M9.25 12.5a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0" />
    </Box>
  );
};

export const Palette24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
