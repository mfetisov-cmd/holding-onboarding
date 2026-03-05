import { createQaIdAttribute } from '@utils/qaIds';
import { useTranslations } from 'next-intl';
import styled from 'styled-components';

import { Ids } from '@/shared/model/constants/e2e/ids';
import { LOCALES } from '@/shared/model/constants/locale';
import { IconView } from '@/shared/ui/vivid-ui/components/IconView';
import { ListItem } from '@/shared/ui/vivid-ui/components/ListItem';

const StyledContainer = styled.button`
  margin: 0;
  padding: ${({ theme: { token } }) => `0 ${token.spacingS}`};
  user-select: none;
  text-align: center;
  display: block;
  width: 100%;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: ${(props) => props.color || props.theme.token.color.c1};
  font: ${(props) => props.theme.token.font.labelS};

  &:hover,
  &:active,
  &:focus {
    background: ${(props) => props.theme.token.color.c5};
    outline: none;
  }

  &[disabled],
  &:disabled {
    pointer-events: none;
  }
`;

type LOCALE = (typeof LOCALES)[number];

type Props = {
  localeCode: LOCALE;
  onClick: (locale: LOCALE) => void;
};

export const LocaleButton = ({ localeCode, onClick }: Props) => {
  const t = useTranslations('common.locale');

  return (
    <StyledContainer
      {...createQaIdAttribute(Ids.COMMON__LOCALE_BUTTON__BUTTON)}
      onClick={() => onClick(localeCode)}
    >
      <ListItem
        labelPosition="down"
        leftIcon={
          <IconView
            backgroundUrl={`/images/country_flags/${localeCode}.webp`}
            size={36}
            variant="circle"
          />
        }
        size="small"
        title={t(localeCode)}
      />
    </StyledContainer>
  );
};
