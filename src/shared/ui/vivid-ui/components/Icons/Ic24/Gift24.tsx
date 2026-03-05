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
        d="M11.512 4.088A3.32 3.32 0 0 0 8.428 2c-2.35 0-3.956 2.373-3.083 4.555l.098.245q.122.305.295.577C3.764 7.66 3 8 3 8v3h18V8s-.764-.34-2.738-.623a3.5 3.5 0 0 0 .295-.577l.098-.245C19.528 4.373 17.921 2 15.571 2c-1.357 0-2.579.827-3.083 2.088L12 5.308zM8.428 4c.54 0 1.027.329 1.227.83L10.523 7h-1.83A1.5 1.5 0 0 1 7.3 6.057l-.098-.245A1.32 1.32 0 0 1 8.428 4m7.143 0c-.54 0-1.025.329-1.226.83L13.477 7h1.83a1.5 1.5 0 0 0 1.393-.943l.098-.245A1.32 1.32 0 0 0 15.572 4"
        fillRule="evenodd"
      />
      <path d="M4 13v8.01s1.776.887 7 .99v-9zM20 21.01s-1.776.887-7 .99v-9h7z" />
    </Box>
  );
};

export const Gift24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
