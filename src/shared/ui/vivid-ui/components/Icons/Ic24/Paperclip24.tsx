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
      <path d="m4.05 17.857-.169-.168zM16.893 9.007c.528-.525.813-1.082.894-1.53.073-.396 0-.734-.273-1.065s-.607-.7-1.014-1.105a15 15 0 0 0-1.112-1.01c-.332-.27-.672-.342-1.07-.27-.45.08-1.01.364-1.539.89l-6.052 6.017c-2.058 2.047-2.206 4.443-.724 6.013a36 36 0 0 0 1.575 1.567c1.579 1.473 3.988 1.326 6.046-.72l4.954-4.923L20 14.287l-4.953 4.922c-2.55 2.535-6.217 3.218-8.846.764a37 37 0 0 1-1.665-1.656c-2.467-2.614-1.78-6.261.769-8.797l6.052-6.018c1.51-1.501 3.658-2.097 5.308-.75.386.316.806.692 1.257 1.141s.83.867 1.147 1.25c1.355 1.642.756 3.778-.754 5.28l-6.59 6.555c-.712.708-1.735.954-2.528.337-.304-.236-.654-.54-1.048-.933-.395-.392-.7-.74-.938-1.042-.62-.79-.373-1.806.34-2.515l5.485-5.462 1.422 1.415-5.485 5.462-.037.04q.245.298.635.688c.262.26.493.467.692.632l.04-.037z" />
    </Box>
  );
};

export const Paperclip24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
