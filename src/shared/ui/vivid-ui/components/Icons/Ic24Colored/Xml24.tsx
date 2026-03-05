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
        fill="#FFB11F"
      />
      <path
        d="m9.726 11.668-1.406 2.18L9.704 16h-.842l-.993-1.616h-.035l-1 1.616h-.793l1.377-2.184-1.361-2.148h.854l.987 1.631h.035l.977-1.631h.816ZM10.829 16h-.644v-4.332h.72l1.324 3.069h.025l1.323-3.07h.718V16h-.651v-3.015h-.038l-1.11 2.555h-.518l-1.111-2.555h-.038V16ZM17.886 15.375V16h-2.628v-4.332h.72v3.707h1.908Z"
        fill="#fff"
      />
      <path d="m15 2 5 5h-4a1 1 0 0 1-1-1V2Z" fill="#FFC862" />
    </Box>
  );
};

export const Xml24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
