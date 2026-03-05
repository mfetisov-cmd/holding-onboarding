import { useCallback, useMemo, useState } from 'react';

import { useTranslations } from 'next-intl';
import { styled, useTheme } from 'styled-components';

import { LOCALES } from '@/shared/model/constants/locale';
import { TextButton } from '@/shared/ui/components/TextButton';
import { ListItem } from '@/shared/ui/vivid-ui/components/ListItem';
import { Popover } from '@/shared/ui/vivid-ui/components/Popover';
import { Typography } from '@/shared/ui/vivid-ui/components/Typography';

const StyledLocaleList = styled.ul`
  padding: 0;
  width: 246rem;
  list-style-type: none;
  margin: 0;

  & li {
    padding: ${({ theme }) =>
      `${theme.token.spacingM} ${theme.token.spacingS}`};
    cursor: pointer;
  }

  & li:hover {
    background: ${(props) => props.theme.token.color.c5};
  }
`;

type Props = {
  list?: string[];
  onChange: (value: string) => void;
  value?: string;
};
export function LanguageSelect({ list, onChange, value }: Props) {
  const theme = useTheme();
  const translateLocale = useTranslations('common.locale');
  const t = useTranslations('home');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = useCallback(
    (value: string) => {
      onChange(value);
      setIsOpen(false);
    },
    [onChange],
  );

  const popoverContent = useMemo(() => {
    return (
      <StyledLocaleList>
        {(list || LOCALES).map((it) => (
          <ListItem
            key={it}
            size="medium"
            title={translateLocale(it)}
            onClick={() => handleSelect(it)}
          />
        ))}
      </StyledLocaleList>
    );
  }, [handleSelect, list, translateLocale]);

  return (
    <Popover
      content={popoverContent}
      isOpen={isOpen}
      noContentPadding
      placement="bottom-start"
      zIndex={theme.token.zIndex.modal + theme.token.zIndex.popover}
    >
      <TextButton variant="plain" onClick={() => setIsOpen(true)}>
        <Typography
          color={theme?.token.color.c6}
          component="span"
          variant="paragraphS"
        >
          {t('accounts.account_id.statement.language.label', {
            lang: translateLocale(value),
          })}
        </Typography>
      </TextButton>
    </Popover>
  );
}
