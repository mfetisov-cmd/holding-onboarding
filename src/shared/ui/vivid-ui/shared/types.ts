export type ObjectKeys<T> = keyof T;
export type ObjectValues<T> = T[keyof T];

/*
Utility type to use with Styled-Components to auto-rename props and avoid passing it to html-markup

Usage example:

type OriginalProps = {
  size: 'small' | 'medium';
};

type StyledProps = PrefixType<Original, '$'>;

const styles: StyledProps = {
  $size: "small"
}
 */
export type PrefixType<T, P extends string> = {
  [K in keyof T as K extends string ? `${P}${K}` : never]: T[K];
};

// Common component types
export type SizeLarge = 'large';
export type SizeMedium = 'medium';
export type SizeSmall = 'small';
export type SizeXS = 'xs';
export type Size = SizeLarge | SizeMedium | SizeSmall;

export type RGB = {
  blue: number;
  green: number;
  red: number;
};

export type HSL = {
  hue: number;
  lightness: number;
  saturation: number;
};
