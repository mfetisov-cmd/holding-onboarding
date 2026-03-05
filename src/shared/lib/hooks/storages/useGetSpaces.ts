import { useCallback, useEffect } from 'react';

import { SpacesClient } from '@/shared/api/main/browser';
import {
  GetSpacesResponse,
  Space,
} from '@/shared/api/main/generated/vivid/frontend/shared/superapp_backend/pocket/api/v1/spaces_service_pb';
import { useAsyncFunction } from '@/shared/lib/hooks/useAsyncFunction';
import { useValue } from '@/shared/lib/hooks/useValue';
import { useActiveSpace } from '@/shared/ui/components/Spaces/ActiveSpaceProvider';

export type GetSpacesValue = {
  spacesList?: Space[];
};

export const GET_SPACES_STORE_KEY = 'get-spaces-state';

export const useGetSpaces = (initialValue?: GetSpacesResponse) => {
  const activeSpace = useActiveSpace();
  const { execute, isLoading } = useAsyncFunction(SpacesClient.getSpaces);

  const [{ spacesList }, emitter] = useValue<GetSpacesValue>(
    {
      spacesList: initialValue?.getSpacesList(),
    },
    GET_SPACES_STORE_KEY,
  );

  const updateSpacesList = useCallback(async () => {
    const res = await execute({});

    emitter.update({
      spacesList: res?.getSpacesList(),
    });

    return res?.getSpacesList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSpace]);

  useEffect(() => {
    if (!initialValue && !spacesList) {
      updateSpacesList();
    }
    if (initialValue) {
      emitter.update({
        spacesList: initialValue?.getSpacesList(),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    spacesList,
    updateSpacesList,
  };
};
