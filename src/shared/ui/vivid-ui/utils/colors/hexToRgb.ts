import { RGB } from '@/shared/ui/vivid-ui/shared';

export const hexToRgb = (hex?: string): null | RGB => {
  let hexValue = hex?.replace(/^#/, '').trim();

  // For empty and invalid values return null
  if (!hexValue || (hexValue.length !== 3 && hexValue.length !== 6)) {
    return null;
  }

  // If passed short hex, double values, eg #13f -> #1133ff
  if (hexValue.length === 3) {
    hexValue = hexValue
      .split('')
      .map((x) => x + x)
      .join('');
  }

  const parsedToInt = parseInt(hexValue, 16);

  /* eslint-disable perfectionist/sort-objects */
  return {
    red: (parsedToInt >> 16) & 255,
    green: (parsedToInt >> 8) & 255,
    blue: parsedToInt & 255,
  };
  /* eslint-enable perfectionist/sort-objects */
};
