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
      <path d="M15.58 22q-3.577 0-6.136-1.854C7.747 18.91 6.62 17.184 6.063 15H4v-2h1.762c-.034-.47-.052-.748-.052-.974 0-.244.018-.556.052-1.026H4V9h2.089q.848-3.278 3.407-5.133Q12.068 2 15.762 2q1.816 0 3.238.483v2.454q-1.396-.457-3.16-.457-2.688 0-4.516 1.162Q9.509 6.806 8.79 9H16v2H8.386c-.034.435-.052.739-.052 1 0 .244.018.53.052 1H16v2H8.791c.479 1.462 1.319 2.596 2.52 3.37q1.8 1.163 4.4 1.163 1.79 0 3.289-.5v2.537a14 14 0 0 1-3.42.43" />
    </Box>
  );
};

export const Euro24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
