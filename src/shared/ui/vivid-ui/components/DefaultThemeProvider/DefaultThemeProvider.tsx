/* eslint-disable perfectionist/sort-objects */
/* eslint-disable perfectionist/sort-object-types */
'use client';
import { PropsWithChildren, ReactElement } from 'react';

import { ThemeProvider } from 'styled-components';

import {
  ColorPalette,
  ColorPaletteDark,
  ColorPaletteLight,
} from '@/shared/ui/vivid-ui/components/DefaultThemeProvider/ColorPalette';

type Colors = Record<
  | 'c0'
  | 'c1'
  | 'c10'
  | 'c11'
  | 'c12'
  | 'c13'
  | 'c14'
  | 'c15'
  | 'c15t'
  | 'c16'
  | 'c17'
  | 'c18'
  | 'c2'
  | 'c3'
  | 'c3w'
  | 'c4'
  | 'c5'
  | 'c6'
  | 'c6l'
  | 'c6t'
  | 'c7'
  | 'c7t'
  | 'c8'
  | 'c8t'
  | 'c9'
  | 'c9t',
  string
>;

type Fonts = Record<
  | 'bodyL'
  | 'bodyLAcc'
  | 'bodyM'
  | 'bodyMAcc'
  | 'bodyS'
  | 'bodySAcc'
  | 'bodyXS'
  | 'captionCaps'
  | 'captionM'
  | 'captionMAcc'
  | 'captionS'
  | 'captionSAcc'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'h7'
  | 'labelL'
  | 'labelLAcc'
  | 'labelM'
  | 'labelMAcc'
  | 'labelS'
  | 'labelSAcc'
  | 'paragraphL'
  | 'paragraphLAcc'
  | 'paragraphM'
  | 'paragraphMAcc'
  | 'paragraphS'
  | 'paragraphSAcc'
  | 'paragraphXS'
  | 'paragraphXSAcc',
  string
>;

type BreakPoints = Record<
  'desktopS' | 'desktopXS' | 'mobile' | 'tablet',
  string
>;

type ZIndex = Record<
  | 'banner'
  | 'base'
  | 'dropdown'
  | 'max'
  | 'modal'
  | 'overlay'
  | 'popover'
  | 'skipLink'
  | 'sticky'
  | 'stickySecondary'
  | 'toast'
  | 'tooltip',
  number
>;

export type SeedToken = {
  breakPoints: BreakPoints;
  colorDark: Colors;
  colorLight: Colors;
  paletteDark: ColorPalette;
  paletteLight: ColorPalette;
  font: Fonts;
  zIndex: ZIndex;
};

export type MappedToken = {
  borderRadiusS: string;
  borderRadiusXS: string;
  borderRadius2XS: string;
  borderRadiusM: string;
  borderRadiusL: string;
  borderRadiusRounded: string;
  spacing2XS: string;
  spacingXS: string;
  spacingS: string;
  spacingM: string;
  spacingL: string;
  spacingXL: string;
  color: Colors;
  palette: ColorPalette;
  sizeUnits: (count: number) => string;
  rem: (count: number) => string;
  // Default sizes for common layouts
  fullScreenModalColumnWidth: string;
};

export type Token = SeedToken & MappedToken;

export type ThemeName = 'dark' | 'light';

export type Theme = {
  name: ThemeName;
  token: Token;
};

const sizeUnits = (count: number): string => `${count * 2}rem`;
const rem = (count: number): string => `${count}rem`;

const ColorLight: Colors = {
  c0: '#FFFFFF',
  c1: '#333333',
  c10: '#75C0F6',
  c11: '#FFFFFF',
  c12: '#FFFFFF',
  c13: '#9292FF',
  c14: '#FFFFFF',
  c15: '#F5F5F4',
  c15t: '#F5F5F4',
  c16: '#F360B0',
  c17: 'rgba(51, 51, 51, 0.05)',
  c18: '#333333',
  c2: '#79797F',
  c3: '#BBBBC1',
  c3w: '#E7E7E4',
  c4: '#ECEEF2',
  c5: '#F5F5F4',
  c6: '#7D33F6',
  c6l: '#F4EDFF',
  c6t: '#ECD4FF',
  c7: '#FFBE64',
  c7t: '#FFECD1',
  c8: '#FF6955',
  c8t: '#FFE1DD',
  c9: '#65DD6B',
  c9t: '#DAF7DB',
};

