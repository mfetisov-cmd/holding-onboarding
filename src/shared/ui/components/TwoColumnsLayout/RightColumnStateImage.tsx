'use client';
import React from 'react';

import {
  RightColumnImageKey,
  useTwoColumnsLayoutState,
} from '@/shared/ui/components/TwoColumnsLayout/hooks/useTwoColumnsLayoutState';

import { ImageColumn } from './ImageColumn';
import * as RightColumn from './RightColumn';

const ComponentByKey: Record<RightColumnImageKey, () => React.JSX.Element> = {
  default: ImageColumn,
  desk: RightColumn.Desk,
  envelope: RightColumn.Envelope,
  envelopeWithoutBullet: RightColumn.EnvelopeWithoutBullet,
  freeMonths: RightColumn.FreeMonths,
  interestRate: () => <RightColumn.InterestRate />,
  interestRateFullWidth: () => (
    <RightColumn.InterestRate withoutChatButtonPadding />
  ),
  key: RightColumn.Key,
  mail: RightColumn.Mail,
  palms: RightColumn.Palms,
  phone: RightColumn.Phone,
  phoneNotification: RightColumn.PhoneNotification,
  protected: RightColumn.Protected,
  referral: RightColumn.Referral,
  securityFirst: RightColumn.SecurityFirst,
  smsNotification: RightColumn.SmsNotification,
  success: RightColumn.Success,
  support: RightColumn.Support,
  teamPermissions: RightColumn.TeamPermissions,
  trustpilot: RightColumn.Trustpilot,
  user: RightColumn.User,
  userFaceMatch: RightColumn.UserFaceMatch,
} as const;

export const RightColumnStateImage = () => {
  const [{ rightColumnImageKey }] = useTwoColumnsLayoutState();

  const Component = ComponentByKey[rightColumnImageKey];

  return <Component />;
};
