'use client';
import styled, { keyframes } from 'styled-components';

import { Loader24 } from '@/shared/ui/vivid-ui/components/Icons/Ic24/Loader24';
import {
  createPolymorphicComponent,
  PolymorphicComponentProps,
} from '@/shared/ui/vivid-ui/shared';

interface LoaderProps {
  color?: string;
  size?: number;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled(Loader24)`
  animation: ${rotate} 1s linear infinite;
`;

export const _Loader = ({
  color,
  size,
  ...rest
}: Omit<PolymorphicComponentProps<'svg', LoaderProps>, 'component'>) => {
  return (
    <Loader24 color={color} component={StyledLoader} size={size} {...rest} />
  );
};

export const Loader = createPolymorphicComponent<'svg', LoaderProps>(_Loader);
