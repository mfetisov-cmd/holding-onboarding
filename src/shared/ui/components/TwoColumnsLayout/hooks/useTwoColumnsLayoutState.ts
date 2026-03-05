import { useValue } from '@/shared/lib/hooks/useValue';

export type RightColumnImageKey =
  | 'default'
  | 'desk'
  | 'envelope'
  | 'envelopeWithoutBullet'
  | 'freeMonths'
  | 'interestRate'
  | 'interestRateFullWidth'
  | 'key'
  | 'mail'
  | 'palms'
  | 'phone'
  | 'phoneNotification'
  | 'protected'
  | 'referral'
  | 'securityFirst'
  | 'smsNotification'
  | 'success'
  | 'support'
  | 'teamPermissions'
  | 'trustpilot'
  | 'user'
  | 'userFaceMatch';

export const DARK_LOGO_KEYS: Array<RightColumnImageKey> = [
  'interestRate',
  'freeMonths',
  'phone',
  'success',
  'teamPermissions',
];

export type TwoColumnsLayoutState = {
  isDarkLogo: boolean;
  onBack?: () => void;
  rightColumnImageKey: RightColumnImageKey;
};

export const useTwoColumnsLayoutState = (
  defaultKey: RightColumnImageKey = 'default',
) => {
  return useValue<TwoColumnsLayoutState>(
    {
      isDarkLogo: DARK_LOGO_KEYS.includes(defaultKey),
      rightColumnImageKey: defaultKey,
    },
    'TwoColumnsLayoutState',
  );
};