const ColorDark: Colors = {
  c0: '#000000',
  c1: '#FFFFFF',
  c10: '#75C0F6',
  c11: '#FFFFFF',
  c12: '#212121',
  c13: '#9292FF',
  c14: '#131313',
  c15: '#F360B0',
  c15t: '#000000',
  c16: '#F360B0',
  c17: 'rgba(255, 255, 255, 0.1)',
  c18: '#333333',
  c2: '#98989D',
  c3: '#4F4F53',
  c3w: '#4B4B49',
  c4: '#333333',
  c5: '#212121',
  c6: '#8A47F7',
  c6l: '#33254C',
  c6t: '#33254C',
  c7: '#FFBE64',
  c7t: '#332614',
  c8: '#FF6955',
  c8t: '#331A17',
  c9: '#65DD6B',
  c9t: '#142C15',
};

const Font: Fonts = {
  captionCaps: "normal 500 10rem/1.1  var(--font-inter), 'Roboto', sans-serif",
  captionM: "normal 400 14rem/1.1  var(--font-inter), 'Roboto', sans-serif",
  captionMAcc: "normal 600 14rem/1.1  var(--font-inter), 'Roboto', sans-serif",
  captionS: "normal 400 12rem/1.1  var(--font-inter), 'Roboto', sans-serif",
  captionSAcc: "normal 700 12rem/1.1  var(--font-inter), 'Roboto', sans-serif",

  h1: "normal 500 56rem/1.1  var(--font-satoshi), 'Roboto', sans-serif",
  h2: "normal 700 48rem/1.1  var(--font-satoshi), 'Roboto', sans-serif",
  h3: "normal 700 40rem/1.0  var(--font-satoshi), 'Roboto', sans-serif",
  h4: "normal 700 32rem/1.0  var(--font-satoshi), 'Roboto', sans-serif",
  h5: "normal 700 28rem/1.0  var(--font-satoshi), 'Roboto', sans-serif",
  h6: "normal 700 23rem/1.0  var(--font-satoshi), 'Roboto', sans-serif",
  h7: "normal 400 21rem/1.0  var(--font-satoshi), 'Roboto', sans-serif",

  // Inputs & Buttons
  labelL: "normal 400 18rem/1.1  var(--font-inter), 'Roboto', sans-serif",
  labelLAcc: "normal 500 18rem/1.1  var(--font-inter), 'Roboto', sans-serif",
  labelM: "normal 400 16rem/1.0  var(--font-inter), 'Roboto', sans-serif",
  labelMAcc: "normal 500 16rem/1.0  var(--font-inter), 'Roboto', sans-serif",
  labelS: "normal 400 14rem/1.0  var(--font-inter), 'Roboto', sans-serif",
  labelSAcc: "normal 500 14rem/1.0  var(--font-inter), 'Roboto', sans-serif",

  paragraphL: "normal 400 18rem/1.1  var(--font-inter), 'Roboto', sans-serif",
  paragraphLAcc:
    "normal 500 18rem/1.1  var(--font-inter), 'Roboto', sans-serif",
  paragraphM: "normal 400 16rem/1.1  var(--font-inter), 'Roboto', sans-serif",
  paragraphMAcc:
    "normal 500 16rem/1.1  var(--font-inter), 'Roboto', sans-serif",
  paragraphS: "normal 400 14rem/1.2  var(--font-inter), 'Roboto', sans-serif",
  paragraphSAcc:
    "normal 500 14rem/1.0  var(--font-inter), 'Roboto', sans-serif",
  paragraphXS: "normal 400 12rem/1.2  var(--font-inter), 'Roboto', sans-serif",
  paragraphXSAcc:
    "normal 500 12rem/1.0  var(--font-inter), 'Roboto', sans-serif",

  bodyL: "normal 400 18rem/1.2  var(--font-inter), 'Roboto', sans-serif",
  bodyLAcc: "normal 500 18rem/1.2  var(--font-inter), 'Roboto', sans-serif",
  bodyM: "normal 400 16rem/1.2  var(--font-inter), 'Roboto', sans-serif",
  bodyMAcc: "normal 500 16rem/1.2  var(--font-inter), 'Roboto', sans-serif",
  bodyS: "normal 400 14rem/1.4  var(--font-inter), 'Roboto', sans-serif",
  bodySAcc: "normal 500 14rem/1.4  var(--font-inter), 'Roboto', sans-serif",
  bodyXS: "normal 400 12rem/1.3  var(--font-inter), 'Roboto', sans-serif",
};

