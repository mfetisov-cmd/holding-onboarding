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
      <path d="M19.001 1.5c.306.66.514 1.162.704 1.71a2.57 2.57 0 0 0 1.586 1.586c.548.19 1.049.399 1.709.704-.66.306-1.161.514-1.71.704a2.57 2.57 0 0 0-1.585 1.586c-.19.548-.398 1.05-.704 1.71a18 18 0 0 1-.704-1.71 2.57 2.57 0 0 0-1.587-1.586A18 18 0 0 1 15 5.5c.66-.305 1.162-.513 1.711-.704a2.57 2.57 0 0 0 1.586-1.586c.19-.548.398-1.05.704-1.71" />
      <path d="M13 4.014A36 36 0 0 0 12 4c-3.093 0-5.405.39-7.023.826C3.04 5.35 2 7.205 2 9.211v5.578c0 1.637.693 3.174 2 3.968V23a.5.5 0 0 0 .738.44l6.367-3.45q.436.01.895.011c3.093 0 5.405-.39 7.023-.826C20.96 18.65 22 16.795 22 14.789V11h-2v3.789c0 1.391-.685 2.234-1.498 2.454C17.06 17.63 14.922 18 12 18q-.434 0-.845-.01l-.533-.014L6 20.48v-2.848l-.962-.584C4.471 16.703 4 15.913 4 14.788V9.212c0-1.391.685-2.234 1.498-2.453C6.94 6.368 9.078 6 12 6q.517 0 1 .015z" />
      <path d="M9 11.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M16.25 10a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M9 13c.613 1.839 1.774 3 3 3s2.387-1.161 3-3z" />
    </Box>
  );
};

export const Chatbot24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
