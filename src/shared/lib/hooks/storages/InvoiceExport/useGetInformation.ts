import { useCallback, useEffect, useMemo } from 'react';

import { useTranslations } from 'next-intl';

import { useMemberAccessActionAvailability } from '@/modules/MemberAccess';
import { InvoiceExportClient } from '@/shared/api/main/browser';
import { SmeSpaceAction } from '@/shared/api/main/generated/vivid/frontend/shared/sme/gateway/members/access/v1/sme_member_access_pb';
import {
  AccountingSystemType,
  AccountingSystemTypeMap,
  GetInformationResponse,
} from '@/shared/api/main/generated/vivid/frontend/web/capt/datev/v1/invoice_export_service_pb';
import { useAsyncFunction } from '@/shared/lib/hooks/useAsyncFunction';
import { useValue } from '@/shared/lib/hooks/useValue';
import { useLegalEntityId } from '@/shared/ui/components/Spaces/ActiveSpaceProvider';
import { useToaster } from '@/shared/ui/components/Toaster';

export const DATEV_INVOICE_EXPORT_GET_INFORMATION_STORAGE_KEY =
  'datev-invoice-export-get-information';

export const LEXWARE_INVOICE_EXPORT_GET_INFORMATION_STORAGE_KEY =
  'lexware-invoice-export-get-information';

const storageKeyBySystemType = {
  [AccountingSystemType.ACCOUNTING_SYSTEM_TYPE_DATEV]:
    DATEV_INVOICE_EXPORT_GET_INFORMATION_STORAGE_KEY,
  [AccountingSystemType.ACCOUNTING_SYSTEM_TYPE_LEXWARE]:
    LEXWARE_INVOICE_EXPORT_GET_INFORMATION_STORAGE_KEY,
  [AccountingSystemType.ACCOUNTING_SYSTEM_TYPE_UNSPECIFIED]:
    DATEV_INVOICE_EXPORT_GET_INFORMATION_STORAGE_KEY,
};

type StorageValue = {
  getInformationResponse?: GetInformationResponse | null;
  isLoading?: boolean;
};

type UseGetInformationProps = {
  systemType: AccountingSystemTypeMap[keyof AccountingSystemTypeMap];
};

export const useGetInformation = ({ systemType }: UseGetInformationProps) => {
  const legalEntityId = useLegalEntityId();
  const { toast } = useToaster();
  const t = useTranslations('common.datev_invoice_export_info');

  const [data, emitter] = useValue<StorageValue>(
    {},
    storageKeyBySystemType[systemType],
  );

  const isManageDatevIntegrationAvailable = useMemberAccessActionAvailability(
    SmeSpaceAction.SME_SPACE_ACTION_MANAGE_DATEV_INTEGRATION,
  );

  const isManageLexwareIntegrationAvailable = useMemberAccessActionAvailability(
    SmeSpaceAction.SME_SPACE_ACTION_MANAGE_LEXWARE_INTEGRATION,
  );

  const isManageIntegrationAvailable = useMemo(() => {
    switch (systemType) {
      case AccountingSystemType.ACCOUNTING_SYSTEM_TYPE_DATEV:
        return isManageDatevIntegrationAvailable;
      case AccountingSystemType.ACCOUNTING_SYSTEM_TYPE_LEXWARE:
        return isManageLexwareIntegrationAvailable;
      default:
        return false;
    }
  }, [
    systemType,
    isManageDatevIntegrationAvailable,
    isManageLexwareIntegrationAvailable,
  ]);

  const { error, execute, isLoading } = useAsyncFunction(
    InvoiceExportClient.getInformation,
  );

  const updateGetInformation = useCallback(async () => {
    if (!isManageIntegrationAvailable) {
      return null;
    }

    const res = await execute({ legalEntityId, systemType });

    emitter.update({ getInformationResponse: res });
    return res;
  }, [
    isManageIntegrationAvailable,
    execute,
    legalEntityId,
    systemType,
    emitter,
  ]);

  useEffect(() => {
    if (error) {
      toast({
        id: 'accounting-integration-get-info-error',
        severity: 'error',
        title: t('get_info_error'),
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  useEffect(() => {
    emitter.update({ isLoading });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return {
    error,
    getInformationResponse: data.getInformationResponse,
    isLoading: data.isLoading,
    isManageDatevIntegrationAvailable,
    isManageLexwareIntegrationAvailable,
    updateGetInformation,
  };
};
