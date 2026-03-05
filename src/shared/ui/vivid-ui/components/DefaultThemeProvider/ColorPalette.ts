/* eslint-disable perfectionist/sort-objects */
/* eslint-disable perfectionist/sort-object-types */

type MaterialVariant =
  | 'c100'
  | 'c200'
  | 'c300'
  | 'c400'
  | 'c50'
  | 'c500'
  | 'c600'
  | 'c700'
  | 'c800'
  | 'c900';

type MaterialColor =
  | 'carbon'
  | 'flamingo'
  | 'grass'
  | 'purple'
  | 'salmon'
  | 'sand'
  | 'sky';

export type ColorPalette = Record<
  MaterialColor,
  Record<MaterialVariant, string>
>;

export const ColorPaletteDark: ColorPalette = {
  carbon: {
    c50: '#0F0F10',
    c100: '#1B1B1D',
    c200: '#303034',
    c300: '#47474B',
    c400: '#5E5E64',
    c500: '#76767E',
    c600: '#909097',
    c700: '#ABABB0',
    c800: '#CFCFD3',
    c900: '#EFEFF0',
  },
  flamingo: {
    c50: '#4D1E38',
    c100: '#6D2B4F',
    c200: '#9A3D6F',
    c300: '#BC4A88',
    c400: '#D9569D',
    c500: '#F360B0',
    c600: '#F58FC2',
    c700: '#F8B2D3',
    c800: '#FACFE3',
    c900: '#FDE8F1',
  },
  sky: {
    c50: '#253D4E',
    c100: '#34566E',
    c200: '#4A799C',
    c300: '#5B95BF',
    c400: '#69ACDC',
    c500: '#75C0F6',
    c600: '#9BCEF8',
    c700: '#B9DBFA',
    c800: '#D3E8FB',
    c900: '#EAF4FD',
  },
  grass: {
    c50: '#204622',
    c100: '#2D6330',
    c200: '#408C44',
    c300: '#4EAB53',
    c400: '#5AC660',
    c500: '#65DD6B',
    c600: '#91E495',
    c700: '#B3EBB5',
    c800: '#D0F2D1',
    c900: '#E9F9E9',
  },
  salmon: {
    c50: '#51211B',
    c100: '#722F26',
    c200: '#A14236',
    c300: '#C65142',
    c400: '#E45E4C',
    c500: '#FF6955',
    c600: '#FF9489',
    c700: '#FFB5AE',
    c800: '#FFD0CD',
    c900: '#FFE9E7',
  },
  sand: {
    c50: '#513C20',
    c100: '#72552D',
    c200: '#A1783F',
    c300: '#C6934D',
    c400: '#E4AA59',
    c500: '#FFBE64',
    c600: '#FFCD91',
    c700: '#FFDAB3',
    c800: '#FFE7CF',
    c900: '#FFF3E8',
  },
  purple: {
    c50: '#16092C',
    c100: '#230E46',
    c200: '#3C1977',
    c300: '#5724AC',
    c400: '#732FE3',
    c500: '#8A54F7',
    c600: '#9F7AF8',
    c700: '#B69DF9',
    c800: '#CDBEFB',
    c900: '#E6DEFD',
  },
};

export const ColorPaletteLight: ColorPalette = {
  carbon: {
    c50: '#FFFFFF',
    c100: '#F4F4F6',
    c200: '#E9E9EC',
    c300: '#DADADD',
    c400: '#BFBFC5',
    c500: '#919197',
    c600: '#78787D',
    c700: '#323234',
    c800: '#1E1E1F',
    c900: '#000000',
  },
  flamingo: {
    c50: '#FEF4F8',
    c100: '#FDE8F1',
    c200: '#FACFE3',
    c300: '#F8B2D3',
    c400: '#F58FC2',
    c500: '#F360B0',
    c600: '#D9569D',
    c700: '#BC4A88',
    c800: '#9A3D6F',
    c900: '#6D2B4F',
  },
  sky: {
    c50: '#F5F9FE',
    c100: '#EAF4FD',
    c200: '#D3E8FB',
    c300: '#B9DBFA',
    c400: '#9BCEF8',
    c500: '#75C0F6',
    c600: '#69ACDC',
    c700: '#5B95BF',
    c800: '#4A799C',
    c900: '#34566E',
  },
  grass: {
    c50: '#F4FCF4',
    c100: '#E9F9E9',
    c200: '#D0F2D1',
    c300: '#B3EBB5',
    c400: '#91E495',
    c500: '#65DD6B',
    c600: '#5AC660',
    c700: '#4EAB53',
    c800: '#408C44',
    c900: '#2D6330',
  },
  salmon: {
    c50: '#FFF4F3',
    c100: '#FFE9E7',
    c200: '#FFD0CD',
    c300: '#FFB5AE',
    c400: '#FF9489',
    c500: '#FF6955',
    c600: '#E45E4C',
    c700: '#C65142',
    c800: '#A14236',
    c900: '#722F26',
  },
  sand: {
    c50: '#FFF9F4',
    c100: '#FFF3E8',
    c200: '#FFE7CF',
    c300: '#FFDAB3',
    c400: '#FFCD91',
    c500: '#FFBE64',
    c600: '#E4AA59',
    c700: '#C6934D',
    c800: '#A1783F',
    c900: '#72552D',
  },
  purple: {
    c50: '#F2EFFE',
    c100: '#E6DEFD',
    c200: '#CDBEFB',
    c300: '#B69DF9',
    c400: '#9F7AF8',
    c500: '#8A54F7',
    c600: '#732FE3',
    c700: '#5724AC',
    c800: '#3C1977',
    c900: '#230E46',
  },
};
