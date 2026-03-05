import { Box } from '@/shared/ui/vivid-ui/components/Box';
import {
  PolymorphicSquareIconProps,
  SquareIconProps,
} from '@/shared/ui/vivid-ui/components/Icons/types';
import { createPolymorphicComponent } from '@/shared/ui/vivid-ui/shared';

const Icon = ({
  component = 'svg',
  size = 24,
  ...rest
}: Omit<PolymorphicSquareIconProps, 'color'>) => {
  return (
    <Box
      component={component}
      height={`${size}rem`}
      viewBox="0 0 24 24"
      width={`${size}rem`}
      {...rest}
    >
      <g clipPath="url(#drive_export_a)">
        <path
          d="m3.512 18.315.882 1.523c.183.321.447.573.756.756l3.15-5.452H2c0 .355.092.71.275 1.031l1.237 2.142Z"
          fill="#0066DA"
        />
        <path
          d="M12 8.727 8.85 3.275a2.08 2.08 0 0 0-.756.756l-5.82 10.08c-.179.314-.274.67-.274 1.031h6.3L12 8.727Z"
          fill="#00AC47"
        />
        <path
          d="M18.85 20.595a2.08 2.08 0 0 0 .756-.756l.366-.63 1.753-3.036c.183-.32.275-.676.275-1.031h-6.3l1.34 2.635 1.81 2.817Z"
          fill="#EA4335"
        />
        <path
          d="m12 8.727 3.15-5.452A2.014 2.014 0 0 0 14.12 3H9.88c-.366 0-.72.103-1.03.275L12 8.727Z"
          fill="#00832D"
        />
        <path
          d="M15.7 15.142H8.3l-3.15 5.453c.31.183.664.274 1.03.274H17.82c.367 0 .722-.103 1.03-.274l-3.15-5.453Z"
          fill="#2684FC"
        />
        <path
          d="m18.816 9.071-2.91-5.04a2.081 2.081 0 0 0-.756-.756L12 8.727l3.7 6.415h6.288c0-.355-.091-.71-.274-1.03L18.816 9.07Z"
          fill="#FFBA00"
        />
      </g>
      <defs>
        <clipPath id="drive_export_a">
          <path d="M2 3h20v17.869H2z" fill="#fff" />
        </clipPath>
      </defs>
    </Box>
  );
};

export const DriveExport24 = createPolymorphicComponent<'svg', SquareIconProps>(
  Icon,
);
