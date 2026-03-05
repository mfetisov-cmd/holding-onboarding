import { useMemo } from 'react';

import styled, { useTheme } from 'styled-components';

import { Mastercard24, Visa24 } from '@/shared/ui/vivid-ui/components/Icons';
import { Flex } from '@/shared/ui/vivid-ui/components/Layout';

import { CardInputState } from '../utils';

const IconContainer = styled.div`
  width: ${(props) => props.theme.token.sizeUnits(16)};
  height: ${(props) => props.theme.token.sizeUnits(10)};
  background-color: ${(props) => props.theme.token.color.c11};
  border: 1px solid ${(props) => props.theme.token.color.c3};
  border-radius: ${(props) => props.theme.token.borderRadius2XS};
  display: flex;
  justify-content: center;
  align-items: center;
`;

type CardBrandIconsProps = {
  cardBrand?: CardInputState['cardBrand'];
};

export const CardBrandIcons = ({ cardBrand }: CardBrandIconsProps) => {
  const theme = useTheme();
  const iconByCardBrand = useMemo(
    () => ({
      MASTER_CARD: (
        <IconContainer>
          <Mastercard24 size={18} />
        </IconContainer>
      ),
      VISA: (
        <IconContainer>
          <Visa24 size={18} />
        </IconContainer>
      ),
    }),
    [],
  );
  const iconComponentByBrand =
    iconByCardBrand[cardBrand as keyof typeof iconByCardBrand];

  if (iconComponentByBrand) {
    return iconComponentByBrand;
  }

  return (
    <Flex gap={theme.token.spacing2XS}>
      {iconByCardBrand['MASTER_CARD']}
      {iconByCardBrand['VISA']}
    </Flex>
  );
};
