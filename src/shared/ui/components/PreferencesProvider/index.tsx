// PreferencesProvider

'use client';
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { setCookie } from '@/shared/lib/utils/cookies';
import {
  PREFERENCES_ACCOUNTS_LIST_STATE,
  PREFERENCES_EXPANDED_SECTIONS,
  PREFERENCES_THEME_NAME,
} from '@/shared/model/constants/cookies';
import { ThemeName } from '@/shared/ui/vivid-ui/components/DefaultThemeProvider';

export type AccountsListState = 'closed' | 'opened';
export type PreferredTheme = ThemeName;

type Preferences = {
  accountsListState: AccountsListState;
  expandedSections: string[];
  onChangeAccountsListState: (value: AccountsListState) => void;
  onChangeThemeName: (value: PreferredTheme) => void;
  themeName: PreferredTheme;
  toggleSectionExpansion: (section: string) => void;
};

const Context = createContext<Preferences | undefined>(undefined);

type PreferencesProviderProps = PropsWithChildren<{
  defaultPreferencesAccountListState?: string;
  defaultPreferencesExpandedSections?: string;
  defaultPreferencesThemeName?: string;
}>;
export const PreferencesProvider = ({
  children,
  defaultPreferencesAccountListState,
  defaultPreferencesExpandedSections,
  defaultPreferencesThemeName,
}: PreferencesProviderProps) => {
  const [themeName, setThemeName] = useState(
    () => (defaultPreferencesThemeName || 'light') as PreferredTheme,
  );

  const [accountsListState, setAccountsListState] = useState(
    () => (defaultPreferencesAccountListState || 'opened') as AccountsListState,
  );

  const [expandedSections, setExpandedSections] = useState<string[]>(() =>
    (defaultPreferencesExpandedSections || '').split(','),
  );

  const setSetting = useCallback((name: string, value: string) => {
    setCookie(name, value);
  }, []);

  const onChangeThemeName = useCallback(
    (value: PreferredTheme) => {
      setSetting(PREFERENCES_THEME_NAME, value);
      setThemeName(value);
    },
    [setSetting],
  );

  const onChangeAccountsListState = useCallback(
    (value: AccountsListState) => {
      setSetting(PREFERENCES_ACCOUNTS_LIST_STATE, value);
      setAccountsListState(value);
    },
    [setSetting],
  );

  const toggleSectionExpansion = useCallback((section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section],
    );
  }, []);

  useEffect(() => {
    setSetting(PREFERENCES_EXPANDED_SECTIONS, expandedSections.join(','));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expandedSections]);

  const value = useMemo(
    () => ({
      accountsListState,
      expandedSections,
      onChangeAccountsListState,
      onChangeThemeName,
      themeName,
      toggleSectionExpansion,
    }),
    [
      themeName,
      onChangeThemeName,
      onChangeAccountsListState,
      accountsListState,
      expandedSections,
      toggleSectionExpansion,
    ],
  );

  return (
    <Context.Provider value={value}>
      <meta name="color-scheme" content={themeName} />
      {children}
    </Context.Provider>
  );
};

export const usePreferences = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error('usePreferences must be used within PreferencesProvider');
  }
  return context;
};
