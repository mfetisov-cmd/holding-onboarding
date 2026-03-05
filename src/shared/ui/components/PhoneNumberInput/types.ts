import { LocalizedCountryCode } from '@/shared/lib/utils/countries/getLocalizedCountryCodes';
import { InputProps } from '@/shared/ui/vivid-ui/components/Input';
import { PolymorphicComponentProps } from '@/shared/ui/vivid-ui/shared';

export type Country = LocalizedCountryCode & {
  emoji: string;
  phoneCode: string;
};

export type PhoneNumberInputChangePayload = {
  combined?: string;
  country?: Country;
  isValid?: boolean;
  number?: string;
};

type BasePhoneInputProps = {
  disabled?: boolean;
  error?: string;
  id?: string;
  value?: string;
} & Pick<PolymorphicComponentProps<'input', InputProps>, 'size'>;

export type PhoneNumberInputProps = BasePhoneInputProps & {
  autoFocus?: boolean;
  country?: string;
  dataQaIdCountry?: string;
  dataQaIdNumber?: string;
  locale: string;
  onChange?: (payload: PhoneNumberInputChangePayload) => void;
  onCountryChange?: (country?: Country) => void;
  qaId?: string;
  showErrorSpacer?: boolean;
};

export type PhoneCodeSelectProps = BasePhoneInputProps & {
  codeValue: string;
  countries: Country[];
  country?: Country;
  dataQaId?: string;
  onSetCodeValue: (code: string) => void;
  onSetCountry: (country?: Country) => void;
  qaId?: string;
};
