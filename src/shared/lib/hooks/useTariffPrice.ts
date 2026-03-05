import { useMemo } from 'react';

import { Money } from '@/shared/api/main/generated/google/type/money_pb';
import { SmeTariffAvailableVariant } from '@/shared/api/main/generated/vivid/frontend/shared/sme/gateway/tariff/v1/sme_tariff_pb';

const CURRENCY = 'EUR';
const getZeroPrice = () => {
  const zeroPrice = new Money();
  zeroPrice.setUnits(0);
  zeroPrice.setNanos(0);
  zeroPrice.setCurrencyCode(CURRENCY);
  return zeroPrice;
};

export const useTariffPrice = (
  tariff?: SmeTariffAvailableVariant,
  isAnnual = false,
) => {
  return useMemo(() => {
    if (!tariff) {
      return {
        isFreeForever: false,
        priceMonthly: getZeroPrice(),
      };
    }

    const freeMonthsDetails = tariff.getPromoInfo()?.getFreeMonthsDetails();
    const priceMonthly = tariff.getMonthlyPrice()?.getPrice();
    const priceAnnual = tariff.getAnnualPrice();
    const isFreeForever = isAnnual
      ? !priceAnnual
      : !priceMonthly || !priceMonthly.getUnits();

    if (freeMonthsDetails) {
      if (isAnnual) {
        return {
          freeMonths: freeMonthsDetails?.getFreeMonthsQty(),
          isFreeForever,
          priceAnnual: priceAnnual?.getTotalPrice(),
          priceMonthly: getZeroPrice(),
          regularPriceMonthly: priceAnnual?.getPerMonthPrice(),
        };
      }
      return {
        freeMonths: freeMonthsDetails?.getFreeMonthsQty(),
        isFreeForever,
        priceMonthly: getZeroPrice(),
        regularPriceMonthly: priceMonthly,
      };
    }
    if (isAnnual) {
      return {
        isFreeForever,
        priceAnnual: priceAnnual?.getTotalPrice(),
        priceMonthly: priceAnnual?.getPerMonthPrice() || getZeroPrice(),
      };
    }
    return {
      isFreeForever,
      priceMonthly: priceMonthly || getZeroPrice(),
    };
  }, [tariff, isAnnual]);
};
