import { useMemo } from 'react';

import { useTranslations } from 'next-intl';
import styled from 'styled-components';

import { DeliveryAddress } from '@/shared/api/main/generated/vivid/shared/v1/delivery_address_pb';
import { getLocalizedCountryCodes } from '@/shared/lib/utils/countries/getLocalizedCountryCodes';
import { Divider } from '@/shared/ui/vivid-ui/components/Divider';
import { Typography } from '@/shared/ui/vivid-ui/components/Typography';

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: ${(props) => props.theme.token.spacingM};
`;

const StyledItem = styled.div`
  display: flex;
  gap: ${(props) => props.theme.token.spacingXL};
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;

  & > *:last-child {
    text-align: right;
  }
`;

export const DeliveryAddressList = ({
  address,
  lang,
}: {
  address: DeliveryAddress;
  lang: string;
}) => {
  const t = useTranslations('common');

  const [country, state, city, postalCode, street, house, comment] = [
    address.getCountry(),
    address.getState(),
    address.getCity(),
    address.getPostalCode(),
    address.getStreet(),
    address.getHouse(),
    address.getComment(),
  ];

  const localizedCountries = useMemo(
    () => getLocalizedCountryCodes(lang),
    [lang],
  );

  const localizedCountryCode = localizedCountries.find(
    (cc) => cc.alpha2code === country,
  );

  return (
    <StyledContainer>
      <Divider />
      {country && (
        <>
          <StyledItem>
            <Typography variant="labelSAcc">
              {t('delivery_address.country.label')}
            </Typography>
            <Typography variant="labelS">
              {localizedCountryCode?.localizedName ||
                localizedCountryCode?.name ||
                country}
            </Typography>
          </StyledItem>
          <Divider />
        </>
      )}
      {state && (
        <>
          <StyledItem>
            <Typography variant="labelSAcc">
              {t('delivery_address.state.label')}
            </Typography>
            <Typography variant="labelS">{state}</Typography>
          </StyledItem>
          <Divider />
        </>
      )}
      {postalCode && (
        <>
          <StyledItem>
            <Typography variant="labelSAcc">
              {t('delivery_address.postal_code.label')}
            </Typography>
            <Typography variant="labelS">{postalCode}</Typography>
          </StyledItem>
          <Divider />
        </>
      )}
      {city && (
        <>
          <StyledItem>
            <Typography variant="labelSAcc">
              {t('delivery_address.city')}
            </Typography>
            <Typography variant="labelS">{city}</Typography>
          </StyledItem>
          <Divider />
        </>
      )}
      {street && (
        <>
          <StyledItem>
            <Typography variant="labelSAcc">
              {t('delivery_address.street.label')}
            </Typography>
            <Typography variant="labelS">{street}</Typography>
          </StyledItem>
          <Divider />
        </>
      )}
      {house && (
        <>
          <StyledItem>
            <Typography variant="labelSAcc">
              {t('delivery_address.house.label')}
            </Typography>
            <Typography variant="labelS">{house}</Typography>
          </StyledItem>
          <Divider />
        </>
      )}
      {comment && (
        <>
          <StyledItem>
            <Typography variant="labelSAcc">
              {t('delivery_address.comment.label')}
            </Typography>
            <Typography variant="labelS">{comment}</Typography>
          </StyledItem>
          <Divider />
        </>
      )}
    </StyledContainer>
  );
};
