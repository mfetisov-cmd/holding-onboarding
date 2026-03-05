import { Box } from '@/shared/ui/vivid-ui/components/Box';
import { RectangleIconProps } from '@/shared/ui/vivid-ui/components/Icons/types';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '@/shared/ui/vivid-ui/shared';

const _Chip = ({
  color,
  component = 'svg',
  fill,
  height = 45,
  width = 34,
  ...rest
}: PolymorphicComponentProps<'svg', RectangleIconProps>) => {
  return (
    <Box
      component={component}
      fill={fill}
      height={height}
      viewBox="0 0 34 45"
      width={width}
      {...rest}
    >
      <path
        d="M6.616.439A5.911 5.911 0 0 0 .705 6.35v32.316a5.911 5.911 0 0 0 5.91 5.91h20.493a5.911 5.911 0 0 0 5.912-5.91V6.35A5.911 5.911 0 0 0 27.108.44H6.616Z"
        fill={fill}
        stroke={color}
        strokeWidth={0.5}
      />
      <path
        d="M32.626 22.309h-1.97c-.871 0-1.577-.706-1.577-1.576v-3.609c0-.87-.706-1.576-1.576-1.576h-5.518m0 28.635V31.044c0-.87-.705-1.576-1.576-1.576h-8.276m0-13.92H6.616c-.87 0-1.576.706-1.576 1.576v5.384m7.093-6.96V.833m0 14.715h9.852m0 0V.833m-9.852 28.635H6.616c-.87 0-1.576-.706-1.576-1.577v-5.383m7.093 6.96v14.715M5.04 22.508H1.099"
        stroke={color}
        strokeWidth=".788"
      />
    </Box>
  );
};

export const Chip = createPolymorphicComponent<'svg', RectangleIconProps>(
  _Chip,
);
