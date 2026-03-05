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
        d="M22 6v11s-3 2-10 2q-.459 0-.895-.011l-6.367 3.45a.5.5 0 0 1-.738-.44v-4.12C2.634 17.424 2 17 2 17V6s3-2 10-2 10 2 10 2m-11.1 7.485h1.62v-.246q0-.39.25-.67.25-.288.74-.62.262-.177.415-.297.159-.12.387-.35.233-.228.358-.447.13-.217.228-.544.102-.326.102-.693 0-1.232-.774-1.925Q13.454 7 12.077 7q-1.364 0-2.223.842Q9 8.685 9 10.025h1.877q0-.613.307-.974.312-.36.847-.361.501 0 .768.275.267.274.267.78 0 .205-.068.383a1.1 1.1 0 0 1-.21.35q-.142.172-.268.286a8 8 0 0 1-.346.292q-.24.195-.37.31a4 4 0 0 0-.33.332q-.2.223-.307.424-.102.2-.188.498-.08.292-.08.619zm.102 2.2q.318.315.762.315.432 0 .75-.315.32-.32.32-.745 0-.429-.32-.745a1.02 1.02 0 0 0-.75-.32q-.444 0-.762.315a1.02 1.02 0 0 0-.313.75q0 .43.313.745"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Help24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
