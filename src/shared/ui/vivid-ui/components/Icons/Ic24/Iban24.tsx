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
      <path d="M1.682 16V8H0v8z" />
      <path
        clipRule="evenodd"
        d="M3.293 16V8h3.2q1.159 0 1.824.596.666.591.666 1.62 0 .64-.274 1.103a1.7 1.7 0 0 1-.798.691q.57.195.864.65.3.453.3 1.134 0 1.061-.666 1.636-.666.57-1.915.57zm3.028-6.464H4.975v1.741H6.32q.452 0 .69-.227.245-.227.245-.66 0-.421-.24-.638-.233-.216-.695-.216m.081 3.213H4.975v1.715h1.427q.945 0 .945-.886 0-.407-.244-.618-.239-.21-.7-.21M9.398 16h1.763l.549-1.683h2.49L14.737 16h1.788l-2.733-8h-1.646zm2.8-3.156.553-1.71q.168-.532.209-.775.025.18.208.776l.549 1.71z"
        fillRule="evenodd"
      />
      <path d="M17.426 16h1.661v-5.082L22.333 16H24V8h-1.667v5.092L19.087 8h-1.661z" />
    </Box>
  );
};

export const Iban24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
