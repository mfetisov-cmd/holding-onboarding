import { Box } from '@/shared/ui/vivid-ui/components/Box';
import {
  PolymorphicSquareIconProps,
  SquareIconProps,
} from '@/shared/ui/vivid-ui/components/Icons/types';
import { createPolymorphicComponent } from '@/shared/ui/vivid-ui/shared';

const Icon = ({
  component = 'svg',
  size = 24,
  ...rest
}: Omit<PolymorphicSquareIconProps, 'color'>) => {
  return (
    <Box
      component={component}
      height={`${size}rem`}
      viewBox="0 0 24 24"
      width={`${size}rem`}
      {...rest}
    >
      <path
        d="M21.794 12.228c0-.731-.065-1.43-.186-2.103H12.21v3.853l5.412.001a4.635 4.635 0 0 1-2.009 3.104v2.5h3.222c1.88-1.741 2.959-4.315 2.959-7.355Z"
        fill="#4285F4"
      />
      <path
        d="M15.615 17.083c-.897.605-2.052.959-3.403.959-2.61 0-4.823-1.759-5.616-4.129H3.273v2.578A10.003 10.003 0 0 0 12.213 22c2.701 0 4.971-.889 6.623-2.418l-3.221-2.499Z"
        fill="#34A853"
      />
      <path
        d="M6.28 12c0-.666.112-1.31.314-1.914V7.508H3.27a9.95 9.95 0 0 0-1.064 4.491c0 1.616.384 3.141 1.064 4.492l3.323-2.578A6.032 6.032 0 0 1 6.28 12Z"
        fill="#FABB05"
      />
      <path
        d="M12.212 5.958c1.475 0 2.796.508 3.838 1.5l2.855-2.852C17.171 2.991 14.911 2 12.212 2a10.004 10.004 0 0 0-8.939 5.509l3.323 2.578c.793-2.37 3.007-4.129 5.616-4.129Z"
        fill="#E94235"
      />
    </Box>
  );
};

export const GPay24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
