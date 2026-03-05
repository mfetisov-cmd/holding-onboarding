import {
  createContext,
  MutableRefObject,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useRef,
} from 'react';

interface DefaultValue {
  addPopup: (id: string) => void;
  appRootSelector?: string;
  refActivePopupID: MutableRefObject<string> | null;
  refPopupIDs: MutableRefObject<string[]> | null;
  removePopup: (id: string) => void;
}

const PopupsContext = createContext({
  addPopup: () => {},
  refActivePopupID: null,
  refPopupIDs: null,
  removePopup: () => {},
} as DefaultValue);

const PopupsContextProvider = ({
  appRootSelector,
  children,
}: {
  appRootSelector?: string;
  children: ReactNode;
}) => {
  const refPopupIDs = useRef<string[]>([]);
  const refActivePopupID = useRef<string>('');

  const addPopup = useCallback(
    (id: string) => {
      refPopupIDs.current = [...refPopupIDs.current, id];
      refActivePopupID.current = id;
    },
    [refPopupIDs],
  );

  const removePopup = useCallback(
    (id: string) => {
      const ids = refPopupIDs.current.filter((popupId) => popupId !== id);
      refPopupIDs.current = ids;
      refActivePopupID.current = ids[ids.length - 1] || '';
    },
    [refPopupIDs],
  );

  const value = useMemo<DefaultValue>(
    () => ({
      addPopup,
      appRootSelector,
      refActivePopupID,
      refPopupIDs,
      removePopup,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps -- disabled while refactoring, delete this comment after consideration if array of dependencies have more than one dependency
    [refPopupIDs, appRootSelector],
  );

  return (
    <PopupsContext.Provider value={value}>{children}</PopupsContext.Provider>
  );
};

const usePopupContext = () => {
  const context = useContext(PopupsContext);
  if (!context) {
    throw new Error('usePopup must be used within PopupsContextProvider');
  }
  return context;
};

export { PopupsContext, PopupsContextProvider, usePopupContext };
