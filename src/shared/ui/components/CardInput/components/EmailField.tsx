import { ChangeEvent } from 'react';

import { useTranslations } from 'next-intl';

import { Input, InputProps } from '@/shared/ui/vivid-ui/components/Input';

import { useCardInputState } from '../utils';

export const EmailField = (inputProps: InputProps) => {
  const [data, emitter] = useCardInputState();
  const t = useTranslations('add_money.card_top_up');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    emitter.update({
      email: e.target.value,
    });
  };

  return (
    <Input
      {...inputProps}
      id="email"
      name="email"
      autoComplete="email"
      label={t('email_label')}
      size={data.size}
      spellCheck={false}
      type="email"
      value={data?.email ?? ''}
      onChange={handleChange}
    />
  );
};
