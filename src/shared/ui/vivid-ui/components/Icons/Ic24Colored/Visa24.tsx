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
        d="M8.733 8.417 5.72 15.602H3.757L2.275 9.868c-.09-.353-.168-.482-.442-.631C1.387 8.995.65 8.767 0 8.626l.044-.209h3.163c.403 0 .765.269.856.733l.783 4.157 1.934-4.89h1.953Zm7.697 4.839c.008-1.896-2.622-2-2.604-2.848.006-.258.252-.532.789-.602.266-.034 1-.061 1.832.322l.326-1.523a4.994 4.994 0 0 0-1.738-.319c-1.837 0-3.13.977-3.14 2.375-.013 1.034.922 1.611 1.626 1.955.724.352.967.578.965.893-.006.482-.578.695-1.113.703-.934.014-1.476-.253-1.909-.454l-.336 1.574c.434.2 1.236.373 2.066.382 1.953 0 3.23-.964 3.236-2.458Zm4.851 2.346H23l-1.5-7.185h-1.587a.846.846 0 0 0-.79.527l-2.79 6.658h1.952l.387-1.074h2.385l.224 1.074Zm-2.074-2.546.979-2.697.563 2.697h-1.542Zm-7.819-4.639-1.537 7.185H7.993L9.53 8.417h1.858Z"
        fill="#1634CC"
      />
    </Box>
  );
};

export const Visa24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
