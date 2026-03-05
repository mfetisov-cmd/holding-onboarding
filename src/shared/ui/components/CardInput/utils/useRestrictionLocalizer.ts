import { useTranslations } from 'next-intl';

import { MoneyLimit } from '@/shared/api/main/generated/vivid/frontend/shared/tariff/v1/limit_pb';
import { useMoneyFormatter } from '@/shared/lib/hooks/formatters/useMoneyFormatter';
import { absurd } from '@/shared/lib/utils/absurd';

export const useRestrictionLocalizer = () => {
  const t = useTranslations('add_money.card_top_up');
  const { formatMoney } = useMoneyFormatter();

  const getRangedLimitDescription = (rangedLimit?: MoneyLimit.Ranged) => {
    if (!rangedLimit) return '';

    const range = rangedLimit.getRange();
    switch (range) {
      case MoneyLimit.Ranged.Range.RANGE_UNSPECIFIED:
        return t('limit.top_up_limit_reached_fixed', {
          amount: formatMoney(rangedLimit.getTotal()),
        });
      case MoneyLimit.Ranged.Range.RANGE_PER_TRANSACTION:
        return t('limit.top_up_limit_reached_per_transaction', {
          amount: formatMoney(rangedLimit.getTotal()),
        });
      case MoneyLimit.Ranged.Range.RANGE_PER_DAY:
        return t('limit.top_up_limit_reached_daily', {
          amount: formatMoney(rangedLimit.getTotal()),
        });
      case MoneyLimit.Ranged.Range.RANGE_PER_WEEK:
        return t('limit.top_up_limit_reached_weekly', {
          amount: formatMoney(rangedLimit.getTotal()),
        });
      case MoneyLimit.Ranged.Range.RANGE_PER_MONTH:
        return t('limit.top_up_limit_reached_monthly', {
          amount: formatMoney(rangedLimit.getTotal()),
        });
      default:
        absurd(range);
    }
  };

  return (limit?: MoneyLimit) => {
    if (!limit) return '';

    const limitCase = limit.getLimitCase();
    switch (limitCase) {
      case MoneyLimit.LimitCase.FIXED:
        return t('limit.top_up_limit_reached_fixed', {
          amount: formatMoney(limit.getFixed()?.getTotal()),
        });
      case MoneyLimit.LimitCase.RANGED:
        return getRangedLimitDescription(limit.getRanged());
      case MoneyLimit.LimitCase.LIMIT_NOT_SET:
        return '';
      default:
        absurd(limitCase);
    }
  };
};
