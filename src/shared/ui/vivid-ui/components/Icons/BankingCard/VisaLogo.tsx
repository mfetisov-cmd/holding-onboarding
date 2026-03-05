import { Box } from '@/shared/ui/vivid-ui/components/Box';
import { RectangleIconProps } from '@/shared/ui/vivid-ui/components/Icons/types';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '@/shared/ui/vivid-ui/shared';

const _Visa = ({
  color,
  component = 'svg',
  height = 23,
  width = 72,
  ...rest
}: PolymorphicComponentProps<'svg', RectangleIconProps>) => {
  return (
    <Box
      component={component}
      fill={color}
      height={height}
      viewBox="0 0 72 23"
      width={width}
      {...rest}
    >
      <path d="m27.343.41-9.429 22.236h-6.153L7.127 4.894c-.287-1.089-.53-1.485-1.388-1.952C4.335 2.192 2.032 1.485 0 1.047l.143-.65h9.901c1.26 0 2.39.834 2.69 2.262l2.447 12.872L21.234.396h6.11V.41ZM51.44 15.39c.028-5.87-8.213-6.196-8.156-8.813.014-.806.787-1.64 2.461-1.867.83-.113 3.134-.184 5.738.99l1.03-4.71C51.11.48 49.307 0 47.075 0c-5.752 0-9.802 3.027-9.83 7.355-.043 3.197 2.876 4.98 5.094 6.055 2.26 1.089 3.033 1.782 3.019 2.758-.015 1.485-1.803 2.15-3.477 2.178-2.92.043-4.622-.778-5.981-1.4l-1.059 4.866c1.36.622 3.863 1.16 6.467 1.188 6.11-.014 10.117-2.999 10.13-7.61Zm15.181 7.256H72L67.307.41h-4.965c-1.116 0-2.06.637-2.475 1.627l-8.729 20.61h6.11l1.216-3.325h7.47l.686 3.324Zm-6.482-7.879L63.2 6.422l1.76 8.346h-4.822ZM35.657.41l-4.808 22.236h-5.824L29.833.41h5.824Z" />
    </Box>
  );
};

export const VisaLogo = createPolymorphicComponent<'svg', RectangleIconProps>(
  _Visa,
);
