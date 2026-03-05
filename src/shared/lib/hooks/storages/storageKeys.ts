import { PORTFOLIO_ID_STORE_KEY } from '@/screens/invest/interest/components/modules/Portfolio';
import {
  DATEV_INVOICE_EXPORT_GET_INFORMATION_STORAGE_KEY,
  LEXWARE_INVOICE_EXPORT_GET_INFORMATION_STORAGE_KEY,
} from '@/shared/lib/hooks/storages/InvoiceExport/useGetInformation';
import { REGULAR_PAYMENTS_GET_UPCOMING_PAYMENTS } from '@/shared/lib/hooks/storages/RegularPayments/useGetUpcomingPayments';
import { TRANSFERS_DASHBOARD_BRIEF } from '@/shared/lib/hooks/storages/useTransfersDashboardGetBrief';

import { GET_ACQUIRING_STORE_KEY } from './useGetAcquiring';
import { GET_BANNERS_STORE_KEY } from './useGetBanners';
import { GET_BRIEF_V2_STORE_KEY } from './useGetBriefv2';
import { LIST_AVAILABLE_POCKETS_STORE_KEY } from './useListAvailablePockets';
import { LIST_BILLS_STORAGE_KEY } from './useListBills';
import { LIST_CARDHOLDER_CARDS_STORE_KEY } from './useListCardholderCards';
import { LIST_CURRENCIES_STORE_KEY } from './useListCurrencies';
import { LIST_DRAFT_TRANSFER_FILTERS_STORAGE_KEY } from './useListDraftTransferFilters';
import { LIST_DRAFT_TRANSFERS_STORAGE_KEY } from './useListDraftTransfers';

export const STORE_KEYS = [
  PORTFOLIO_ID_STORE_KEY,
  LIST_AVAILABLE_POCKETS_STORE_KEY,
  LIST_CURRENCIES_STORE_KEY,
  LIST_CARDHOLDER_CARDS_STORE_KEY,
  GET_BRIEF_V2_STORE_KEY,
  LIST_BILLS_STORAGE_KEY,
  LIST_DRAFT_TRANSFERS_STORAGE_KEY,
  LIST_DRAFT_TRANSFER_FILTERS_STORAGE_KEY,
  GET_ACQUIRING_STORE_KEY,
  GET_BANNERS_STORE_KEY,
  REGULAR_PAYMENTS_GET_UPCOMING_PAYMENTS,
  TRANSFERS_DASHBOARD_BRIEF,
  DATEV_INVOICE_EXPORT_GET_INFORMATION_STORAGE_KEY,
  LEXWARE_INVOICE_EXPORT_GET_INFORMATION_STORAGE_KEY,
];
