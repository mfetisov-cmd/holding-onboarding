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
        clipRule="evenodd"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Zm1.057-15.435A26.64 26.64 0 0 0 12.002 6c-.459.991-.771 1.743-1.056 2.566a3.849 3.849 0 0 1-2.38 2.379C7.745 11.23 6.992 11.542 6 12c.99.458 1.743.77 2.565 1.055a3.854 3.854 0 0 1 2.38 2.38c.285.822.598 1.573 1.057 2.564.458-.99.77-1.743 1.055-2.565a3.851 3.851 0 0 1 2.38-2.38A26.629 26.629 0 0 0 18 12.002c-.99-.458-1.742-.771-2.564-1.056a3.852 3.852 0 0 1-2.379-2.38Z"
        fill="url(#prime_orange)"
        fillRule="evenodd"
      />
      <path
        d="M11.63 7.035a.5.5 0 0 1 .93 0l1.22 3.093a.5.5 0 0 0 .28.282l3.094 1.22a.5.5 0 0 1 0 .93l-3.093 1.22a.5.5 0 0 0-.282.282l-1.22 3.093a.5.5 0 0 1-.93 0l-1.22-3.093a.5.5 0 0 0-.282-.282l-3.093-1.22a.5.5 0 0 1 0-.93l3.093-1.22a.5.5 0 0 0 .282-.282l1.22-3.093Z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="prime_orange"
          gradientUnits="userSpaceOnUse"
          x1="25.5"
          x2="-3.446"
          y1="20"
          y2="9.49"
        >
          <stop offset=".255" stopColor="#FF5050" />
          <stop offset="1" stopColor="#FFD335" />
        </linearGradient>
      </defs>
    </Box>
  );
};

export const PrimeOrange24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
