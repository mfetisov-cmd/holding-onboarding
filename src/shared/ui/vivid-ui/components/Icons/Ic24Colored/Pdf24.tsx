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
        d="M4 4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4Z"
        fill="#F24646"
      />
      <path
        d="M8.564 11.668c.296 0 .55.061.762.184.214.12.378.287.492.498.114.21.171.449.171.717 0 .27-.058.51-.174.72-.115.21-.279.375-.492.496-.212.12-.467.18-.765.18h-.936V16h-.72v-4.332h1.662Zm.689 1.4c0-.257-.07-.454-.21-.594-.14-.14-.335-.21-.587-.21h-.838v1.61h.838c.167 0 .31-.032.429-.096a.653.653 0 0 0 .273-.273.93.93 0 0 0 .095-.438ZM10.604 11.668h1.494c.43 0 .786.083 1.07.25.286.168.498.412.638.734.142.32.213.712.213 1.177 0 .463-.071.857-.213 1.18a1.56 1.56 0 0 1-.641.74c-.284.167-.64.251-1.067.251h-1.495v-4.332Zm.72.606v3.12h.695c.214 0 .4-.032.559-.095a.947.947 0 0 0 .39-.292c.104-.132.18-.293.232-.486.053-.195.08-.422.08-.682 0-.347-.046-.637-.137-.87a1.023 1.023 0 0 0-.416-.52c-.186-.117-.422-.175-.708-.175h-.695ZM15.458 16h-.72v-4.332h2.669v.612h-1.949v1.327h1.784v.603h-1.784V16Z"
        fill="#fff"
      />
      <path d="m15 2 5 5h-4a1 1 0 0 1-1-1V2Z" fill="#F67E7E" />
    </Box>
  );
};

export const Pdf24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
