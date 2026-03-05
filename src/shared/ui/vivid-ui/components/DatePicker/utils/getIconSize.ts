import { Size } from '@/shared/ui/vivid-ui/shared';

export const getIconSize = (size?: Size) => {
  switch (size) {
    case 'small':
      return 20;
    case 'medium':
      return 24;
    case 'large':
    default:
      return 26;
  }
};
