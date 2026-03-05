import { HSL } from '@/shared/ui/vivid-ui/shared';
import { hexToRgb } from '@/shared/ui/vivid-ui/utils/colors/hexToRgb';
import { parseRgbaString } from '@/shared/ui/vivid-ui/utils/colors/parseRgbaString';
import { rgbToHsl } from '@/shared/ui/vivid-ui/utils/colors/rgbToHsl';

export const colorToHsla = (color: string): HSL | null => {
  if (!color.trim()) {
    return null;
  }

  const rgba = color.startsWith('#') ? hexToRgb(color) : parseRgbaString(color);

  return rgba ? rgbToHsl(rgba) : null;
};
