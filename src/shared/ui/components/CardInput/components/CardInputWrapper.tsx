import { PropsWithChildren } from 'react';

import { CardInputState, useCardInputState } from '../utils';

export type CardInputWrapperProps = PropsWithChildren &
  Pick<CardInputState, 'cardHolderInitialName' | 'hideCardholderName' | 'size'>;
export const CardInputWrapper = ({
  cardHolderInitialName,
  children,
  hideCardholderName,
  size,
}: CardInputWrapperProps) => {
  // initialize card input state
  useCardInputState({
    cardHolderInitialName,
    hideCardholderName,
    size,
  });

  return children;
};