const BreakPoints: BreakPoints = {
  desktopS: '1280px',
  desktopXS: '1120px',
  mobile: '375px',
  tablet: '768px',
};

const zIndexSeed = {
  base: 0,
  dropdown: 1000,
  stickySecondary: 1010,
  sticky: 1020,
  banner: 1040,
  popover: 1060,
  skipLink: 1080,
  tooltip: 1120,
  overlay: 1140,
  modal: 1160,
  toast: 1200,
};

const zIndex: ZIndex = {
  ...zIndexSeed,
  max: 2147483647, // Maximum valid z-index value
};

const seedToken: SeedToken = {
  breakPoints: BreakPoints,
  colorDark: ColorDark,
  colorLight: ColorLight,
  paletteDark: ColorPaletteDark,
  paletteLight: ColorPaletteLight,
  font: Font,
  zIndex,
};

const mappedToken: Omit<MappedToken, 'color' | 'palette'> = {
  borderRadiusRounded: sizeUnits(50),
  borderRadiusL: sizeUnits(12),
  borderRadiusM: sizeUnits(6),
  borderRadiusS: sizeUnits(4),
  borderRadiusXS: sizeUnits(3),
  borderRadius2XS: sizeUnits(4),
  spacing2XS: sizeUnits(2),
  spacingXS: sizeUnits(4),
  spacingS: sizeUnits(6),
  spacingM: sizeUnits(8),
  spacingL: sizeUnits(12),
  spacingXL: sizeUnits(16),
  sizeUnits,
  rem,
  fullScreenModalColumnWidth: sizeUnits(210),
};

export const LightTheme: Theme = {
  name: 'light',
  token: {
    ...seedToken,
    ...mappedToken,
    color: seedToken.colorLight,
    palette: seedToken.paletteLight,
  },
};

export const DarkTheme: Theme = {
  name: 'dark',
  token: {
    ...seedToken,
    ...mappedToken,
    color: seedToken.colorDark,
    palette: seedToken.paletteDark,
  },
};

export const DefaultTheme = LightTheme;

type ThemeInterface = typeof DefaultTheme;

declare module 'styled-components' {
  interface DefaultTheme extends ThemeInterface {}

  /*
    The default type is DefaultTheme | undefined,
    but in this case we need to correct the use of the useTheme hook everywhere because of the possible undefined.
    We overwrite this type, agreeing that we use useTheme ONLY inside the provider.
  */
  export function useTheme(): DefaultTheme;
}

// TODO think how to support system theme in ssr, may be via middleware how it works with lang;
// export const getPreferredColorScheme = (): ThemeName => {
//   if (typeof window !== 'undefined' && window.matchMedia) {
//     if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//       return 'dark';
//     } else {
//       return 'light';
//     }
//   }
//   return 'light';
// };

export type PreferredTheme = 'dark' | 'light';
export const THEME_NAMES: PreferredTheme[] = ['light', 'dark'];

export function DefaultThemeProvider({
  children,
  themeName = 'light',
}: PropsWithChildren<{ themeName?: PreferredTheme }>): ReactElement<any> {
  return (
    <ThemeProvider theme={themeName === 'light' ? DefaultTheme : DarkTheme}>
      {children}
    </ThemeProvider>
  );
}
