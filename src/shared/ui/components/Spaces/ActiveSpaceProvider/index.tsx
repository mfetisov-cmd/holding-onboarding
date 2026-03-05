'use client';
import React, { PropsWithChildren, useMemo } from 'react';

import { Space } from '@/shared/api/main/generated/vivid/frontend/shared/superapp_backend/pocket/api/v1/spaces_service_pb';
import { getSmeSpaceDetails } from '@/shared/ui/components/Spaces/hooks/useSmeSpaceDetails';

type ActiveSpaceContextType = {
  activeSpaceData: null | Uint8Array;
};

export const ActiveSpaceContext = React.createContext<
  ActiveSpaceContextType | undefined
>(undefined);

type AuthProviderProps = PropsWithChildren<ActiveSpaceContextType>;

export function ActiveSpaceProvider({
  activeSpaceData,
  children,
}: AuthProviderProps) {
  const value = useMemo(() => ({ activeSpaceData }), [activeSpaceData]);

  return (
    <ActiveSpaceContext.Provider value={value}>
      {children}
    </ActiveSpaceContext.Provider>
  );
}

export function useActiveSpace() {
  const context = React.useContext(ActiveSpaceContext);

  if (context === undefined) {
    throw new Error('useActiveSpace must be used within ActiveSpaceProvider');
  }

  return Space.deserializeBinary(context.activeSpaceData!);
}

export function useLegalEntityId() {
  const context = React.useContext(ActiveSpaceContext);

  if (context === undefined) {
    throw new Error('useActiveSpace must be used within ActiveSpaceProvider');
  }

  return useMemo(
    () =>
      getSmeSpaceDetails(
        Space.deserializeBinary(context.activeSpaceData!),
      )?.getLegalEntityId()!,
    [context],
  );
}
