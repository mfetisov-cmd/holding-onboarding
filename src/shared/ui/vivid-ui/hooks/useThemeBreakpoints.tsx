'use client';

import { createContext, PropsWithChildren, useContext, useMemo } from 'react';

import { useTheme } from 'styled-components';
import UaParser from 'ua-parser-js';

import { useBreakpoint } from '@/shared/ui/vivid-ui/hooks/useBreakpoint';

type ThemeBreakpointState = {
  isDesktop: boolean; // any desktop breakpoint
  isDesktopS: boolean;
  isDesktopXS: boolean;
  isMobile: boolean; // any mobile breakpoint
  isMobileS: boolean;
  isTablet: boolean;
  isUndefined: boolean; // in case we didn't detect device
};

const defaultState: ThemeBreakpointState = {
  isDesktop: false,
  isDesktopS: false,
  isDesktopXS: false,
  isMobile: false,
  isMobileS: false,
  isTablet: false,
  isUndefined: false,
};

const ThemeBreakpointContext =
  createContext<ThemeBreakpointState>(defaultState);

type Props = PropsWithChildren<{
  userAgent: string;
}>;

export const ThemeBreakpointProvider = ({ children, userAgent }: Props) => {
  const theme = useTheme();
  const ua = new UaParser(userAgent);

  const config = useMemo(
    () =>
      [
        '0',
        theme.token.breakPoints.mobile,
        theme.token.breakPoints.tablet,
        theme.token.breakPoints.desktopXS,
        theme.token.breakPoints.desktopS,
      ].map((it) => parseInt(it)),
    [theme.token.breakPoints],
  );

  const { breakpoint } = useBreakpoint(config, -1);

  const breakpointsState = useMemo(() => {
    const state = { ...defaultState };

    // If there is a value different from -1, it means that the hydration
    // process is completed and hook useBreakpoint calculated current
    // breakpoint based on window width
    if (breakpoint !== -1) {
      return {
        isDesktop: breakpoint >= 3,
        isDesktopS: breakpoint === 4,
        isDesktopXS: breakpoint === 3,
        isMobile: breakpoint <= 1,
        isMobileS: breakpoint === 0,
        isTablet: breakpoint === 2,
        isUndefined: false,
      };
    }

    // -1 is default value from useBreakpoint meaning current execution is
    // happening on the server side, or it is an initial execution on a client

    const result = ua.getResult();

    // Trying to guess current breakpoint using parsed user agent
    if (result.device.type === 'mobile' || result.os.name === 'iOS') {
      // Mobile
      state.isMobileS = true;
      state.isMobile = true;
    } else if (result.device.type === 'tablet') {
      // Tablet
      state.isTablet = true;
    } else if (
      result.device.type === undefined ||
      !['mobile', 'wearable'].includes(result.device.type)
    ) {
      // Desktop
      state.isDesktopXS = true;
      state.isDesktopS = true;
      state.isDesktop = true;
    } else {
      // Default = can't detect
      state.isUndefined = true;
    }

    return state;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breakpoint]);

  return (
    <ThemeBreakpointContext.Provider value={breakpointsState}>
      {children}
    </ThemeBreakpointContext.Provider>
  );
};

/**
 * React hook to determine the current theme breakpoint.
 */
export const useThemeBreakpoints = () => useContext(ThemeBreakpointContext);
