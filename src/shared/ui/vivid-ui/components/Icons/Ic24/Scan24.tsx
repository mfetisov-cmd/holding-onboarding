import { Box } from '@/shared/ui/vivid-ui/components/Box';
import {
  PolymorphicSquareIconProps,
  SquareIconProps,
} from '@/shared/ui/vivid-ui/components/Icons/types';
import { createPolymorphicComponent } from '@/shared/ui/vivid-ui/shared';

const Icon = ({
  color,
  component = 'svg',
  size = 24,
  ...rest
}: PolymorphicSquareIconProps) => {
  return (
    <Box
      component={component}
      fill={color}
      height={`${size}rem`}
      viewBox="0 0 24 24"
      width={`${size}rem`}
      {...rest}
    >
      <path d="M5 9V5h4V3H3v6zM3 15v6h6v-2H5v-4zM15 21h6v-6h-2v4h-4zM19 9h2V3h-6v2h4z" />
      <path
        clipRule="evenodd"
        d="M21 13h-4v3.28l-.758.19L16 15.5l.242.97-.003.001-.006.002-.02.005-.076.017-.271.06c-.231.05-.56.116-.952.181-.779.13-1.838.264-2.914.264s-2.135-.134-2.914-.264a21 21 0 0 1-1.298-.258l-.021-.006-.006-.001h-.003L8 15.5l-.242.97L7 16.28V13H3v-2h4V7.72l.757-.19L8 8.5l-.243-.97.004-.001.006-.001.02-.006a10 10 0 0 1 .347-.078c.231-.05.56-.115.952-.18C9.865 7.134 10.924 7 12 7s2.135.134 2.914.264a21 21 0 0 1 1.298.258l.021.006.006.001h.003L16 8.5l.242-.97.758.19V11h4zm-6-2V9.31a20 20 0 0 0-.414-.074C13.865 9.116 12.924 9 12 9s-1.865.116-2.586.236Q9.19 9.274 9 9.31V11zm-6 2v1.69q.19.036.414.074c.721.12 1.662.236 2.586.236s1.865-.116 2.586-.236q.224-.038.414-.074V13z"
        fillRule="evenodd"
      />
    </Box>
  );
};

export const Scan24 = createPolymorphicComponent<'svg', SquareIconProps>(Icon);
