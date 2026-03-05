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
        d="M20.398 17.432A9.95 9.95 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10a9.96 9.96 0 0 0 6.696-2.573C17.776 18.51 16.933 17.3 16.5 16l.5-.5c1.104 1.656 2.207 1.788 3.227 1.911zM11.505 4.368a1.5 1.5 0 1 0-2.898.776 1.5 1.5 0 0 0 2.898-.776M7.759 5.636a1.5 1.5 0 1 0-2.121 2.122 1.5 1.5 0 0 0 2.121-2.122M3.306 9.671a1.5 1.5 0 1 1 2.898.776 1.5 1.5 0 0 1-2.898-.776M13.5 12a1.5 1.5 0 1 1-3-.001 1.5 1.5 0 0 1 3 0m.051 5.795a1.5 1.5 0 1 1 .777 2.897 1.5 1.5 0 0 1-.777-2.897m-3.103 0a1.5 1.5 0 1 1-.776 2.898 1.5 1.5 0 0 1 .776-2.898m4.944-12.652a1.5 1.5 0 1 0-2.898-.776 1.5 1.5 0 0 0 2.898.776m-7.632 11.1a1.5 1.5 0 1 1-2.121 2.12 1.5 1.5 0 0 1 2.121-2.12m10.606-8.486a1.5 1.5 0 1 0-2.121-2.122 1.5 1.5 0 0 0 2.12 2.122M6.203 13.553a1.5 1.5 0 1 1-2.898.776 1.5 1.5 0 0 1 2.898-.776m13.428-2.045a1.5 1.5 0 1 0-.777-2.898 1.5 1.5 0 0 0 .777 2.898"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Phone24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
