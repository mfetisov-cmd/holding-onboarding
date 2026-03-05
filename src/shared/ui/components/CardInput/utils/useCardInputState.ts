import { useValue } from '@/shared/lib/hooks/useValue';
import { CardBrand } from '@/shared/lib/utils/card/getCardDescriptor';
import { InputProps } from '@/shared/ui/vivid-ui/components/Input';

export type CardInputState = {
  cardBrand?: CardBrand;
  cardHolderInitialName?: string;
  cardHolderName: string;
  cardHolderNameValidationError: null | string;
  cardNumber: string;
  cvv: string;
  cvvValidationError: null | string;
  email?: string;
  expirationDateValidationError: null | string;
  expirationMonth: string;
  expirationYear: string;
  hideCardholderName?: boolean;
  panValidationError: null | string;
  size?: InputProps['size'];
};

export const defaultCardInputState: CardInputState = {
  cardBrand: undefined,
  cardHolderInitialName: undefined,
  cardHolderName: '',
  cardHolderNameValidationError: null,
  cardNumber: '',
  cvv: '',
  cvvValidationError: null,
  email: '',
  expirationDateValidationError: null,
  expirationMonth: '',
  expirationYear: '',
  hideCardholderName: false,
  panValidationError: null,
  size: undefined,
};

export const useCardInputState = (initialState?: Partial<CardInputState>) => {
  return useValue<CardInputState>(
    { ...defaultCardInputState, ...initialState },
    'CardInputState',
    Boolean(initialState),
  );
};
