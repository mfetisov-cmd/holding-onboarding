import { useTheme } from 'styled-components';

import { Column, Row } from '@/shared/ui/vivid-ui/components/Layout';

import { useCardInputState } from '../utils';
import { CardholderNameField } from './CardholderNameField';
import { CvvField } from './CvvField';
import { ExpirationField } from './ExpirationField';
import { PanField } from './PanField';

type CardInputBaseLayoutProps = {
  withCardBrandIcon?: boolean;
};

export const CardInputBaseLayout = ({
  withCardBrandIcon = false,
}: CardInputBaseLayoutProps) => {
  const theme = useTheme();
  const [data] = useCardInputState();

  return (
    <Column
      gap={
        data.size === 'medium' ? theme.token.spacingXS : theme.token.spacingM
      }
    >
      <PanField withCardBrandIcon={withCardBrandIcon} />
      <Row
        gap={
          data.size === 'medium' ? theme.token.spacingXS : theme.token.spacingM
        }
      >
        <ExpirationField fullWidth />
        <CvvField fullWidth />
      </Row>
      <CardholderNameField />
    </Column>
  );
};
