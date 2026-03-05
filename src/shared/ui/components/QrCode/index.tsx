import { useTheme } from 'styled-components';

import { QRCode as QRCodeBase } from '@/screens/onboarding/components/QRCode';

type Props = {
  data: string;
  size?: number;
};

export const QrCode = ({ data, size = 260 }: Props) => {
  const theme = useTheme();

  return (
    <QRCodeBase
      bgColor={theme.token.color.c0}
      color={theme.token.color.c1}
      data={data}
      image={`/images/logo/vivid_v_${theme.name}.png`}
      size={size}
    />
  );
};
