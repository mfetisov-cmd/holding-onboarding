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
        d="M17.676 9.932H16.5l-.006 1.854h-1.346v-6.08h2.488q1.203 0 1.21.63v2.966q0 .63-1.17.63m-.175-3.522h-1.009v2.817h1.009zM1 7.545h2.082q1.008 0 1.014.632v2.977q0 .632-.98.632h-.985v.052l-.005 1.808H1zm1.126 3.534h.844V8.252h-.844zM7.576 8.177q-.006-.631-.985-.632l-1.104.011q-.99 0-.99.625v.636l1.105-.002.004-.563h.844v1.024l-.985.002q-.978.008-.978.633L4.48 11.15q0 .636.946.636H7.57zm-1.97 2.902V9.99h.844l.006 1.09zM10.18 13.646H9.055q-.985 0-.985-.632v-.633h1.126v.558h.844v-1.108l-.002-.045h-.99q-.977 0-.978-.632V8.177q.005-.632 1.013-.632h2.082v5.469q0 .632-.985.632m-.14-5.394h-.844v2.827h.844zM12.542 11.786h1.091q1.008 0 1.013-.631V8.177q0-.632-.98-.632h-1.124q-.991 0-.991.632v2.978q0 .63.99.631m.134-3.534h.85l-.006 2.827h-.844z"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M21.826 5.709q1.17 0 1.17.632l.003 5.134C23 16.183 19.113 20 14.32 20c-2.78 0-5.302-1.284-6.891-3.28l-.862.674V13.7l2.582 1.711-.673.503c1.345 1.692 3.489 2.78 5.844 2.78 4.06 0 7.34-3.225 7.34-7.212V9.926h-1.016v1.861h-1.344V6.341q0-.632 1.183-.632zm-1.183 3.51h1.015V6.415h-1.015z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Pagopa24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
