import { RGB } from '@/shared/ui/vivid-ui/shared';

export const parseRgbaString = (rgb: string): null | RGB => {
  const match = rgb.match(/\d+\.?\d*/g);

  if (!match || (match.length !== 3 && match.length !== 4)) return null;

  /* eslint-disable perfectionist/sort-objects */
  return {
    red: parseInt(match[0]),
    green: parseInt(match[1]),
    blue: parseInt(match[2]),
  };
  /* eslint-enable perfectionist/sort-objects */
};
