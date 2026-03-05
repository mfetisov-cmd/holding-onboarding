import { HSL, RGB } from '@/shared/ui/vivid-ui/shared';

export const rgbToHsl = (value: RGB): HSL => {
  const red = value.red / 255;
  const green = value.green / 255;
  const blue = value.blue / 255;

  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const delta = max - min;

  const lightness = (max + min) / 2;

  const saturation =
    delta === 0 ? 0 : delta / (1 - Math.abs(2 * lightness - 1));

  let hue = 0;

  if (delta === 0) {
    hue = 0;
  }

  switch (max) {
    case red:
      hue = (green - blue) / delta;
      break;
    case green:
      hue = 2 + (blue - red) / delta;
      break;
    case blue:
      hue = 4 + (red - green) / delta;
      break;
  }

  hue = Math.min(hue * 60, 360);

  if (hue < 0) {
    hue += 360;
  }

  /* eslint-disable perfectionist/sort-objects */
  return {
    hue: isNaN(hue) ? 0 : Math.round(hue),
    saturation: isNaN(saturation) ? 0 : Math.round(saturation * 100),
    lightness: isNaN(lightness) ? 0 : Math.round(lightness * 100),
  };
  /* eslint-enable perfectionist/sort-objects */
};
