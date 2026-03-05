import { ElementType } from 'react';

import { StyledPaper } from '@/shared/ui/vivid-ui/components/Paper/styles';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '@/shared/ui/vivid-ui/shared';

export type PaperProps = {
  type?: 'gray' | 'light';
};

export type PolymorphicPaperProps<C extends ElementType = 'div'> =
  PolymorphicComponentProps<C, PaperProps>;

const _Paper = ({
  children,
  component = 'div',
  type = 'light',
  ...rest
}: PolymorphicPaperProps) => {
  return (
    <StyledPaper $type={type} as={component} {...rest}>
      {children}
    </StyledPaper>
  );
};

export const Paper = createPolymorphicComponent<'div', PaperProps>(_Paper);
