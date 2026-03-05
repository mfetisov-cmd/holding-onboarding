// GetCSVStatementParamsResponse

import { useEffect, useState } from 'react';

import { SmeStatementsClient } from '@/shared/api/main/browser';
import { GetCSVStatementParamsResponse } from '@/shared/api/main/generated/vivid/frontend/shared/sme/gateway/statements/v1/sme_statements_service_pb';
import { getLocalizedMessage } from '@/shared/lib/hooks/useLocalizedMessage';
import { useActiveSpace } from '@/shared/ui/components/Spaces/ActiveSpaceProvider';

export const useGetCSVStatementParams = () => {
  const activeSpace = useActiveSpace();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [response, setResponse] =
    useState<GetCSVStatementParamsResponse | null>(null);

  const getCSVStatementParams = async () => {
    setPending(true);
    try {
      const res = await SmeStatementsClient.getCSVStatementParams({
        legalEntityId: activeSpace.getRelatedId(),
      });
      setResponse(res);
    } catch (e) {
      setError(getLocalizedMessage(e)?.getMessage());
    } finally {
      setPending(false);
    }
  };

  useEffect(() => {
    getCSVStatementParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { error, pending, response };
};
