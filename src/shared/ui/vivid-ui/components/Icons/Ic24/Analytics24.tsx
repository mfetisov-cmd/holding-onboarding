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
      <path d="M22 7.325V11h-5V7.325a1 1 0 0 0-.012-.144A42 42 0 0 0 13 7V2c1.877 0 3.46.098 4.75.232C20.32 2.5 22 4.742 22 7.325" />
      <path d="M7.25 3.232A44 44 0 0 1 11 3.01v2a42 42 0 0 0-3.543.212C6.092 5.364 5 6.57 5 8.324v7.351c0 1.756 1.092 2.96 2.457 3.103C8.68 18.906 10.193 19 12 19s3.322-.094 4.543-.222C17.908 18.636 19 17.431 19 15.675V13h2v2.675c0 2.583-1.681 4.825-4.25 5.092-1.29.135-2.873.233-4.75.233s-3.46-.098-4.75-.233C4.68 20.5 3 18.258 3 15.676v-7.35C3 5.741 4.681 3.5 7.25 3.231" />
      <path d="M9.122 7.155A23 23 0 0 1 11 7.017v2.001c-.64.025-1.19.07-1.648.124a.3.3 0 0 0-.213.119.73.73 0 0 0-.139.457v4.564c0 .217.07.372.139.457.058.072.12.108.213.119.681.079 1.564.142 2.648.142a23 23 0 0 0 2.648-.142.3.3 0 0 0 .213-.12.73.73 0 0 0 .139-.456V13h2v1.282c0 1.291-.839 2.413-2.122 2.562-.757.088-1.716.156-2.878.156s-2.121-.068-2.878-.156C7.839 16.695 7 15.574 7 14.282V9.718c0-1.292.839-2.414 2.122-2.563" />
    </Box>
  );
};

export const Analytics24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
